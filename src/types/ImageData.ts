import { nanoid } from "nanoid";

// src/types/ImageData.ts
export class ImageData {
  id: string = nanoid();
  file: File;
  image: HTMLImageElement = new Image();
  offsetY: number = 0;

  constructor(file: File) {
    this.file = file;
  }

  async loadImage(): Promise<void> {
    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    await new Promise((resolve, reject) => {
      reader.onload = (e) => {
        if (e.target) {
          this.image.src = e.target.result as string;
          resolve(true);
        } else {
          reject(new Error("Failed to load image"));
        }
      };
    });
  }
}
