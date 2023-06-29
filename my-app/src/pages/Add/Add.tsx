import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import React, { useCallback, useRef, useState } from "react";
import CancelButton from "components/CancelButton";
import ScriptPage from "components/Add/ScriptPage";
import DeleteIcon from "@mui/icons-material/Delete";
import TextareaDecorators from "components/Detail/TextareaDecorators";
import KeywordButton from "components/KeywordButton";
export default function Add() {
  const [script, setScript] = useState<string>("");
  const [nowPage, setNowPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(1);

  const [keywords, setKeywords] = useState(["봉사", "발표 시작", "Vollon"]);

  const [leftVisible, setLeftVisible] = useState<boolean>(true);

  const inputRef = useRef(null);
  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }

    (inputRef.current as any).click();
  }, []);

  const onImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files;
    console.log(file);
    if (!file) return null;
    console.log("check", file);

    // const convertedFile = await Heic2Jpg(file[0]);

    // const lowCapacityFile = await compressedFile(convertedFile);

    // const storageRef = ref(storage, `files/${file[0].name}`);
    // const uploadTask = uploadBytesResumable(storageRef, lowCapacityFile);

    // uploadTask.on(
    //   "state_changed",
    //   (snapshot) => {
    //     const progress = Math.round(
    //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //     );
    //   },
    //   (error) => {
    //     switch (error.code) {
    //       case "storage/canceld":
    //         alert("Upload has been canceled");
    //         break;
    //     }
    //   },
    //   () => {
    //     getDownloadURL(storageRef).then((downloadURL) => {
    //       console.log("File available at", downloadURL);

    //       //   setImageURL(downloadURL);
    //       const prev = getValues("images");
    //       setValue("images", [...prev, downloadURL]);
    //     });
    //   }
    // );
  };

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
              <FileUploadIcon
                onClick={onUploadImageButtonClick}
                sx={{ fontSize: "35px" }}
              />
            </Paper>
            <input
              hidden
              type="file"
              // accept="image/*"
              accept=".jpg,.jpeg,.png,.gif,.bmp,.heic,.heif,.pptx"
              ref={inputRef}
              onChange={onImageChange}
            />
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
            width: "100%",
            height: "300px",
            mb: "30px",
            pt: "10px",
            px: "10px",
            pb: "90px",
            backgroundColor: "lightgray",
          }}
        >
          <ScriptPage
            nowPage={nowPage}
            maxPage={maxPage}
            setMaxPage={setMaxPage}
            setNowPage={setNowPage}
          />
          <TextareaDecorators script={script} setScript={setScript} />
          <Box
            sx={{
              height: "50px",

              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <IconButton>
              <DeleteIcon />
            </IconButton>
            <Box>
              <Button
                variant="contained"
                sx={{ mr: "10px", borderRadius: "25px" }}
              >
                대본 저장
              </Button>
              <Button variant="contained" sx={{ borderRadius: "25px" }}>
                키워드 추출
              </Button>
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
            <KeywordButton text={keyword} index={index} />
          ))}
          <Typography sx={{ position: "absolute", bottom: "20px" }}>
            키워드 클릭시 중요도 표시 가능합니다 :)
          </Typography>
        </Paper>
        <Button variant="contained" sx={{ mt: "20px" }}>
          키워드 저장
        </Button>
      </Paper>
    </Box>
  );
}
