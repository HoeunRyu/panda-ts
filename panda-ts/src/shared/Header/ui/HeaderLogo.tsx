import Link from "next/link";

export function HeaderLogo() {
  return (
    <Link href="/">
      {/*  모바일 사이즈에서 텍스트만 보이기위해 아이콘/텍스트 분리해서 넣음 */}
      <div id="logo-img-box">
        <img
          id="logo-icon-img"
          src={"/assets/logo_icon.png"}
          alt="로고 이미지"
        />
        <img
          id="logo-text-img"
          src={"/assets/logo_text.png"}
          alt="로고 텍스트"
        />
      </div>
    </Link>
  );
}
