import { Button } from "@mui/material";
import { getKeywordFromScript } from "apis/keyword";

interface keyword {
  keyword: string;
  level: number;
}

interface IProps {
  field: string;
  script: string;
  setKeywords: any;
}

export default function GetKeywordButton({
  field,
  script,
  setKeywords,
}: IProps) {
  const handleGetKeyword = () => {
    getKeywordFromScript(field, script).then((res: any) => {
      for (let i = 0; i < res.data.length; i++) {
        setKeywords((prev: keyword[]) => [
          ...prev,
          { keyword: res.data[i], level: 1 },
        ]);
      }
    });
  };
  return (
    <Button
      onClick={handleGetKeyword}
      variant="contained"
      sx={{
        backgroundColor: "#386E7E",

        ":hover": {
          backgroundColor: "#6C85BD", // Or whatever color you want
          // Override other styles on hover if needed
        },
      }}
    >
      키워드 추출
    </Button>
  );
}
