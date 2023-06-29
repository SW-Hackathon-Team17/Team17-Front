import { Box, Button, IconButton } from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import SpeechToText from "components/Audio/SpeechToText";
export default function Timer({ setPage }: any) {
  const playRef = useRef();
  const stopRef = useRef();

  const converter = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return formattedMinutes + ":" + formattedSeconds;
  };
  const interval = useRef<any>(null);

  const handleStop = () => {
    if (interval.current) {
      (stopRef.current as any).click();
      setIsPlaying("pause");
      clearInterval(interval.current);
      interval.current = null;
    }
  };

  const handlePlay = () => {
    if (!interval.current) {
      (playRef.current as any).click();
      setIsPlaying("playing");
      interval.current = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    }
  };

  const [seconds, setSeconds] = useState(0);
  const [isPlaying, setIsPlaying] = useState<string>("reset");

  const handleReset = () => {
    (stopRef.current as any).click();
    setSeconds(0);
    setIsPlaying("reset");
    setPage(0);
    if (interval.current) {
      clearInterval(interval.current);
      interval.current = null;
    }
  };
  return (
    <Box
      sx={{
        height: "100px",
        width: "100%",

        mt: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SpeechToText playRef={playRef} stopRef={stopRef} />
      <Button
        sx={{
          mr: 5,
          border: 0,
          backgroundColor: "white",
          borderRadius: "50px",
          fontSize: "20px",
          px: "50px",
          py: "13px",
          ":hover": {
            backgroundColor: "gray",
          },
        }}
        color="inherit"
        variant="outlined"
      >
        {isPlaying === "playing" ? (
          <Box
            component={motion.div}
            initial={{ opacity: 0.1 }}
            animate={{ opacity: [0.1, 1, 1, 0.1] }}
            transition={{
              repeat: Infinity,
            }}
            sx={{
              mr: 2,
              backgroundColor: "white",
              width: "15px",
              height: "15px",
              borderRadius: "20px",
            }}
          />
        ) : isPlaying === "pause" ? (
          <Box
            sx={{
              mr: 2,
              backgroundColor: "white",
              width: "15px",
              height: "15px",
              borderRadius: "20px",
            }}
          />
        ) : (
          <AccessAlarmIcon sx={{ mr: 2 }} />
        )}
        {converter(seconds)}
      </Button>
      <Box sx={{ fontSize: "80px" }}>
        <IconButton
          sx={{
            color: "rgba(121, 93, 82, 1)",
            backgroundColor: "white",
            width: "60px",
            height: " 60px",
          }}
          onClick={handlePlay}
        >
          <PlayCircleFilledWhiteIcon sx={{ fontSize: "80px" }} />
        </IconButton>
        <IconButton
          sx={{
            color: "rgba(121, 93, 82, 1)",
            backgroundColor: "white",
            width: "60px",
            mx: 4,
            height: " 60px",
          }}
          onClick={handleStop}
        >
          <PauseCircleIcon sx={{ fontSize: "80px" }} />
        </IconButton>
        <IconButton
          sx={{
            color: "rgba(121, 93, 82, 1)",
            backgroundColor: "white",

            width: "60px",
            height: " 60px",
          }}
          onClick={handleReset}
        >
          <StopCircleIcon sx={{ fontSize: "80px" }} />
        </IconButton>
      </Box>
    </Box>
  );
}
