import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  process.env.CONTRACT_ADDRESS,
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Bonfire",
        description: "This Bonfire welcomes you back once more!",
        image: readFileSync("scripts/assets/BONFIRE.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()