import Link from "next/link";
import { Typo, typoStyles } from "@/shared/Typo/Typo";

export function PostItems() {
  return (
    <Link
      id="post-item-btn"
      href="/registration"
      onClick={() => {
        console.log("click");
      }}
    >
      <Typo className={typoStyles.textLgSemibold} content="상품 등록하기" />
    </Link>
  );
}
