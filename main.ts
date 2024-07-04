import { FileView, Plugin, TFile } from 'obsidian';

import { ReaderWriter } from './files/readerWriter';

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
        const supportedExtensions = ['jpg', 'jpeg'];
        const file = this.app.workspace.getActiveFile()!;

        if (supportedExtensions.contains(file.extension)) {
            await this.addControls(file);
        }
    }

    private async addControls(file: TFile) {
        const view = this.app.workspace.getActiveViewOfType(FileView);

        if (!view) {
            return;
        }

        const viewContent = view.containerEl.querySelector('.view-content')!;

        const image = await this.readerWriter.readFile(file);

        viewContent.createDiv({ 
            cls: 'image-metadata__tag-name',
            text: 'Description'
        });

        const descriptionInput = viewContent.createEl('textarea', {
            cls: 'image-metadata__tag-value',
            text: image.imageDescription
        });

        descriptionInput.addEventListener('change', () => {
            image.imageDescription = descriptionInput.value;
            this.readerWriter.writeFile(file, image);
        });
    }
}
