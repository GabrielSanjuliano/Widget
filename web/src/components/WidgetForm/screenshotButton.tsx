import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import React, { useState } from "react";
import Loading from "../loading";

interface Props {
  onScreenshotTook: (screenshot: string | null) => void;
  screenshot: string | null;
}

const ScreenshotButton: React.FC<Props> = ({
  onScreenshotTook,
  screenshot,
}) => {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);
    const canvas = await html2canvas(document.querySelector("html")!);
    const base64image = canvas.toDataURL("image/png");
    onScreenshotTook(base64image);
    setIsTakingScreenshot(false);
  }

  if (screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-tx-800 hover:text-tx-900 transition-colors"
        onClick={() => onScreenshotTook(null)}
        style={{ backgroundImage: `url(${screenshot})` }}
      >
        <Trash />
      </button>
    );
  } else {
    return (
      <button
        type="button"
        onClick={handleTakeScreenshot}
        className="p-2 bg-tx-800 rounded-md border-transparent outline-none hover:bg-surface-400 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-offset-surface-300 focus:ring-brand-500"
      >
        {isTakingScreenshot ? (
          <Loading />
        ) : (
          <Camera className="w-6 h-6 text-zinc-100" />
        )}
      </button>
    );
  }
};

export default ScreenshotButton;
