import React from "react";
import styles from "./ProjectTag.module.scss";

interface ProjectTagProps {
  day1?: boolean; // 1日目は開催するか
  day2?: boolean; // 1日目は開催するか
  exclusiveText?: string[];
  style?: React.CSSProperties;
}

export default function ProjectTag({
  day1 = false,
  day2 = false,
  exclusiveText = [],
  style,
}: ProjectTagProps) {
  return (
    <>
      {(day1 || day2 || exclusiveText) && (
        <div className={styles.projectTag} style={style}>
          {day1 && day2 ? (
            <span className={styles.projectBothTag}>1・2日目</span>
          ) : day1 ? (
            <span className={styles.projectDay1Tag}>1日目</span>
          ) : day2 ? (
            <span className={styles.projectDay2Tag}>2日目</span>
          ) : (
            <></>
          )}

          {exclusiveText.map((text, index) => (
            <span key={index} className={styles.projectExclusiveTag}>
              {text}
            </span>
          ))}
        </div>
      )}
    </>
  );
}
