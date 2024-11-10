import { Parser } from "binary-parser";

export interface WebpChunk {
    fourCC: string;
    chunkSize: number;
    chunkPayload: Buffer;
}

// https://developers.google.com/speed/webp/docs/riff_container
const webpChunkParser = new Parser()
    .endianness("little")
    .string("fourCC", { length: 4, encoding: "ascii" })
    .uint32("chunkSize")
    .buffer("chunkPayload", { length: "chunkSize" })
    .seek(function () { return this.chunkSize % 2 });


export interface Webp {
    riff: string;
    fileSize: number;
    webp: string;
    chunks: WebpChunk[];
}

const webpParser = new Parser()
    .endianness("little")
    .string("riff", { length: 4, encoding: "ascii" })
    .uint32("fileSize")
    .string("webp", { length: 4, encoding: "ascii" })
    .array("chunks", { 
        type: webpChunkParser, 
        lengthInBytes: function () {
            return this.fileSize - "webp".length;
        } 
    });

export function extractChunks(data: Buffer): WebpChunk[] {
    const file: Webp = webpParser.parse(data);

    if (file.riff !== "RIFF") { throw new Error('riff is missing in the file header'); }
    if (file.webp !== "WEBP") { throw new Error('webp is missing in the file header'); }

    return file.chunks;
}

export function encodeChunks(chunks: WebpChunk[]): Buffer {
    const uint32 = (n: number): Buffer => {
        const buffer = new ArrayBuffer(4);
        new DataView(buffer).setUint32(0, n, true);
        return Buffer.from(buffer);
    };

    const encodedChunks = Buffer.concat(chunks.map(chunk => {
        return Buffer.concat([
            Buffer.from(chunk.fourCC),
            uint32(chunk.chunkPayload.length),
            chunk.chunkPayload,
            Buffer.from(chunk.chunkPayload.length % 2 === 0 ? []: [0])
        ]);
    }));

    return Buffer.concat([
        Buffer.from("RIFF"),
        uint32(encodedChunks.length + "WEBP".length),
        Buffer.from("WEBP"),
        encodedChunks
    ]);
}
