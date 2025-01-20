import Link from "next/link";
import { Typo, typoStyles } from "../../Typo/Typo";

export function HeaderUser({ isLoggedIn, handleClick }) {
  return (
    <div id="user-btn" onClick={handleClick}>
      {/* TODO: 현재 버튼 클릭할떄마다 프로필이미지/로그인버튼 전환되는 상태 */}
      {isLoggedIn ? (
        <img
          id="profile-img"
          src={"/assets/default_profile.png"}
          alt="프로필 사진"
        />
      ) : (
        // TODO: 링크 수정하기 "/login"
        <Link id="login-btn" href="/">
          <Typo className={typoStyles.textLgSemibold} content="로그인" />
        </Link>
      )}
    </div>
  );
}
