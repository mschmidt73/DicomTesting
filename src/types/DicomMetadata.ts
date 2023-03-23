import { DicomTag } from "./";

/*
 * https://dicom.nema.org/medical/Dicom/2017c/output/chtml/part05/sect_6.2.html
 */
export type DicomValueRepresentation =
  "AE" |  // Application Entity
  "AS" |  // Age String
  "AT" |  // Attribute Tag
  "CS" |  // Code String
  "DA" |  // Date
  "DS" |  // Decimal String
  "DT" |  // Date Time
  "FL" |  // Floating Point Single
  "FD" |  // Floating Point Double
  "IS" |  // Integer String
  "LO" |  // Long String
  "LT" |  // Lont Text
  "OB" |  // Other Byte
  "OD" |  // Other Double
  "OF" |  // Other Float
  "OL" |  // Other Long
  "OW" |  // Other Word
  "PN" |  // Person Name
  "SH" |  // Short String
  "SL" |  // Signed Long
  "SQ" |  // Sequence of Itens
  "SS" |  // Signed Short
  "ST" |  // Short Text
  "TM" |  // Time
  "UC" |  // Unlimited Characters
  "UI" |  // Unique Identifier
  "UL" |  // Unsigned Long
  "UN" |  // Unknown
  "UR" |  // Universal Resource Identifier / Locator (URI/URL)
  "US" |  // Unsigned Short
  "UT"    // Unlimited Text
;

export interface DicomTagDefinition {
  displayName: string;
  element: string;
  group: string;
  keyword: string;
  tag: DicomTag;
  vr: DicomValueRepresentation;
  vm: string;
}

export interface DicomValue {
  vr: DicomValueRepresentation
  Value?: ValueField
}

export type DicomDataElement = [DicomTag, DicomValue];

export type DicomValueObject = {
  [key: string]: string
}

export type ValueField = number[] | string[] | DicomDataElement[] | DicomValueObject[];

// export type DicomMetadata = {
//   [key in DicomTag]: DicomValue;
// };

export type DicomMetadata = Record<DicomTag, DicomValue>;

export type DicomQueryResult = Array<DicomMetadata>;

// export function getSingleValue<T extends Date | number | string>(metadata: DicomMetadata, tag: DicomTag) {
//   let theValue: T | undefined = undefined;

//   if (metadata.has(tag)) {
//     const value = metadata.get(tag)?.Value;
    
//     if (value !== undefined && value.length > 0) {
//       const first = value[0];

//       if (typeof first === "string") {

//       }
//     }
//   }
//   else {
//     throw new Error("No element in sequence");
//   }

//   if (theValue === undefined || theValue === null) {
//     throw new Error("No element in sequence");
//   }

//   return theValue;
// }

export function getSingleValue(metadata: DicomMetadata, tag: DicomTag): string {
  let theValue: string | undefined = undefined;

  const dicomValue = metadata[tag];

  if (dicomValue === undefined) {
    throw new Error("No element in sequence");
  }

  if (dicomValue.vr === "SQ") {
    throw new Error("Can't get single value for a SQ value representation");
  }

  const value = dicomValue.Value;
  
  if (value !== undefined && value.length > 0) {
    const first = value[0];

    if (typeof first === "string") {
    theValue = first; 
    }
    else if (typeof first === "number") {
      theValue = String(first);
    }
    else {
      if (dicomValue.vr === "PN") {
        theValue = (first as DicomValueObject)["Alphabetic"];
      }
    }
  }

  if (theValue === undefined || theValue === null) {
    throw new Error("No element in sequence");
  }

  return theValue;
}
