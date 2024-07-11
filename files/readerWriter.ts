import { App, FileSystemAdapter, TFile } from "obsidian";
import { writeFileSync } from 'fs';

import { JpgFile } from "./jpg";
import { FileFormat } from "./file";

export class ReaderWriter {
    constructor(private readonly app: App) {}

    public async readFile(file: TFile): Promise<FileFormat> {
        const data = Buffer.from(await this.app.vault.readBinary(file));
        return new JpgFile(data);
    }

    public async writeFile(file: TFile, image: FileFormat) {
        if (!(this.app.vault.adapter instanceof FileSystemAdapter)) {
            throw new Error('File system is not writable');
        }

        const filePath = this.app.vault.adapter.getFullPath(file.path);
        writeFileSync(filePath, image.toBuffer());
    }

    public get canWrite(): boolean {
        return (this.app.vault.adapter instanceof FileSystemAdapter);
    }
}
