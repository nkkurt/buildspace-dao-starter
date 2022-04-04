import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop(
  "0x556D3203f957Ca1E25dC00A1cb99787a23FE10c9"
);

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Fellow Vegetarian",
        description: "This NFT will give you access to VegDao!",
        image: readFileSync("scripts/assets/vegdao.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
