import React from "react";
import { Avatar, Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { ImageData } from "types/ImageData";

interface FileDisplayProps {
  image: ImageData;
  onDelete: (name: string) => void;
}

export const FileDisplay: React.FC<FileDisplayProps> = ({
  image,
  onDelete,
}) => {
  return (
    <Flex marginTop="20px" alignItems="center" gap="10px">
      <Avatar size="sm" src={image.image.src} />
      <Text>{image.file.name}</Text>
      <Flex gap="5px">
        <IconButton
          aria-label="Delete"
          icon={<DeleteIcon />}
          onClick={() => onDelete(image.id)}
        />

        <IconButton
          aria-label="Edit"
          icon={<EditIcon />}
          // onClick={() => onDelete(image.id)}
        />
      </Flex>
    </Flex>
  );
};
