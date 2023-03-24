const dicomElementRegistry = require("./dicomElementRegistry.json");
const fs = require("fs");

const exclude = [ "ExtendedOffsetTable", "ExtendedOffsetTableLengths", "SelectorOVValue", "SelectorSVValue" ]

const main = () => {
  const parseValueRepresentation = (vr) => {
    if (vr === undefined || vr === "") {
      return "NA";
    }
    else if (vr.includes("/")) {
      return vr.split("/");
    }

    return vr;
  }

  const toDicomTagDefinition = (element) => {
    const tagDefinition = {
      displayName: element.displayName,
      element: element.element,
      group: element.group,
      keyword: element.keyword,
      tag: element.tag,
      vr: parseValueRepresentation(element.vr),
      vm: element.vm
    };

    return tagDefinition;
  }

  const writeFile = (path, lines) => {
    if (fs.existsSync(path)) {
      fs.unlinkSync(path);
    }

    let stream = fs.createWriteStream(path, { flags: "w" });

    stream.on("finish", function () {
      console.log(`Finished writing '${path}'`);
    });

    stream.on("error", function (err) {
      console.log(err);
    });

    lines.forEach(function (line) {
      stream.write(line);
    });

    stream.end();
  }

  try {
    const keywordLines = [];
    const keywordsLines = [];
    const tagLines = [];
    const tagsLines = [];

    keywordLines.push("/******************************\n");
    keywordLines.push(" * Generated File: Do not edit\n");
    keywordLines.push(" *****************************/\n");
    keywordLines.push("export type DicomKeyword = \n");

    keywordsLines.push("/******************************\n");
    keywordsLines.push(" * Generated File: Do not edit\n");
    keywordsLines.push(" *****************************/\n");
    keywordsLines.push("import { DicomKeyword, DicomTagDefinition } from \".\";\n\n");
    keywordsLines.push("export const DicomKeywords: Record<DicomKeyword, DicomTagDefinition> = {\n");

    tagLines.push("/******************************\n");
    tagLines.push(" * Generated File: Do not edit\n");
    tagLines.push(" *****************************/\n");
    tagLines.push("export type DicomTag = \n");

    tagsLines.push("/******************************\n");
    tagsLines.push(" * Generated File: Do not edit\n");
    tagsLines.push(" *****************************/\n");
    tagsLines.push("import { DicomKeyword, DicomTagDefinition } from \".\";\n\n")
    tagsLines.push("export const DicomTags: Record<DicomTag, DicomTagDefinition> = {\n");

    dicomElementRegistry.forEach((element, index) => {
      if (exclude.includes(element.keyword)) {
        return;
      }

      const definition = toDicomTagDefinition(element);
      const json = JSON.stringify(definition);

      keywordLines.push(`  // ${element.displayName} / ${element.tag} / ${element.vr}\n`);
      keywordLines.push(`  "${element.keyword}"`);
      tagLines.push(`  // ${element.displayName} / ${element.keyword} / ${element.vr}\n`);
      tagLines.push(`  "${element.tag}"`);

      keywordsLines.push(`  "${element.keyword}": ${json}`);
      tagsLines.push(`  "${element.tag}": ${json}`);

      if (index < dicomElementRegistry.length - 1) {
        keywordLines.push(" |");
        keywordsLines.push(",");
        tagLines.push(" |");
        tagsLines.push(",");
      }

      keywordLines.push("\n");
      keywordsLines.push("\n");
      tagLines.push("\n");
      tagsLines.push("\n");
    });

    keywordLines.push("\n");
    keywordsLines.push("}\n");
    tagLines.push("\n");
    tagsLines.push("}\n");

    writeFile("src/types/DicomKeyword.ts", keywordLines);
    writeFile("src/types/DicomKeywords.ts", keywordsLines);
    writeFile("src/types/DicomTag.ts", tagLines);
    writeFile("src/types/DicomTags.ts", tagsLines);
  }
  catch (e) {
    console.log(e);
  }
}

main();
