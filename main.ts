import { Plugin, TFile } from 'obsidian';

import { ReaderWriter } from 'files/readerWriter';

export default class ImageMetadataPlugin extends Plugin {

    private readerWriter: ReaderWriter;

    async onload() {
        this.readerWriter = new ReaderWriter(this.app);

        if (!this.readerWriter.canWrite) {
            return;
        }

        this.registerEvent(
            this.app.workspace.on('file-open', this.onFileOpen.bind(this))
        );
    }

    onunload() {

    }

    async onFileOpen() {
        const supportedExtension = ['jpg', 'jpeg'];
        const file = this.app.workspace.getActiveFile()!;

        if (supportedExtension.contains(file.extension)) {
            await this.addControls(file);
        }
    }

    private async addControls(file: TFile) {
        const viewer = this.app.workspace.activeLeaf!.view.containerEl.querySelector('.view-content')!;

        const image = await this.readerWriter.readFile(file);

        const descriptionLabel = document.createElement('div');
        descriptionLabel.textContent = 'Description';
        descriptionLabel.style.paddingTop = "var(--size-4-4)";
        viewer.appendChild(descriptionLabel);

        const descriptionInput = document.createElement('textarea');
        descriptionInput.setAttribute("rows", "5");
        descriptionInput.style.width = "100%";
        descriptionInput.style.marginTop = "var(--size-4-1)";
        descriptionInput.value = image.imageDescription;
        viewer.appendChild(descriptionInput);

        descriptionInput.addEventListener('change', () => {
            image.imageDescription = descriptionInput.value;
            this.readerWriter.writeFile(file, image);
        });
    }
}
