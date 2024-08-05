import zlip from 'zlib';
import { Parser } from 'binary-parser'

export interface ITxtChunk {
    keyword: string;
    compressionFlag: boolean;
    compressionMethod: number;
    languageTag: string;
    translatedKeyword: string;
    text: string;
}

// http://www.libpng.org/pub/png/spec/1.2/PNG-Chunks.html#C.iTXt
const iTxtChunkParser = new Parser()
    .string("keyword", { zeroTerminated: true })
    .uint8("compressionFlag")
    .uint8("compressionMethod")
    .string("languageTag", { zeroTerminated: true })
    .string("translatedKeyword", { zeroTerminated: true })
    .buffer("text", { readUntil: "eof" })

export function decode(data: Uint8Array): ITxtChunk {
    const vars = iTxtChunkParser.parse(data);

    const uncompressedTextBuffer = Boolean(vars.compressionFlag) ?
        zlip.inflateSync(vars.text) :
        vars.text;

    return {
        keyword: vars.keyword,
        compressionFlag: Boolean(vars.compressionFlag),
        compressionMethod: vars.compressionMethod,
        languageTag: vars.languageTag,
        translatedKeyword: vars.translatedKeyword,
        text: new TextDecoder().decode(uncompressedTextBuffer),
    };
}

export function encode(chunk: ITxtChunk): Uint8Array {
    const encoder = new TextEncoder();
    const encodedText = encoder.encode(chunk.text);

    const compressedTextBuffer = chunk.compressionFlag ?
        zlip.deflateSync(encodedText) :
        encodedText;

    return Buffer.concat([
        encoder.encode(chunk.keyword),
        Buffer.from([0]),
        Buffer.from([Number(chunk.compressionFlag)]),
        Buffer.from([Number(chunk.compressionMethod)]),
        encoder.encode(chunk.languageTag),
        Buffer.from([0]),
        encoder.encode(chunk.translatedKeyword),
        Buffer.from([0]),
        compressedTextBuffer
    ]);
}
