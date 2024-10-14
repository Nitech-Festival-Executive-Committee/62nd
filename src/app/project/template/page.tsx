/* eslint-disable react/jsx-key */
import React from "react";
import ContentTitle from "@/components/Content/ContentTitle/ContentTitle";
import SectionBody from "@/components/Content/SectionBody/SectionBody";
import Project from "@/components/Project/Project/Project";
import ProjectTable from "@/components/Project/ProjectTable/ProjectTable";
import { templateProjectData } from "./templateData";
import { timeScheduleDay1, timeScheduleDay2 } from "./templateSchedule";

export default function ProjectTemplate() {
  return (
    <Project projectData={templateProjectData}>
      <SectionBody>
        <ContentTitle title="1日目" size={2} />
        <ProjectTable tableObject={timeScheduleDay1} />
      </SectionBody>
      <SectionBody>
        <ContentTitle title="2日目" size={2} />
        <ProjectTable tableObject={timeScheduleDay2} />
      </SectionBody>
    </Project>
  );
}
