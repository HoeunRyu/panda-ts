import React from "react";
import { SnsLinkList } from "../Footer";

interface FooterSnsProps {
  sns: SnsLinkList;
}

export const FooterSns: React.FC<FooterSnsProps> = ({ sns }) => {
  const alt: string = `${sns.snsName} 링크`;

  return (
    <a href={sns.href} target="_blank" rel="noopener noreferrer">
      <img className="sns-icon" src={sns.src} alt={alt} />
    </a>
  );
};
