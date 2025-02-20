import { colorChips } from "@/shared/styles/colorChips";
import { Typo } from "@/shared/Typo/Typo";
import { Stack } from "@mui/material";

export const BestArticles = () => {
  return (
    <Stack>
      <Typo
        className="textXlBold"
        content="베스트 게시글"
        color={colorChips.gray900}
      />
    </Stack>
  );
};
