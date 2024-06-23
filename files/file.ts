interface FileFormat {
    get imageDescription(): string;
    set imageDescription(s: string);
    
    toBuffer(): Buffer;
}
