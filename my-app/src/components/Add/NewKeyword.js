import { TextField } from "@mui/material";
import { useState } from "react";

export default function NewKeyword({ setKeywords }) {
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setKeywords((prev) => [...prev, { keyword: input, level: 1 }]);
      setInput("");
    }
  };

  return (
    <TextField
      label="추가 키워드 생성"
      variant="standard"
      color="warning"
      focused
      value={input}
      onChange={handleInputChange}
      onKeyDown={handleKeyDown}
    />
  );
}
