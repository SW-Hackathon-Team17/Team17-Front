import {
  Box,
  Button,
  IconButton,
  Pagination,
  Paper,
  Typography,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { IPpt } from "apis/ppt";
import { useEffect, useRef, useState } from "react";
import CancelButton from "components/CancelButton";
import Timer from "components/Detail/Timer";
import ScriptPage from "components/Add/ScriptPage";
import KeywordButton from "components/KeywordButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ProgressBar from "components/Detail/ProgressBar";
import { useQueries } from "@tanstack/react-query";
import { getData, getScript } from "apis/script";
import { m } from "framer-motion";
import { getKeywords } from "apis/keyword";
import SpeechToText from "components/Audio/SpeechToText";

import image from "./img/background.png";
export default function Detail() {
  const [nowPage, setNowPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  useEffect(() => {
    getData(stateTyped.formIdx, nowPage).then((res) => {
      setScript(res[0].script);
      setKeywords(res[1]);
    });
  }, [nowPage]);

  const [keywords, setKeywords] = useState([
    { keyword: "봉사", level: 1 },
    { keyword: "발표 시작", level: 2 },
    { keyword: "Vollon", level: 1 },
  ]);
  const { state } = useLocation();
  const stateTyped = state as IPpt;
  const [script, setScript] = useState<string>("대본 예시~~~~~");
  const [isScriptVisible, setIsScriptVisible] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setNowPage(value);
  };
  console.log(state);

  const [leftVisible, setLeftVisible] = useState<boolean>(true);

  const [progress, setProgress] = useState<number>(30);

  return (
    <Box sx={{ p: "100px", display: "flex", justifyContent: "center" }}>
      <Box
        component={"img"}
        sx={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
        }}
        src={"https://team17-buckets.s3.ap-northeast-2.amazonaws.com/002.png"}
      />
      {leftVisible && (
        <Box sx={{ position: "relative", zIndex: 10 }}>
          <CancelButton setLeftVisible={setLeftVisible} />

          <Paper
            sx={{
              width: "650px",
              height: "380px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              px: "30px",
              pt: "50px",
              pb: "70px",
              backgroundColor: "lightgray",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundColor: "white",
              }}
            ></Box>
            <Pagination
              sx={{
                position: "absolute",
                backgroundColor: "white",
                top: "450px",
                mx: "auto",
              }}
              count={10}
              page={nowPage}
              onChange={handleChange}
            />
          </Paper>
          <Timer setPage={setNowPage} />
        </Box>
      )}

      <Paper
        sx={{
          width: "500px",
          height: "700px",
          ml: 5,
          p: "20px",
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "space-between",

          backgroundColor: "lightgray",
        }}
      >
        <ScriptPage
          nowPage={nowPage}
          maxPage={maxPage}
          setMaxPage={setMaxPage}
          setNowPage={setNowPage}
        />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Paper
            sx={{
              position: "relative",
              width: "100%",
              height: "500px",
              mb: "15px",
              pt: "10px",
              px: "10px",
              pb: "50px",
              backgroundColor: "white",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                mb: "30px",
                minHeight: "300px",
              }}
            >
              {keywords.map((keyword, index) => (
                <KeywordButton
                  key={index}
                  text={keyword.keyword}
                  index={index}
                  level={keyword.level}
                />
              ))}
            </Box>
            <Button
              color="primary"
              sx={{
                height: "30px",
                mb: "10px",
              }}
              onClick={() => setIsScriptVisible((prev) => !prev)}
            >
              {isScriptVisible ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}{" "}
              발표 보기
            </Button>

            {isScriptVisible && <p>{script}</p>}
          </Paper>
        </Box>
        <Typography variant="body1" sx={{ mb: "0px" }}>
          키워드 성공률
        </Typography>
        <ProgressBar progress={progress} />

        {nowPage === maxPage && (
          <Button variant="contained" sx={{ mt: 2 }}>
            발표 연습완료
          </Button>
        )}
      </Paper>
    </Box>
  );
}
