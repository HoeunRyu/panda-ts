import Link from "next/link";
import { Typo } from "@/shared/Typo/Typo";
import { colorChips } from "@/shared/styles/colorChips";

export function PostItems() {
  return (
    <Link
      id="post-item-btn"
      href="/registration"
      onClick={(): void => {
        console.log("click"); //FIXME: 이거 뭐지.... 나 이런거 쓴 기억이 없는데,,
      }}
    >
      <Typo
        className={"textLgSemibold"}
        color={colorChips.gray100}
        content="상품 등록하기"
      />
    </Link>
  );
}
