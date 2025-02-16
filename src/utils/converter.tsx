import { SwiperCardProps } from "@/components/Swiper/SwiperCard/SwiperCard";
import { NITFES_DATE_TEXT, NITFES_EDITION_ENG } from "@/const/const";
import { ProjectData } from "@/types/projectInterface";
import { Schedule } from "@/types/types";
import { formatPeriod } from "@/utils/formatter";
import React from "react";
import { ReactNode } from "react";

export const convertScheduleToReactNode = (schedule: Schedule): ReactNode => {
  return (
    <>
      {schedule.day1 && (
        <p>
          <span>
            1日目({NITFES_DATE_TEXT.DAY1_SLASH}): {formatPeriod(schedule.day1)}
          </span>
        </p>
      )}
      {schedule.day2 && (
        <p>
          <span>
            2日目({NITFES_DATE_TEXT.DAY2_SLASH}): {formatPeriod(schedule.day2)}
          </span>
        </p>
      )}
    </>
  );
};

export const convertScheduleToSummaryReactNode = (
  schedule: Schedule
): ReactNode => {
  if (!schedule.day1 && !schedule.day2) return null;
  return (
    <>
      {schedule.day1 && (
        <>
          {NITFES_DATE_TEXT.DAY1_SLASH}: {formatPeriod(schedule.day1)}
          <br />
        </>
      )}
      {schedule.day2 && (
        <>
          {NITFES_DATE_TEXT.DAY2_SLASH}: {formatPeriod(schedule.day2)}
          <br />
        </>
      )}
    </>
  );
};

export const convertProjectDataToSwiperCardProps = (
  project: ProjectData
): SwiperCardProps => {
  const props: SwiperCardProps = {
    title: project.name,
    href: `/project/${project.link}/`,
    imageUrl: `/${NITFES_EDITION_ENG}/project/${project.link}/brochure.webp`,
    imageAlt: project.name,
    day1: project.schedule?.day1 !== undefined,
    day2: project.schedule?.day2 !== undefined,
    projectTag: project.tags,
    schedule: convertScheduleToSummaryReactNode(project.schedule),
    place: project.place,
    brochureMini: false,
  };

  if (!project.swiperOption) return props; // オプションがなければそのまま返す

  // オプションがある場合は上書き
  const {
    title,
    href,
    brochurePath,
    dayTag,
    projectTag: swiperProjectTag,
    place,
    schedule,
    brochureMini,
  } = project.swiperOption;

  if (title) props.title = title;
  if (href) props.href = href;
  if (brochurePath) props.imageUrl = brochurePath;
  if (dayTag) {
    props.day1 = dayTag.day1;
    props.day2 = dayTag.day2;
  }
  if (swiperProjectTag) props.projectTag = swiperProjectTag;
  if (place) props.place = place;
  if (schedule) {
    props.schedule = (
      <span>
        {schedule.day1 && (
          <>
            {NITFES_DATE_TEXT.DAY1}: {schedule.day1}
            <br />
          </>
        )}
        {schedule.day2 && (
          <>
            {NITFES_DATE_TEXT.DAY2}: {schedule.day2}
          </>
        )}
      </span>
    );
  }
  if (brochureMini) props.brochureMini = brochureMini;

  return props;
};
