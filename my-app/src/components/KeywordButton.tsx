import { Button, Typography } from "@mui/material";
import { Badge } from "@mui/material";
import { useMatch } from "react-router-dom";
interface IProps {
  text: string;
  index: number;
  level: number;
  onClick?: any;
}

export default function KeywordButton({ text, index, level, onClick }: IProps) {
  const addMatch = useMatch("/add");

  return (
    <Button
      onClick={() => addMatch && onClick(index)}
      sx={{
        backgroundColor: level === 1 ? "#F0C4AE" : "#E79B75",
        display: "flex",
        ":hover": {
          backgroundColor: level === 1 ? "#F0C4AE" : "#E79B75",
        },
        borderRadius: "20px",
        justifyContent: "center",
        alignItems: "center",
        px: "20px",
        height: "35px",
        color: "white",
      }}
      key={index}
    >
      <Typography sx={{ fontSize: "15px" }}>{text}</Typography>
    </Button>
  );
}
