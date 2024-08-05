import extractChunks from 'png-chunks-extract';
import encodeChunks from 'png-chunks-encode';

import { FileFormat } from "./file";
import { decode, encode, ITxtChunk } from "./png-itxt-chunk";
import { Xmp } from "../metadata/xmp";

interface RawChunk {
    name: string;
    data: Uint8Array;
}

export class PngFile implements FileFormat {
    private readonly chunks: RawChunk[];

    private readonly isNewXmpChunk: boolean;
    private readonly xmpChunkData: ITxtChunk;
    private readonly xmpChunkIndex: number;
    private readonly xmp: Xmp;

    constructor(data: Buffer) {
        this.chunks = extractChunks(data);

        this.xmpChunkIndex = -1;

        for (let i = 0; i < this.chunks.length; i++) {
            const chunk = this.chunks[i];

            if (chunk.name !== "iTXt") {
                continue;
            }

            const iTxtChunkData = decode(chunk.data);

            if (iTxtChunkData.keyword === "XML:com.adobe.xmp") {
                this.xmpChunkIndex = i;
                this.xmpChunkData = iTxtChunkData;
                this.xmp = new Xmp(iTxtChunkData.text);
                this.isNewXmpChunk = false;
            }
        }

        if (this.xmpChunkIndex === -1) {
            this.xmp = new Xmp();
            this.xmpChunkData = {
                keyword: "XML:com.adobe.xmp",
                translatedKeyword: "",
                languageTag: "",
                compressionFlag: false,
                compressionMethod: 0,
                text: this.xmp.toString()
            }
            this.isNewXmpChunk = true;
            this.xmpChunkIndex = this.chunks.findIndex(p => p.name === "IDAT");

            this.chunks.splice(this.xmpChunkIndex, 0, {
                name: "iTXt",
                data: encode(this.xmpChunkData)
            });
        }
    }

    get imageDescription(): string {
        return this.xmp.getAltArrayProperty("dc:description");
    }

    set imageDescription(s: string) {
        this.xmp.setAltArrayProperty("dc:description", s);

        this.xmpChunkData.text = this.xmp.toString();
        this.chunks[this.xmpChunkIndex].data = encode(this.xmpChunkData);
    }

    toBuffer(): Buffer {
        const chunksToWrite = (this.isNewXmpChunk && this.imageDescription === "") ?
            this.chunks.filter((_, index) => index !== this.xmpChunkIndex) :
            this.chunks;

        return Buffer.from(encodeChunks(chunksToWrite));
    }
}
