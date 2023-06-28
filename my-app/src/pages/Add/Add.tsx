import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useState } from "react";
export default function Add() {
  const [keywords, setKeywords] = useState(["봉사", "발표 시작", "Vollon"]);

  return (
    <Box sx={{ p: "50px", display: "flex", justifyContent: "center" }}>
      <Box>
        <Paper
          sx={{
            width: "500px",
            height: "500px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper
            sx={{
              border: 1,
              borderColor: "lightgray",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "100%",
              width: "70px",
              height: "70px",
            }}
          >
            <FileUploadIcon sx={{ fontSize: "35px" }} />
          </Paper>
        </Paper>

        <Typography>발표 자료 없이 이용 가능합니다 ☺️</Typography>
        <Typography>
          발표 자료를 업로드하지 않으신다면 버튼을 눌러주세요
        </Typography>
      </Box>

      <Paper sx={{ width: "500px", height: "800px", ml: 5, p: "20px" }}>
        <Paper
          sx={{
            width: "100%",
            height: "350px",
            mb: "30px",
            pt: "10px",
            px: "10px",
            pb: "50px",
            backgroundColor: "lightgray",
          }}
        >
          <Paper
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "white",
            }}
          ></Paper>
        </Paper>
        <Paper
          sx={{
            p: "10px",
            gap: "10px",
            width: "100%",
            height: "350px",

            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {keywords.map((keyword, index) => (
            <Box
              sx={{
                display: "flex",
                borderRadius: "20px",
                justifyContent: "center",
                alignItems: "center",
                px: "30px",
                height: "40px",
                backgroundColor: "green",

                color: "white",
              }}
              key={index}
            >
              <Typography sx={{ fontSize: "17px" }}>{keyword}</Typography>
            </Box>
          ))}
        </Paper>
      </Paper>
    </Box>
  );
}
