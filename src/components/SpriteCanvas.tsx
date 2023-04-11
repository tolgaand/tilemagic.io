import React, { useRef, useEffect } from "react";
import { ImageData } from "../types/ImageData";

interface SpriteCanvasProps {
  spriteImageUrl: string;
}

export const SpriteCanvas: React.FC<SpriteCanvasProps> = ({
  spriteImageUrl,
}) => {
  // const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // const drawSelectedImage = () => {
  //   if (!canvasRef.current || !selectedImage) return;

  //   const ctx = canvasRef.current.getContext("2d");
  //   if (!ctx) return;

  //   const img = new Image();
  //   img.src = selectedImage.image.src;
  //   img.onload = () => {
  //     ctx.clearRect(0, 0, 600, 600);
  //     ctx.strokeRect(0, 0, 600, 600);
  //     ctx.drawImage(
  //       img,
  //       0,
  //       0,
  //       selectedImage.image.width,
  //       selectedImage.image.height
  //     );
  //   };
  // };

  // useEffect(() => {
  //   drawSelectedImage();
  // }, [selectedImage]);

  return (
    <img src={spriteImageUrl} />
    // <canvas
    //   ref={canvasRef}
    //   width="600"
    //   height="600"
    //   style={{
    //     border: "1px solid black",
    //     cursor: "grab",
    //     touchAction: "none",
    //   }}
    //   onWheel={(e) => {
    //     if (!canvasRef.current) return;
    //     const ctx = canvasRef.current.getContext("2d");
    //     if (!ctx) return;

    //     ctx.clearRect(0, 0, 600, 600);
    //     ctx.strokeRect(0, 0, 600, 600);

    //     if (selectedImage) {
    //       const img = new Image();
    //       img.src = selectedImage.image.src;
    //       img.onload = () => {
    //         ctx.drawImage(
    //           img,
    //           0,
    //           0,
    //           selectedImage.image.width,
    //           selectedImage.image.height
    //         );
    //       };
    //     }
    //   }}
    // />
  );
};
