const dicomElementRegistry = require("./dicomElementRegistry.json");
const fs = require("fs");

const main = () => {
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
    const tagLines = [];

    keywordLines.push("/******************************\n");
    keywordLines.push(" * Generated File: Do not edit\n");
    keywordLines.push(" *****************************/\n");
    keywordLines.push("export type DicomKeyword = \n");

    tagLines.push("/******************************\n");
    tagLines.push(" * Generated File: Do not edit\n");
    tagLines.push(" *****************************/\n");
    tagLines.push("export type DicomTag = \n");

    dicomElementRegistry.forEach((element, index) => {
      keywordLines.push(`  // ${element.displayName} / ${element.tag} / ${element.vr}\n`);
      keywordLines.push(`  "${element.keyword}"`);
      tagLines.push(`  // ${element.displayName} / ${element.keyword} / ${element.vr}\n`);
      tagLines.push(`  "${element.tag}"`);

      if (index < dicomElementRegistry.length - 1) {
        keywordLines.push(" |");
        tagLines.push(" |");
      }

      keywordLines.push("\n");
      tagLines.push("\n");
    });

    keywordLines.push("\n");
    tagLines.push("\n");

    writeFile("src/types/DicomKeyword.ts", keywordLines);
    writeFile("src/types/DicomTag.ts", tagLines);
  }
  catch (e) {
    console.log(e);
  }
}

main();
