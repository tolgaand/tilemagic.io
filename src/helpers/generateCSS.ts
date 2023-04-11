import { JSONData } from "../types/JSONData";
import { ROOT_CLASS_NAME } from "./variables";

export const generateCSS = (
  jsonData: JSONData[],
  spriteImageUrl: string,
  spriteWidth: number,
  spriteHeight: number
): string => {
  let code = "";

  code += `.${ROOT_CLASS_NAME} {\n`;
  code += `  background: url(${spriteImageUrl}) no-repeat;\n`;
  code += `  background-size: ${spriteWidth}px ${spriteHeight}px;\n`;
  code += `}\n\n`;

  jsonData.forEach((item) => {
    code += `.${item.className} {\n`;
    code += `  width: ${item.width}px;\n`;
    code += `  height: ${item.height}px;\n`;
    code += `  background-position: 0 -${item.offsetY}px;\n`;
    code += `}\n\n`;
  });

  return code;
};
