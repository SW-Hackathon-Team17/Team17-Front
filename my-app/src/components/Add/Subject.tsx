import { TextField } from "@mui/material";

export default function Subject({ field, setField }: any) {
  return (
    <TextField
      sx={{ width: "100%", mb: "10px" }}
      variant="outlined"
      color="warning"
      value={field}
      onChange={(e) => setField(e.currentTarget.value)}
      placeholder="주제를 입력해주세요"
    />
  );
}
