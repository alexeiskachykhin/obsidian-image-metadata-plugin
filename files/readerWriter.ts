import { App, FileSystemAdapter, TFile } from "obsidian";
import { writeFileSync } from 'fs';

import { FileFormat } from "./file";
import { JpgFile } from "./jpg";
import { PngFile } from "./png";
import { WebpFile } from "./webp";

export class ReaderWriter {
    public readonly supportedExtensions = ['jpg', 'jpeg', 'png', 'webp'];

    constructor(private readonly app: App) { }

    public async readFile(file: TFile): Promise<FileFormat> {
        const data = Buffer.from(await this.app.vault.readBinary(file));

        switch (file.extension) {
            case 'jpeg':
            case 'jpg':
                return new JpgFile(data);
            case 'png':
                return new PngFile(data);
            case 'webp':
                return new WebpFile(data);
            default:
                throw new Error(`Unsupported file extension ${file.extension}`);
        }
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
