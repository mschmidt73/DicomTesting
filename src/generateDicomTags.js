const dicomElementRegistry = require("./dicomElementRegistry.json");
const fs = require("fs");

const main = () => {
  try {
    fs.unlinkSync("types/DicomKeywords.ts");
    fs.unlinkSync("types/DicomTag.ts");

    let stream = fs.createWriteStream("types/DicomTag.ts", { flags: "w"} );

    stream.on("finish", function () {
      console.log("Finished writing types/DicomTag.ts");
    });

    stream.on("error", function (err) {
      console.log(err);
    });

    const keywordLines = [];
    const tagLines = [];

    stream.write("/******************************\n");
    stream.write(" * Generated File: Do not edit\n");
    stream.write(" *****************************/\n");
    stream.write("export type DicomTag = \n");

    dicomElementRegistry.forEach((element, index) => {
      stream.write(`  // ${element.displayName} / ${element.keyword} / ${element.vr}\n`);
      stream.write(`  "${element.tag}"`);

      if (index < dicomElementRegistry.length - 1) {
        stream.write(` |`);
      }

      stream.write(`\n`);
    });

    stream.write(`;\n`);
    stream.end();
  }
  catch (e) {
    console.log(e);
  }
}

main();
