import { Image } from "@mui/icons-material";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { IPpt, IPptList, getPptList } from "apis/ppt";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
export default function List() {
  const data = [
    {
      formIdx: 1,
      imgUrl:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    },
    {
      formIdx: 2,
      imgUrl:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    },
  ];

  //   const { data, isLoading } = useQuery<IPptList>(["ppts", "list"], () =>
  //     getPptList()
  //     ,{
  //         onSuccess: (list) => {
  //             console.log(list);
  //         }
  //     }
  //   );

  return (
    <Box sx={{ px: "100px", py: "70px" }}>
      <Box
        sx={{ position: "fixed", left: 0, top: 0, width: "100%" }}
        component="img"
        src="./img/background.png"
      />
      <Typography
        sx={{ mb: "70px", position: "relative", zIndex: 10 }}
        variant="h6"
      >
        이전 발표 기록
      </Typography>
      <Grid
        container
        gap={5}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
          zIndex: 10,
        }}
      >
        {data?.map((ppt: IPpt) => (
          <Link to={`/list/${ppt.formIdx}`} state={ppt}>
            <Grid key={ppt.formIdx}>
              {" "}
              <Paper sx={{ p: 5, width: "500px" }}>
                <img src={ppt.imgUrl} style={{ width: "100%" }} />
              </Paper>
            </Grid>
          </Link>
        ))}
        <Paper
          sx={{
            backgroundColor: "lightgray",
            p: 5,
            width: "500px",
            height: "300px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "60px",
              height: "60px",
              borderRadius: "35px",
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AddIcon sx={{ fontSize: "35px" }} />
          </Box>
          <Typography sx={{ mt: 2 }}>페이지 추가하기</Typography>
        </Paper>
      </Grid>
    </Box>
  );
}
