import { Button, Typography } from "@mui/material";

interface IProps {
  text: string;
  index: number;
}
export default function KeywordButton({ text, index }: IProps) {
  return (
    <Button
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
      <Typography sx={{ fontSize: "17px" }}>{text}</Typography>
    </Button>
  );
}
