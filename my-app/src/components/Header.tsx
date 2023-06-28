import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Box
      sx={{
        px: "50px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link to="/">
        <img src="./img/logo.png" width={50} />
      </Link>
      <Box>
        <Link to="/add">
          <Button>대본 입력</Button>
        </Link>
        <Link to="/detail">
          <Button sx={{ mx: 3 }}>발표 연습</Button>
        </Link>
        <Link to="/list">
          <Button>대본 리스트</Button>
        </Link>
      </Box>
      <Box />
    </Box>
  );
}
