import { ChatTeardropDots } from "phosphor-react-native";
import React, { useRef, useState } from "react";
import { TouchableOpacity } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { theme } from "../../theme";
import { styles } from "./styles";
import { Options } from "../Options";
import { Form } from "../Form";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { Success } from "../Success";

export type FeedbackType = keyof typeof feedbackTypes;
function Widget() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  function handleOpen() {
    bottomSheetRef.current?.expand();
  }

  function handleRestartFeedback() {
    setFeedbackType(null);
    setFeedbackSent(false);
  }

  function handleFeedbackSent() {
    setFeedbackSent(true);
  }

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleOpen}>
        <ChatTeardropDots
          size={24}
          color={theme.colors.text_on_brand_color}
          weight="bold"
        />
      </TouchableOpacity>
      <BottomSheet
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
      >
        {feedbackSent ? (
          <Success onSendAnotherFeedback={handleRestartFeedback} />
        ) : (
          <>
            {feedbackType ? (
              <Form
                feedbackType={feedbackType}
                onFeedbackCanceled={handleRestartFeedback}
                onFeedbackSent={handleFeedbackSent}
              />
            ) : (
              <Options onFeedbackTypeChange={setFeedbackType} />
            )}
          </>
        )}
      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget);
