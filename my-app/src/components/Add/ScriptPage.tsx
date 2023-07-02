import { Box, IconButton, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useMatch } from "react-router-dom";
import { useState } from "react";

interface IProps {
  nowPage: Number;
  maxPage: Number;
  setMaxPage: any;
  setNowPage: any;
  isPresentation?: boolean;
}

export default function ScriptPage({
  nowPage,
  maxPage,
  setMaxPage,
  setNowPage,

  isPresentation,
}: IProps) {
  const addMatch = useMatch("/add");

  const handlePage = (e: any) => {
    const id = e.currentTarget.id;
    if (id === "right") {
      if (nowPage === maxPage) {
        if (!addMatch) return;
        setMaxPage((prev: number) => prev + 1);
      }
      setNowPage((prev: number) => prev + 1);
    } else if (id === "left") {
      if (nowPage === 1) {
        return;
      } else setNowPage((prev: number) => prev - 1);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography variant="body1" sx={{ mb: 1 }}>
        {nowPage + " / " + maxPage}
      </Typography>
      {maxPage !== 1 && (
        <Box>
          <IconButton id="left" onClick={handlePage}>
            <KeyboardArrowLeftIcon sx={{ mr: 2 }} />
          </IconButton>
          <IconButton id="right" onClick={handlePage}>
            <KeyboardArrowRightIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );
}
