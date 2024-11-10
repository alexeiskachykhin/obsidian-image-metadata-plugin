
import { FileFormat } from "./file";
import { encodeChunks, extractChunks, WebpChunk } from "../lib/webp-parser";
import { Xmp } from "../metadata/xmp";

export class WebpFile implements FileFormat {
    private readonly chunks: WebpChunk[];

    private readonly isNewXmpChunk: boolean;
    private readonly xmpChunk: WebpChunk;
    private readonly xmpChunkIndex: number;
    
    private readonly xmp: Xmp;

    constructor(data: Buffer) {
        this.chunks = extractChunks(data);

        this.xmpChunkIndex = this.chunks.findIndex(c => c.fourCC === "XMP ");

        if (this.xmpChunkIndex !== -1) {
            this.xmpChunk = this.chunks[this.xmpChunkIndex];
            this.xmp = new Xmp(this.xmpChunk.chunkPayload.toString('utf8'));
            this.isNewXmpChunk = false;
        } else {
            this.xmp = new Xmp();
            this.xmpChunk = {
                fourCC: "XMP ",
                chunkSize: this.xmp.toBuffer().length,
                chunkPayload: this.xmp.toBuffer()
            }
            this.isNewXmpChunk = true;
            this.xmpChunkIndex = this.chunks.length;

            this.chunks.splice(this.xmpChunkIndex, 0, this.xmpChunk);
        }
    }

    get imageDescription(): string {
        return this.xmp.getAltArrayProperty("dc:description");
    }

    set imageDescription(s: string) {
        this.xmp.setAltArrayProperty("dc:description", s);

        this.xmpChunk.chunkPayload = this.xmp.toBuffer();
        this.xmpChunk.chunkSize = this.xmpChunk.chunkPayload.length;
    }

    toBuffer(): Buffer {
        const chunksToWrite = (this.isNewXmpChunk && this.imageDescription === "") ?
            this.chunks.filter((_, index) => index !== this.xmpChunkIndex) :
            this.chunks;

        return Buffer.from(encodeChunks(chunksToWrite));
    }
}
