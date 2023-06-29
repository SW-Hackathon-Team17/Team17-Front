import { Box, Button, IconButton } from "@mui/material";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import StopCircleIcon from "@mui/icons-material/StopCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
export default function Timer({ setPage }: any) {
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
      setIsPlaying("pause");
      clearInterval(interval.current);
      interval.current = null;
    }
  };

  const handlePlay = () => {
    if (!interval.current) {
      setIsPlaying("playing");
      interval.current = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    }
  };

  const [seconds, setSeconds] = useState(0);
  const [isPlaying, setIsPlaying] = useState<string>("reset");

  const handleReset = () => {
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
      <Button
        sx={{
          mr: 5,
          borderRadius: "50px",
          fontSize: "20px",
          px: "50px",
          py: "10px",
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
              backgroundColor: "red",
              width: "15px",
              height: "15px",
              borderRadius: "20px",
            }}
          />
        ) : isPlaying === "pause" ? (
          <Box
            sx={{
              mr: 2,
              backgroundColor: "red",
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
        <IconButton onClick={handlePlay}>
          <PlayCircleFilledWhiteIcon sx={{ fontSize: "80px" }} />
        </IconButton>
        <IconButton onClick={handleStop}>
          <PauseCircleIcon sx={{ fontSize: "80px" }} />
        </IconButton>
        <IconButton onClick={handleReset}>
          <StopCircleIcon sx={{ fontSize: "80px" }} />
        </IconButton>
      </Box>
    </Box>
  );
}
