import styles from "./ContentBox.module.scss";
import { AnimationType } from "@/types/types";
import Animation from "@/components/Animation/Animation";
import { AnimationConfigs } from "@/types/types";

interface ContentBoxProps {
  title: React.ReactNode;
  children: React.ReactNode;
  style?: React.CSSProperties;
  animation?: AnimationType;
}

export default function ContentBox({
  title,
  children,
  style,
  animation = "center",
  ...configs
}: ContentBoxProps & AnimationConfigs) {
  return (
    <Animation animationType={animation} {...configs}>
      <div className={styles.contentBox} style={style}>
        <span className={styles.contentBoxTitle}>{title}</span>
        {children}
      </div>
    </Animation>
  );
}
