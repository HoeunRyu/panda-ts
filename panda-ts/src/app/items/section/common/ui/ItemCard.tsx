import "./ItemCard.css";
import Link from "next/link";
import { CardImg } from "@/shared/ui/CardImg";
import { Typo } from "@/shared/Typo/Typo";

export function ItemCard({ product }) {
  const {
    images: [productImg], //반환된 배열에서 첫번째 링크 대표 이미지로 사용
    name,
    price,
    favoritesCount,
  } = product;

  const formattedPrice = `${new Intl.NumberFormat("ko-KR").format(price)}원`;

  return (
    //TODO: 나중에 카드 클릭하면 각 상품 상세페이지로 이동하도록 링크 수정
    <Link className="item-card" href="/">
      <CardImg
        className="item-img"
        src={productImg}
        defaultImg={"/assets/default_item.png"}
        alt="대표 이미지"
      />

      <div className="item-card-text">
        <Typo className={"textMdMedium"} content={name} />
        <Typo className={"textLgBold"} content={formattedPrice} />
        <div className="fav-count-box">
          <img
            className="fav-heart-icon"
            src={"/assets/favorite_heart.png"}
            alt="좋아요 아이콘"
          />
          <Typo
            className={"textXsMedium"}
            content={favoritesCount}
            color="4b5563"
          />
        </div>
      </div>
    </Link>
  );
}
