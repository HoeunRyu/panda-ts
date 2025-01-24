import Link from "next/link";
import { useMediaQuery } from "../../hooks/mediaQueryHook";
import { usePathname } from "next/navigation";
import { ScreenSizeType } from "@/shared/type";

export function HeaderLink() {
  const screenSize: ScreenSizeType = useMediaQuery();
  //스크린 사이즈에 따라 텍스트스타일 변경
  const linkTypoClassName: string =
    screenSize === "MOBILE" ? "text-lg bold" : "text-2lg bold";

  //현재 페이지 주소에 따라 메뉴 활성화 상태 색상으로 표시
  const pathname: string = usePathname(); // useLocation 대신 usePathname 사용

  const isPathItemsClassName: string = pathname === "/items" ? "active" : "";
  const isPathBoardClassName: string =
    pathname === "/freeboard" ? "active" : "";

  return (
    <div className="link-list">
      <Link className={`link-item ${isPathBoardClassName}`} href="/freeboard">
        <p className={linkTypoClassName}>자유게시판</p>
      </Link>
      <Link className={`link-item ${isPathItemsClassName}`} href="/items">
        <p className={linkTypoClassName}>중고마켓</p>
      </Link>
    </div>
  );
}
