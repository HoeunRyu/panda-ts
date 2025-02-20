import { useEffect, useState } from "react";

interface UseDefaultImgReturn {
  handleImgErr: () => void;
  imgSrc: string;
}

export function useDefaultImg(
  src: string | null,
  defaultImgSrc: string
): UseDefaultImgReturn {
  const [imgSrc, setImgSrc] = useState<string>(src || defaultImgSrc);

  useEffect(() => {
    setImgSrc(src || defaultImgSrc);
  }, [src, defaultImgSrc]);

  const handleImgErr = (): void => setImgSrc(defaultImgSrc);

  return {
    handleImgErr,
    imgSrc,
  };
}
