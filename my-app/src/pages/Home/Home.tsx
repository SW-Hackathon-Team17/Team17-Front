import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box
        component="img"
        src="https://team17-buckets.s3.ap-northeast-2.amazonaws.com/001.png"
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          zIndex: 0,
          width: "100%",
        }}
      />
      <Box
        sx={{ position: "absolute", left: "20px", top: "30%", color: "white" }}
      >
        <Typography
          component={motion.p}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          variant="h1"
        >
          Don't be Afraid
        </Typography>
        <Typography
          component={motion.p}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          variant="h1"
          sx={{ fontWeight: "500" }}
          style={{ color: "#FFFACD", fontWeight: "700", fontStyle: "italic" }}
        >
          Mic-Test,
        </Typography>
        <Typography
          component={motion.p}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          variant="h1"
        >
          Next to you
        </Typography>
      </Box>
    </Box>
  );
}
