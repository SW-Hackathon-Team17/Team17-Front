import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useState } from "react";
import CancelButton from "components/CancelButton";
export default function Add() {
  const [keywords, setKeywords] = useState(["봉사", "발표 시작", "Vollon"]);

  const [leftVisible, setLeftVisible] = useState<boolean>(true);

  return (
    <Box
      sx={{
        p: "100px",
        mt: "70px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{ position: "fixed", left: 0, top: 0, width: "100%" }}
        component="img"
        src="./img/background.png"
      />
      {leftVisible && (
        <Box sx={{ position: "relative", zIndex: 10, mr: 10 }}>
          <Paper
            sx={{
              width: "650px",
              height: "500px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CancelButton setLeftVisible={setLeftVisible} />
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
      )}

      <Paper
        sx={{
          width: "500px",
          height: "800px",
          py: "30px",
          px: "40px",
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Paper
          sx={{
            width: "100%",
            height: "300px",
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
          <Box
            sx={{
              height: "50px",

              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <Button
              variant="contained"
              sx={{ mr: "10px", borderRadius: "25px" }}
            >
              대본 수정
            </Button>
            <Button variant="contained" sx={{ borderRadius: "25px" }}>
              키워드 추출
            </Button>
          </Box>
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
