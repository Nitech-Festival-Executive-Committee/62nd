"use client";
import { useState } from "react";
import ContentTitle from "../Content/ContentTitle/ContentTitle";
import PageWrapper from "../Content/PageWrapper/PageWrapper";
import styles from "./Announcements.module.scss";
import { announcements } from "./AnnouncementsData";
import NewsAccordion from "./NewsAccordion";
import { Button } from "@mui/material";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Announcements() {
  const [expanded, setExpanded] = useState(false);

  const onClickHandler = () => setExpanded((prev) => !prev);

  return (
    <>
      <ContentTitle title="お知らせ" size={2} bigTitle />
      <PageWrapper>
        <div className={styles.newsContainer}>
          <div className={styles.accordionContainer}>
            {expanded ? (
              <>
                {announcements.map((announcement, index) => (
                  <NewsAccordion key={index} {...announcement} />
                ))}
              </>
            ) : (
              <>
                {announcements.slice(0, 5).map((announcement, index) => (
                  <NewsAccordion key={index} {...announcement} />
                ))}
                <Button
                  className={styles.announcementsButton}
                  onClick={onClickHandler}
                >
                  もっと見る
                  <IoMdArrowDropdown />
                </Button>
              </>
            )}
          </div>
        </div>
      </PageWrapper>
    </>
  );
}
