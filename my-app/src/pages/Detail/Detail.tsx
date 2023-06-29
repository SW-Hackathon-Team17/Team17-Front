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
import { useState } from "react";
import CancelButton from "components/CancelButton";
import Timer from "components/Detail/Timer";
import ScriptPage from "components/Add/ScriptPage";
import KeywordButton from "components/KeywordButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ProgressBar from "components/Detail/ProgressBar";
export default function Detail() {
  const [keywords, setKeywords] = useState(["봉사", "발표 시작", "Vollon"]);
  const { state } = useLocation();

  const [script, setScript] = useState<string>("대본 예시~~~~~");
  const [isScriptVisible, setIsScriptVisible] = useState<boolean>(false);

  const stateTyped = state as IPpt;

  const [nowPage, setNowPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setNowPage(value);
  };
  console.log(state);

  const [leftVisible, setLeftVisible] = useState<boolean>(true);

  const [progress, setProgress] = useState<number>(30);

  return (
    <Box sx={{ p: "100px", display: "flex", justifyContent: "center" }}>
      <Box
        sx={{ position: "fixed", left: 0, top: 0, width: "100%" }}
        component="img"
        src="./img/background.png"
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
          <Timer setNowPage={setNowPage} />
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
              width: "100%",
              height: "500px",
              mb: "30px",
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
              }}
            >
              {keywords.map((keyword, index) => (
                <KeywordButton text={keyword} index={index} />
              ))}
            </Box>
            <Button
              color="success"
              sx={{ height: "30px", mb: "10px" }}
              onClick={() => setIsScriptVisible((prev) => !prev)}
            >
              {isScriptVisible ? (
                <KeyboardArrowUpIcon />
              ) : (
                <KeyboardArrowDownIcon />
              )}{" "}
              발표 보기
            </Button>

            {isScriptVisible && <p>script</p>}
          </Paper>
        </Box>
        <Typography variant="body1" sx={{ mb: "10px" }}>
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
