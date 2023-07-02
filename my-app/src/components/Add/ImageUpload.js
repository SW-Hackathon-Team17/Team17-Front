import { useCallback, useRef } from "react";

import FileUploadIcon from "@mui/icons-material/FileUpload";
import { postPpt } from "apis/ppt";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
export default function ImageUpload({ setPptSlides, setMaxPage }) {
  const inputRef = useRef(null);
  const onUploadImageButtonClick = useCallback(() => {
    if (!inputRef.current) {
      return;
    }

    inputRef.current.click();
  }, []);

  const onImageChange = async (e) => {
    e.preventDefault();

    const file = e.target.files;

    if (!file) return null;

    const formData = new FormData();
    formData.append("file", file[0]);

    const urls = await postPpt(formData);

    setPptSlides(urls);
    setMaxPage(urls.length);
    console.log(urls);
  };

  return (
    <Box
      sx={{
        border: 1,
        borderStyle: "dotted",
        px: "130px",
        py: "30px",
      }}
    >
      {/* <FileUploadIcon
        
        sx={{ fontSize: "50px" }}
      /> */}
      <Box
        component={motion.div}
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0, 0, 0 - 5, 0] }}
        transition={{
          repeat: Infinity,
          repeatDelay: 2,
        }}
      >
        <img
          onClick={onUploadImageButtonClick}
          src={"./img/icon001.png"}
          width={100}
        />
      </Box>
      <input
        hidden
        type="file"
        // accept="image/*"
        accept=".jpg,.jpeg,.png,.gif,.bmp,.heic,.heif,.pptx"
        ref={inputRef}
        onChange={onImageChange}
      />
    </Box>
  );
}
