import { ArrowLeft, Camera } from "phosphor-react";
import React, { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { api } from "../../../lib/api";
import CloseButton from "../../CloseButton";
import Loading from "../../loading";
import ScreenshotButton from "../screenshotButton";

interface Props {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

const FeedbackContentStep: React.FC<Props> = ({
  onFeedbackSent,
  feedbackType,
  onFeedbackRestartRequested,
}) => {
  const feedbackTypeInfo = feedbackTypes[feedbackType];
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState("");
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  async function handleSubmitFeedback(e: FormEvent) {
    e.preventDefault();
    setIsSendingFeedback(true);
    await api.post("/feedbacks", {
      type: feedbackType,
      comment,
      screenshot,
    });
    setIsSendingFeedback(false);
    onFeedbackSent();
  }
  return (
    <>
      <header>
        <button
          className="top-5 left-5 absolute text-tx-800 hover:text-tx-900"
          type="button"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" className="h-4 w-4" />
        </button>
        <span className="text-xl leading-6 text-tx-800 flex items-center gap-2">
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          />
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <form onSubmit={handleSubmitFeedback} className="my-4 w-full ">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-tx-800 text-tx-900 border-tx-800 border outline-none bg-transparent px-4 py-2 rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none scrollbar-thumb-tx-800 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />
          <button
            disabled={comment.length == 0 || isSendingFeedback}
            type="submit"
            className=" disabled:opacity-50 disabled:hover:bg-brand-500 p-2 bg-brand-500 rounded-md border border-transparent outline-none flex-1 flex justify-center items-center text-sm hover:bg-brand-300 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-offset-surface-300 focus:ring-brand-500"
          >
            {isSendingFeedback ? <Loading /> : "Enviar feedback"}
          </button>
        </footer>
      </form>
    </>
  );
};

export default FeedbackContentStep;
