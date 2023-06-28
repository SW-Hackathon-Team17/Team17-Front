import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box
        component="img"
        src="./img/main.png"
        sx={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
        }}
      />
      <Box
        sx={{ position: "absolute", left: "20px", top: "30%", color: "white" }}
      >
        <Typography variant="h1">Don't be Afraid</Typography>
        <Typography variant="h1" sx={{ fontWeight: "500" }}>
          LogoLogo
        </Typography>
        <Typography variant="h1">Next to you</Typography>
      </Box>
    </Box>
  );
}
