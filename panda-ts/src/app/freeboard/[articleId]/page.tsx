import { Stack } from "@mui/material";
import { Typo } from "@/shared/Typo/Typo";
import { colorChips } from "@/shared/styles/colorChips";

export default function Page() {
  // const { data, isLoading } = useCompanyDetail();

  //   if (isLoading || !data) return <Features.CompanyDetailSkeleton />;

  // const { intro, about, interview, news, info, hotPlaces } = data;

  return (
    <Stack>
      <Typo
        content="게시글 상세페이지지"
        className="text20Bold"
        color={colorChips.gray800}
      />
    </Stack>
  );
}
