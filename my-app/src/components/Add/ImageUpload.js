import { useCallback, useRef } from "react";

import FileUploadIcon from "@mui/icons-material/FileUpload";
import { postPpt } from "apis/ppt";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
export default function ImageUpload({ setPptSlides }) {
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
    console.log(file);
    const urls = await postPpt(file[0]);
    setPptSlides(urls);
  };

  return (
    <Box
      component={motion.div}
      initial={{ y: 0 }}
      animate={{ y: [0, -10, 0, 0, 0 - 5, 0] }}
      transition={{
        repeat: Infinity,
        repeatDelay: 2,
      }}
    >
      <FileUploadIcon
        onClick={onUploadImageButtonClick}
        sx={{ fontSize: "50px" }}
      />
      <img src={"./img/icon001.png"} width={100} />
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
