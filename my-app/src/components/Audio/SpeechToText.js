import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Dictaphone = ({ playRef, stopRef }) => {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    let intervalId = null;

    if (listening && transcript) {
      intervalId = setInterval(() => {
        console.log(transcript);
        resetTranscript();
      }, 300);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [listening, transcript]);

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  return (
    <Box sx={{ display: "none" }}>
      <button ref={playRef} onClick={startListening}>
        Start
      </button>
      <button ref={stopRef} onClick={stopListening}>
        Stop
      </button>
      <p>{transcript}</p>
    </Box>
  );
};

export default Dictaphone;
