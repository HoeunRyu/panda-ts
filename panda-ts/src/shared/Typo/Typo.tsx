import React from "react";
import "./Typo.css";

/**
 * 텍스트 스타일
 * textSizeWeight: "text-[size] [weight]"
 *
 * size 옵션: 3xl, 2xl, xl, 2lg, lg, md, sm, xs
 * weight 옵션: bold, semibold, medium, regular
 */
export const typoStyles = {
  text3xlBold: "text-3xl bold",
  text3xlSemibold: "text-3xl semibold",
  text2xlBold: "text-2xl bold",
  text2xlSemibold: "text-2xl semibold",
  text2xlMedium: "text-2xl medium",
  text2xlRegular: "text-2xl regular",
  textXlBold: "text-xl bold",
  textXlSemibold: "text-xl semibold",
  textXlMedium: "text-xl medium",
  textXlRegular: "text-xl regular",
  text2lgBold: "text-2lg bold",
  text2lgSemibold: "text-2lg semibold",
  text2lgMedium: "text-2lg medium",
  text2lgRegular: "text-2lg regular",
  textLgBold: "text-lg bold",
  textLgSemibold: "text-lg semibold",
  textLgMedium: "text-lg medium",
  textLgRegular: "text-lg regular",
  textMdBold: "text-md bold",
  textMdSemibold: "text-md semibold",
  textMdMedium: "text-md medium",
  textMdRegular: "text-md regular",
  textSmSemibold: "text-sm semibold",
  textSmMedium: "text-sm medium",
  textXsSemibold: "text-xs semibold",
  textXsMedium: "text-xs medium",
  textXsRegular: "text-xs regular",
} as const;

type TypoStylesKey = keyof typeof typoStyles;

interface TypoParams {
  className: TypoStylesKey;
  content: string;
  color?: string;
}

export const Typo: React.FC<TypoParams> = ({ className, content, color }) => {
  return (
    <p className={typoStyles[className]} style={{ color: color ?? "black" }}>
      {content}
    </p>
  );
};
