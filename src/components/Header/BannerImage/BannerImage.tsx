"use client";
import { basePath } from "@/const/path";
import styles from "./BannerImage.module.scss";

export default function BannerImage() {
  return (
    <a className={styles.bannerLink} href="/" aria-label="トップに戻る">
      <img className={styles.banner} src={`${basePath}/img/banner.webp`} />
    </a>
  );
}
