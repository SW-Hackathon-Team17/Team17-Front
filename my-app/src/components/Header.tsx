import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 10,
        backgroundColor: "rgba(255,255,255,0.2)",

        width: "100%",
        height: "80px",
        px: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link to="/" style={{ zIndex: 20 }}>
        <img src="./img/logo.png" width={50} />
      </Link>
      <Box sx={{ zIndex: 20 }}>
        <Link to="/add">
          <Button
            sx={{
              position: "relative",
              color: "white",
              opacity: 1,
              zIndex: 20,
            }}
          >
            대본 입력
          </Button>
        </Link>
        <Link to="/detail">
          <Button sx={{ color: "white" }}>발표 연습</Button>
        </Link>
        <Link to="/list">
          <Button sx={{ color: "white", opacity: 1, zIndex: 20 }}>
            대본 리스트
          </Button>
        </Link>
      </Box>
      <Box />
    </Box>
  );
}
