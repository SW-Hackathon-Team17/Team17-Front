import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Textarea from "@mui/joy/Textarea";
import Typography from "@mui/joy/Typography";

export default function TextareaDecorators({ script, setScript }: any) {
  const addEmoji = (emoji: string) => () => setScript(`${script}${emoji}`);
  return (
    <Textarea
      color="neutral"
      placeholder="대본을 입력해주세요"
      value={script}
      onChange={(event) => setScript(event.target.value)}
      minRows={2}
      maxRows={4}
      style={{ width: "100%", height: "100%" }}
      startDecorator={
        <Box sx={{ display: "flex", gap: 0.5 }}>
          {["✅", "❗️", "❓", "✨", "🔥", "❤️", "😀", "🥲"].map(
            (emoji, index) => (
              <IconButton
                key={index}
                variant="outlined"
                color="neutral"
                onClick={addEmoji(`${emoji}`)}
              >
                {emoji}
              </IconButton>
            )
          )}
        </Box>
      }
      endDecorator={
        <Typography level="body3" sx={{ ml: "auto" }}>
          {script.length} character(s)
        </Typography>
      }
      sx={{ minWidth: 300 }}
    />
  );
}
