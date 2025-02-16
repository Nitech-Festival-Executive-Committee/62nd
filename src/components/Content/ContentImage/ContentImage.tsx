import DecoratedImage from "../DecoratedImage/DecoratedImage";
import styles from "./ContentImage.module.scss";

interface ContentImageProps {
  src: string;
  alt?: string;
  style?: React.CSSProperties;
  className?: string;
  decorated?: boolean; // boxshadowをつけるかどうか
}

export default function ContentImage({
  src,
  alt,
  style,
  className,
  decorated = true,
}: ContentImageProps) {
  return (
    <div className={`${styles.contentImage} ${className}`} style={style}>
      {decorated ? (
        <DecoratedImage src={src} alt={alt} />
      ) : (
        <img src={src} alt={alt} loading="lazy" />
      )}
    </div>
  );
}
