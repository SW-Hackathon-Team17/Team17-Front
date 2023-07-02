import { Button, Typography } from "@mui/material";
import { Badge } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
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
        backgroundColor: level === 1 ? "#F0C4AE" : "#E05D18",
        display: "flex",
        ":hover": {
          backgroundColor: level === 1 ? "#F0C4AE" : "#E05D18",
        },
        borderRadius: "20px",
        justifyContent: "center",
        alignItems: "center",
        px: "20px",

        color: "white",
        maxHeight: "40px",
      }}
      key={index}
    >
      <Typography sx={{ fontSize: "15px" }}>{text}</Typography>
    </Button>
  );
}
