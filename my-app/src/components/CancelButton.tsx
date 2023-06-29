import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import CancelIcon from "@mui/icons-material/Cancel";

export default function CancelButton({ onClick }: any) {
  return (
    <IconButton
      onClick={onClick}
      sx={{ position: "absolute", right: "-25px", top: "-25px" }}
      aria-label="cancel"
    >
      <Badge color="error">
        <CancelIcon sx={{ fontSize: "40px" }} />
      </Badge>
    </IconButton>
  );
}
