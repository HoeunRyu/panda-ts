import "./Footer.css";
import { FooterLink } from "./ui/FooterLink";
import { FooterSns } from "./ui/FooterSns";
import { Typo } from "../Typo/Typo";
import { colorChips } from "../styles/colorChips";

export interface SnsLinkList {
  snsName: string;
  href: string;
  src: string;
}

const SNS_LINK_LIST: SnsLinkList[] = [
  {
    snsName: "페이스북",
    href: "https://www.facebook.com/",
    src: "/assets/facebook_icon.png",
  },
  {
    snsName: "트위터",
    href: "https://x.com/",
    src: "/assets/twitter_icon.png",
  },
  {
    snsName: "유튜브",
    href: "https://www.youtube.com/",
    src: "/assets/youtube_icon.png",
  },
  {
    snsName: "인스타그램",
    href: "https://www.instagram.com/",
    src: "/assets/insta_icon.png",
  },
];

export function Footer() {
  return (
    <footer>
      <div className="content">
        <div id="addr">
          <Typo
            className={"textLgRegular"}
            color={colorChips.gray400}
            content="©codeit - 2024"
          />
        </div>

        <FooterLink />

        <div className="sns-box">
          {SNS_LINK_LIST.map((sns, idx) => (
            <FooterSns sns={sns} key={idx} />
          ))}
        </div>
      </div>
    </footer>
  );
}
