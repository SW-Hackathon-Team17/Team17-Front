import {
  Badge,
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import React, { useCallback, useRef, useState } from "react";
import CancelButton from "components/CancelButton";
import ScriptPage from "components/Add/ScriptPage";
import DeleteIcon from "@mui/icons-material/Delete";
import TextareaDecorators from "components/Detail/TextareaDecorators";
import KeywordButton from "components/KeywordButton";

import Dictaphone from "components/Audio/B1Q3";
import ImageUpload from "components/Add/ImageUpload";
import SpeechToText from "components/Audio/SpeechToText";
import { postData, saveScript } from "apis/script";
import { getKeywordFromScript, saveKeywords } from "apis/keyword";
import zIndex from "@mui/material/styles/zIndex";
import axios from "axios";
import CancelIcon from "@mui/icons-material/Cancel";
import NewKeyword from "components/Add/NewKeyword";
import GetKeywordButton from "components/Add/GetKeywordButton";
import Subject from "components/Add/Subject";

export default function Add() {
  const [pptSlides, setPptSlides] = useState([]);

  const [script, setScript] = useState<string>("");
  const [nowPage, setNowPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(1);

  const [keywords, setKeywords] = useState([
    { keyword: "봉사", level: 1 },
    { keyword: "발표 시작", level: 2 },
    { keyword: "Vollon", level: 1 },
  ]);
  const [leftVisible, setLeftVisible] = useState<boolean>(true);

  const [formIdx, setFormIdx] = useState<number>(0);

  // const [isPpt , setIsPpt] = useState<boolean>(false);

  const handleSave = async () => {
    if (keywords.length !== 0 && script.length !== 0) {
      const newPost = [
        {
          script: script,
        },
        keywords,
      ];

      postData(formIdx, nowPage, newPost).then((res) => {
        if (res.data.formIdx) {
          setFormIdx(res.data.formIdx);
          console.log(newPost, res.data.formIdx);
          alert("저장되었습니다.");
        }
      });
    }
  };

  const handleClick = (index: number) => {
    setKeywords((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  };

  const handleLevelBalance = (index: any) => {
    if (keywords[index].level === 1) {
      setKeywords((prev) => [
        ...prev.slice(0, index),
        { keyword: prev[index].keyword, level: 2 },
        ...prev.slice(index + 1),
      ]);
    } else {
      setKeywords((prev) => [
        ...prev.slice(0, index),
        { keyword: prev[index].keyword, level: 1 },
        ...prev.slice(index + 1),
      ]);
    }
  };

  const [field, setField] = useState<string>("");

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
        sx={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          opacity: "0.7",
        }}
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
              backgroundColor: "rgba(255,255,255,0.7)",
            }}
          >
            {/* <Dictaphone /> */}

            <CancelButton setLeftVisible={setLeftVisible} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                border: 1,
                borderColor: "lightgray",

                borderRadius: "10px",
                width: "500px",
                height: "400px",
              }}
            >
              {pptSlides.length === 0 ? (
                <>
                  <ImageUpload
                    setPptSlides={setPptSlides}
                    setMaxPage={setMaxPage}
                  />
                  <Typography
                    variant="h5"
                    sx={{
                      position: "absolute",
                      top: 120,
                      color: "black",
                    }}
                  >
                    File Upload
                  </Typography>
                </>
              ) : (
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 30,
                  }}
                >
                  <Box
                    component={"img"}
                    src={pptSlides[nowPage - 1]}
                    sx={{ width: "100%" }}
                  />
                </Box>
              )}
            </Box>
          </Paper>

          <Box sx={{ mt: "20px", color: "white" }}>
            <Typography variant="h6">
              발표 자료 없이 이용 가능합니다 😀
            </Typography>
            <Typography variant="h6">
              발표 자료를 업로드하지 않으신다면 🚫 버튼을 눌러주세요
            </Typography>
          </Box>
        </Box>
      )}

      <Paper
        sx={{
          backgroundColor: "rgba(255,255,255,0.5)",
          width: "500px",
          height: "700px",
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
            backgroundColor: "rgba(255,255,255)",
            width: "100%",
            height: "300px",
            mb: "30px",
            pt: "10px",
            px: "10px",
            pb: "90px",
          }}
        >
          <ScriptPage
            nowPage={nowPage}
            maxPage={maxPage}
            setMaxPage={setMaxPage}
            setNowPage={setNowPage}
          />
          <Subject field={field} setField={setField} />
          <TextareaDecorators script={script} setScript={setScript} />
          <Box
            sx={{
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            {/* <IconButton>
              <DeleteIcon />
            </IconButton> */}
            <Box>
              <GetKeywordButton
                field={field}
                script={script}
                setKeywords={setKeywords}
              />
            </Box>
          </Box>
        </Paper>
        <Paper
          sx={{
            p: "10px",
            gap: "10px",
            width: "100%",
            height: "300px",
            display: "flex",
            flexWrap: "wrap",
            position: "relative",
          }}
        >
          {keywords.map((keyword, index) => (
            <Box sx={{ position: "relative" }}>
              <IconButton
                sx={{
                  width: "20px",
                  height: "20px",
                  position: "absolute",
                  right: "-10px",
                  top: "-10px",
                  zIndex: "10",
                }}
                onClick={() => handleClick(index)}
              >
                <CancelIcon />
              </IconButton>
              <KeywordButton
                key={index}
                text={keyword.keyword}
                level={keyword.level}
                index={index}
                onClick={handleLevelBalance}
              />
            </Box>
          ))}
          <NewKeyword setKeywords={setKeywords} />

          <Typography
            sx={{ position: "absolute", bottom: "5px", fontWeight: "400" }}
          >
            키워드 클릭시 중요도 표시 가능합니다 :)
          </Typography>
        </Paper>
        <Button
          variant="contained"
          onClick={handleSave}
          sx={{
            mt: "20px",
            backgroundColor: "#386E7E",
            width: "150px",
            ":hover": {
              backgroundColor: "#6C85BD", // Or whatever color you want
              // Override other styles on hover if needed
            },
          }}
        >
          저장 하기
        </Button>
      </Paper>
    </Box>
  );
}
