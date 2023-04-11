import React, { useState } from "react";
import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { FileList } from "components/FileList";
import { SpriteCanvas } from "components/SpriteCanvas";
import { SpriteTabs } from "components/SpriteTabs";
import { ImageData } from "types/ImageData";
import { generateCSS } from "helpers/generateCSS";
import { generateJSON } from "helpers/generateJSON";
import { createSpriteImage } from "helpers/createSpriteImage";

const SpriteGeneratorPage = () => {
  const [selectedFiles, setSelectedFiles] = useState<ImageData[]>([]);
  const [spriteImageUrl, setSpriteImageUrl] = useState("");
  const [jsonData, setJsonData] = useState<string>("");
  const [cssCode, setCssCode] = useState("");

  const handleFilesChange = async (newFiles: ImageData[]) => {
    setSelectedFiles(newFiles);

    if (newFiles.length > 0) {
      const spacing = 20; // You can adjust the spacing as needed
      const spriteCanvas = createSpriteImage(newFiles, spacing);
      const blob = await new Promise((resolve) =>
        spriteCanvas.toBlob(resolve, "image/png")
      );
      const spriteImageUrl = URL.createObjectURL(blob as Blob);
      setSpriteImageUrl(spriteImageUrl);

      const json = generateJSON(newFiles, spacing);
      setJsonData(JSON.stringify(json, null, 2));

      const spriteWidth = spriteCanvas.width;
      const spriteHeight = spriteCanvas.height;
      setCssCode(
        generateCSS(json, "<YOUR_SPRITE_IMAGE>", spriteWidth, spriteHeight)
      );

      const getCSS = generateCSS(
        json,
        spriteImageUrl,
        spriteWidth,
        spriteHeight
      );

      const existingStyle = document.querySelector(".sprite");
      if (existingStyle) existingStyle.remove();

      const style = document.createElement("style");
      style.innerHTML = getCSS;
      style.classList.add("sprite");
      document.head.appendChild(style);
    } else {
      setSpriteImageUrl("");
      setJsonData("");
      setCssCode("");
    }
  };
  return (
    <Container maxWidth="100%" padding="20px 50px">
      <Flex justifyContent="space-between" gap="20px">
        <Box width="450px">
          <FileList
            selectedFiles={selectedFiles}
            onFilesChange={handleFilesChange}
          />
        </Box>
        <Box width="100%">
          <SpriteTabs
            spriteImageUrl={spriteImageUrl}
            jsonData={jsonData}
            cssCode={cssCode}
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default SpriteGeneratorPage;
