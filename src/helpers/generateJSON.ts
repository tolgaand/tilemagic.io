import { ImageData } from "../types/ImageData";
import { JSONData } from "../types/JSONData";

const removeExtension = (fileName: string): string => {
  const index = fileName.lastIndexOf(".");
  return changeSpacesToDashes(fileName.substring(0, index));
};

const changeSpacesToDashes = (str: string): string => {
  return str.replace(/\.| /g, "-");
};

export const generateJSON = (
  images: ImageData[],
  spacing: number = 0
): JSONData[] => {
  let offsetY = 0;

  return images.map((item) => {
    const obj = {
      className: removeExtension(item.file.name),
      width: item.image.width,
      height: item.image.height,
      offsetY,
    };

    offsetY += item.image.height + spacing;

    return obj;
  });
};
