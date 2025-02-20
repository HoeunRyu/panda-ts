import { colorChips } from "@/shared/styles/colorChips";
import { Typo } from "@/shared/Typo/Typo";
import { Stack } from "@mui/material";

export const AtricleList = () => {
  return (
    <Stack>
      <Typo
        className="textXlBold"
        content="게시글 목록"
        color={colorChips.gray900}
      />
    </Stack>
  );
};
