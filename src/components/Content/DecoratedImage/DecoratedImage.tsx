import styles from "./DecoratedImage.module.scss";

interface DecoratedImageProps {
  src: string;
  alt?: string;
  style?: React.CSSProperties;
  className?: string;
}

export default function DecoratedImage({
  src,
  alt,
  style,
  className,
}: DecoratedImageProps) {
  return (
    <img
      className={`${styles.decoration} ${className}`}
      src={src}
      alt={alt || ""}
      style={style}
      loading="lazy"
    />
  );
}
