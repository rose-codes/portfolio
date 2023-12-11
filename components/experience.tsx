"use client";

import React from "react";
import { SectionHeading } from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export const Experience = () => {
  const { ref, inView } = useSectionInView("Experience", 0.2);
  const { theme } = useTheme();
  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Software Engineer Journey</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((experience, index) => {
          return (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                visible={inView}
                intersectionObserverProps={{
                  triggerOnce: true,
                }}
                contentStyle={{
                  background:
                    theme === "light"
                      ? "rgba(243, 244, 246, 0.5)"
                      : "rgba(255, 255, 255, 0.05)",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid #9ca3af"
                      : "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                date={experience.date}
                icon={experience.icon}
                iconStyle={{
                  backgroundColor:
                    theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold capitalize">{experience.title}</h3>
                <p className="font-normal !mt-0">{experience.location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                  {experience.description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          );
        })}
      </VerticalTimeline>
    </section>
  );
};
