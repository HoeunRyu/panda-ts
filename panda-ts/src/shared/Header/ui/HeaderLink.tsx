import Link from "next/link";
import { useMediaQuery } from "../../hooks/mediaQueryHook";
import { Typo, typoStyles } from "../../Typo/Typo";
import { usePathname } from "next/navigation";

export function HeaderLink() {
  const screenSize = useMediaQuery();
  //스크린 사이즈에 따라 텍스트스타일 변경
  const linkTypoClassName: string =
    screenSize === "MOBILE" ? typoStyles.textLgBold : typoStyles.text2lgBold;

  //현재 페이지 주소에 따라 메뉴 활성화 상태 색상으로 표시
  const pathname: string = usePathname(); // useLocation 대신 usePathname 사용

  const isPathItemsClassName = pathname === "/items" ? "active" : "";
  const isPathBoardClassName = pathname === "/freeboard" ? "active" : "";

  //XXX: link 안에 classname이나 content는 다 interface로 타입 선언해주는건가??
  return (
    <div className="link-list">
      {/* TODO: 게시판 링크 수정하기 ["/freeboard" */}
      <Link className={`link-item ${isPathBoardClassName}`} href="/">
        <Typo className={linkTypoClassName} content="자유게시판" />
      </Link>
      <Link className={`link-item ${isPathItemsClassName}`} href="/items">
        <Typo className={linkTypoClassName} content="중고마켓" />
      </Link>
    </div>
  );
}
