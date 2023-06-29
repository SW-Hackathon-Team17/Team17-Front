import { Box, Pagination, Paper, Typography } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { Location, useLocation } from "react-router-dom";
import { IPpt } from "apis/ppt";
import { useState } from "react";
import CancelButton from "components/CancelButton";

export default function Detail() {
  const { state } = useLocation();
  const stateTyped = state as IPpt;

  const [page, setPage] = useState(0);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  console.log(state);

  const [leftVisible, setLeftVisible] = useState<boolean>(true);

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
              width: "700px",
              height: "400px",
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
                top: "480px",
                mx: "auto",
              }}
              count={10}
              page={page}
              onChange={handleChange}
            />
          </Paper>
        </Box>
      )}

      <Paper
        sx={{
          width: "500px",
          height: "800px",
          ml: 5,
          p: "20px",
          position: "relative",
          zIndex: 10,
        }}
      >
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
        ></Paper>
      </Paper>
    </Box>
  );
}
