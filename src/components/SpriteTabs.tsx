import React from "react";
import {
  Button,
  Flex,
  SimpleGrid,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { JSONData } from "types/JSONData";
import { ROOT_CLASS_NAME } from "helpers/variables";

interface SpriteTabsProps {
  spriteImageUrl: string;
  jsonData: string;
  cssCode: string;
}

export const SpriteTabs: React.FC<SpriteTabsProps> = ({
  spriteImageUrl,
  jsonData,
  cssCode,
}) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.download = "sprite.png";
    link.href = spriteImageUrl;
    link.click();
  };

  return (
    <Tabs>
      <TabList>
        <Tab>Image</Tab>
        <Tab>JSON</Tab>
        <Tab>CSS</Tab>
        <Tab>Usage</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          {spriteImageUrl && (
            <>
              <Button onClick={handleDownload}>Download Sprite</Button>
              <img
                src={spriteImageUrl}
                alt="Sprite"
                style={{
                  marginTop: "20px",
                  objectFit: "cover",
                }}
              />
            </>
          )}
          {!spriteImageUrl && (
            <Text>Upload images to generate sprite image</Text>
          )}
        </TabPanel>
        <TabPanel>
          <pre>{jsonData}</pre>
        </TabPanel>
        <TabPanel>
          <pre>{cssCode}</pre>
        </TabPanel>
        <TabPanel>
          {jsonData &&
            JSON.parse(jsonData).map((item: JSONData, index: number) => (
              <Flex flexDirection="column" gap="20px" key={index}>
                <Stack
                  className={`${ROOT_CLASS_NAME} ${item.className}`}
                  width="auto"
                  height="auto"
                />
                <pre>{`<div class="${ROOT_CLASS_NAME} ${item.className}" />`}</pre>
              </Flex>
            ))}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
