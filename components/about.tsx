"use client";
import { playfairDisplay, openSans } from "@/app/fonts";
import { SectionHeading } from "./section-heading";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <motion.section
      className="flex flex-col items-center justify-center text-center max-w-[50rem] mb-28 leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 100, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className={`${openSans.className} mb-3`}>
        <span>
          After graduating from University of California, Santa Barbara with a
          degree in{" "}
        </span>
        <span className="font-semibold">Biopsychology, </span>
        <span>I translated my love for </span>
        <span className="font-semibold">
          problem-solving, building projects, and creating beautiful and
          effective solutions{" "}
        </span>
        <span className="font-semibold">full-stack development </span>
        <span>and </span>
        <span className="font-semibold">computer science fundamentals. </span>
        <span>My primary stack is the </span>
        <span className="font-semibold">MERN stack </span>
        <span>- </span>
        <span className="font-semibold">
          MongoDB, Express, React, and Node.js,{" "}
        </span>
        <span>and I have created projects (such as this website!) using </span>
        <span className="font-semibold">TypeScript and Next.js. </span>
        <span>I also have professional experience developing with </span>
        <span className="font-semibold">Python, Flask, and AWS DynamoDB. </span>
        <span>
          I am always looking to learn new skills and technologies, so I am
          currently learning more about the AWS cloud. I am currently looking
          for a{" "}
        </span>
        <span className="font-semibold">
          full-time position as a software engineer/web developer.{" "}
        </span>
      </p>
      <p className={`${openSans.className}`}>
        <span>
          When I’m not coding, I enjoy reading, playing video games (Sims 2 and
          Tekken ftw!), doing pilates, doll collecting, researching skincare,
          and learning new languages; I’m currently tackling French and Spanish,
          as well as strengthening my native Vietnamese skills.{" "}
        </span>
      </p>
    </motion.section>
  );
};
