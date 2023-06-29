import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Dictaphone = () => {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    let intervalId = null;

    if (listening && transcript) {
      intervalId = setInterval(() => {
        console.log(transcript);
        resetTranscript();
      }, 1000);
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
    <div>
      <button onClick={startListening}>Start</button>
      <button onClick={stopListening}>Stop</button>
      <p>{transcript}</p>
    </div>
  );
};

export default Dictaphone;
