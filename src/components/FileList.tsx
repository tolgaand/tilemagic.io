import React from "react";
import {
  Box,
  IconButton,
  Flex,
  Text,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { ImageData } from "../types/ImageData";
import { FileDisplay } from "./FileDisplay";

interface FileListProps {
  selectedFiles: ImageData[];
  onFilesChange: (files: ImageData[]) => void;
}

export const FileList: React.FC<FileListProps> = ({
  selectedFiles,
  onFilesChange,
}) => {
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const filesArray = Array.from(e.target.files).map(
      (file) => new ImageData(file)
    );

    await Promise.all(filesArray.map((imageData) => imageData.loadImage()));

    onFilesChange([...selectedFiles, ...filesArray]);
  };

  return (
    <Box>
      <Button
        leftIcon={<AddIcon />}
        onClick={() => {
          const input = document.createElement("input");
          input.type = "file";
          input.multiple = true;
          input.onchange = (e: Event) => {
            const target = e.target as HTMLInputElement;
            if (target.files) {
              handleImageChange({
                target,
              } as React.ChangeEvent<HTMLInputElement>);
            }
          };
          input.click();
        }}
      >
        Add Image
      </Button>

      {selectedFiles.map((image) => (
        <FileDisplay
          key={image.id}
          image={image}
          onDelete={(id) => {
            onFilesChange(selectedFiles.filter((image) => image.id !== id));
          }}
        />
      ))}
    </Box>
  );
};
