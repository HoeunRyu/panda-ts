import "./LandingPage.css";
// import homeTopImg from "public/assets/home_top_img.png";
// import hotItemImg from "public/assets/hot_item_img.png";
// import searchItemImg from "public/assets/search_img.png";
// import regItemImg from "public/assets/register_img.png";
// import homeBottomImg from "public/assets/home_bottom_img.png";
import { LandingMainCards } from "./ui/LandingMainCards";
import Link from "next/link";

interface LandingMainCardsProps {
  img: string;
  badge: string;
  title1: string;
  title2: string;
  desc1: string;
  desc2: string;
}

const MAIN_CARD_CONTENTS: LandingMainCardsProps[] = [
  {
    img: "/assets/hot_item_img.png",
    badge: "Hot item",
    title1: "인기 상품을 ",
    title2: "확인해 보세요",
    desc1: "가장 HOT한 중고거래 물품을",
    desc2: "판다 마켓에서 확인해 보세요",
  },
  {
    img: "/assets/search_img.png",
    badge: "Search",
    title1: "구매를 원하는 ",
    title2: "상품을 검색하세요",
    desc1: "구매하고 싶은 물품은 검색해서",
    desc2: "쉽게 찾아보세요",
  },
  {
    img: "/assets/register_img.png",
    badge: "Register",
    title1: "판매를 원하는 ",
    title2: "상품을 등록하세요",
    desc1: "어떤 물건이든 판매하고 싶은 상품을",
    desc2: "쉽게 등록하세요",
  },
];

export default function page() {
  return (
    <div id="landing-page">
      <div className="bg-colored">
        <div id="top-box" className="container">
          <div className="msg-box">
            <div className="landing-title-box">
              <span className="landing-title">일상의 모든 물건을 </span>
              <span className="landing-title">거래해 보세요</span>
            </div>
            <Link id="items-btn" href="/items">
              구경하러 가기
            </Link>
          </div>
          <img
            className="panda-img"
            src={"/assets/home_top_img.png"}
            alt="랜딩 페이지 이미지"
          />
        </div>
      </div>

      <div className="landing-main">
        {MAIN_CARD_CONTENTS.map((card) => (
          <LandingMainCards key={card.badge} {...card} />
        ))}
      </div>

      <div className="bg-colored bottom">
        <div id="bottom-box" className="container">
          <div className="msg-box">
            <div className="landing-title-box">
              <p className="landing-title">믿을 수 있는</p>
              <p className="landing-title">판다마켓 중고거래</p>
            </div>
          </div>
          <img
            className="panda-img"
            src={"/assets/home_bottom_img.png"}
            alt="랜딩 페이지 이미지"
          />
        </div>
      </div>
    </div>
  );
}
