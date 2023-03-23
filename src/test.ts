import { DicomMetadata, DicomQueryResult, DicomTag, DicomTagDefinition, getSingleValue } from "./types";

import data from "./data/dicom-series-metadata.json";

const dicomSeriesMetadata = (data as unknown) as DicomQueryResult;

dicomSeriesMetadata.forEach((metadata, index) => {
    const tag = "00080070";
    const manufacturer = getSingleValue(metadata, tag);

    console.log(`Manufacturer (${tag}): ${manufacturer}`);
});
