import { ImageData } from "types/ImageData";

export function createSpriteImage(
  images: ImageData[],
  spacing: number
): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("Failed to get canvas context");
  }

  // Find the maximum image width
  const maxWidth = Math.max(
    ...images.map((imageData) => imageData.image.naturalWidth)
  );

  // Calculate the canvas width and height
  const totalHeight = images.reduce(
    (height, imageData) => height + imageData.image.naturalHeight,
    0
  );
  const height = totalHeight + (images.length - 1) * spacing;
  const width = maxWidth;

  canvas.width = width;
  canvas.height = height;

  let offsetY = 0;

  images.forEach((imageData) => {
    const x = 0;
    const y = offsetY;
    ctx.drawImage(
      imageData.image,
      x,
      y,
      imageData.image.naturalWidth,
      imageData.image.naturalHeight
    );
    offsetY += imageData.image.naturalHeight + spacing;
  });

  return canvas;
}
