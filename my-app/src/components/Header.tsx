import { Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useMatch } from "react-router-dom";

export default function Header() {
  const homeMatch = useMatch("/");
  const addMatch = useMatch("/add");
  const listMatch = useMatch("/list");

  const [scroll, setScroll] = useState<boolean>(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScroll(false);
    } else setScroll(true);
  };

  return (
    <Box
      component={motion.div}
      animate={{ opacity: scroll ? 1 : 0 }}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 10,
        backgroundColor: scroll ? "rgba(255,255,255,0.2)" : "none",
        width: "100%",
        height: "80px",
        px: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link to="/" style={{ zIndex: 20 }}>
        <img
          src="https://team17-buckets.s3.ap-northeast-2.amazonaws.com/logo-v2(opacity100).png"
          width={230}
        />
      </Link>
      <Box sx={{ zIndex: 20 }}>
        <Link to="/add">
          <Button
            sx={{
              position: "relative",
              color: addMatch ? "#FFFACD" : "white",
              opacity: 1,
              zIndex: 20,
            }}
          >
            대본 입력
          </Button>
        </Link>
        <Link to="/list">
          <Button
            sx={{
              color: listMatch ? "#FFFACD" : "white",
              opacity: 1,
              zIndex: 20,
              ml: 10,
            }}
          >
            대본 리스트
          </Button>
        </Link>
      </Box>
      <Box />
    </Box>
  );
}
