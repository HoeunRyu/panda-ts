import Link from "next/link";
import { Typo } from "../../Typo/Typo";
import { colorChips } from "@/shared/styles/colorChips";

export function FooterLink() {
  return (
    <div className="link-list">
      {/* TODO: 링크 수정하기 ["/privacy", "/faq"] */}
      <Link className="link-item" href="/">
        <Typo
          className={"textLgRegular"}
          color={colorChips.gray200}
          content="Privacy Policy"
        />
      </Link>
      <Link className="link-item" href="/">
        <Typo
          className={"textLgRegular"}
          color={colorChips.gray200}
          content="FAQ"
        />
      </Link>
    </div>
  );
}
