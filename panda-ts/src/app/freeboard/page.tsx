import { CommonLayout } from "@/shared/layout/CommonLayout";
import { Features } from "./features";

export default function Page() {
  return (
    <CommonLayout>
      <Features.BestArticles />
      <Features.AtricleList />
    </CommonLayout>
  );
}
