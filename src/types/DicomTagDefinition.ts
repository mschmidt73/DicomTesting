import { DicomKeyword, DicomTag, DicomValueRepresentation } from ".";

export interface DicomTagDefinition {
    displayName: string;
    element: string;
    group: string;
    keyword: DicomKeyword;
    tag: DicomTag;
    vr: DicomValueRepresentation;
    vm: string;
}
