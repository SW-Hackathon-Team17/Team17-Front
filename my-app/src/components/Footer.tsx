import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", mx: "50px" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img src="/img/logov2.png" width={200} />
        <Typography variant="body2" sx={{ ml: 5 }}>
          <strong>ⓒ</strong> 2023 HackaThon Team 17
        </Typography>
      </Box>

      <div>
        <Typography variant="body2">All rights reserved</Typography>
      </div>
    </Box>
  );
}
