import { DOMParser, XMLSerializer } from "@xmldom/xmldom";

const xmpScaffolding = require('./xmpScaffolding.xml');

export class Xmp {
    private readonly dom: Document;

    constructor(s?: string) {
        this.dom = new DOMParser().parseFromString(s ?? xmpScaffolding, "text/xml");
        this.dom = this.normalizeXmp(this.dom);
    }

    public getAltArrayProperty(name: string): string {
        const propertyNode = this.dom.getElementsByTagName(name)[0];
        const rdfLi = propertyNode?.getElementsByTagName("rdf:li")[0];

        return rdfLi?.textContent || "";
    }

    public setAltArrayProperty(name: string, value: string) {
        const propertyNode = this.dom.getElementsByTagName(name)[0];

        if (propertyNode) {
            propertyNode.parentNode?.removeChild(propertyNode);
        }

        if (value === "") {
            return;
        }

        const rdfDescription = this.dom.getElementsByTagName('rdf:Description')[0];

        const newPropertyNode = this.dom.createElement(name);
        rdfDescription.appendChild(newPropertyNode);

        const rdfAlt = this.dom.createElement("rdf:Alt");
        newPropertyNode.appendChild(rdfAlt);

        const rdfLi = this.dom.createElement("rdf:li");
        rdfLi.textContent = value;
        rdfLi.setAttribute('xml:lang', 'x-default');
        rdfAlt.appendChild(rdfLi);
    }

    public toString(): string {
        return new XMLSerializer().serializeToString(this.dom);
    }

    private normalizeXmp(xmp: Document): Document {
        const xmpScaffoldingDoc = new DOMParser().parseFromString(xmpScaffolding, "text/xml");

        const xmpMeta = xmp.getElementsByTagName('x:xmpmeta');

        if (xmpMeta.length !== 1) {
            throw new Error('Xmp metadata is invalid: x:xmpmeta is missing');
        }

        const rdf = xmpMeta[0].getElementsByTagName('rdf:RDF');

        if (rdf.length !== 1) {
            throw new Error('Xml metadata is invalid: rdf:RDF is missing');
        }

        let rdfDescription = rdf[0].getElementsByTagName('rdf:Description');

        if (rdfDescription.length === 0) {
            rdfDescription = xmpScaffoldingDoc.getElementsByTagName('rdf:Description');
            rdf[0].appendChild(rdfDescription[0]);
        }

        return xmp;
    }
}
