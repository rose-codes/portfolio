import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaCode } from "react-icons/fa";
import { DiJavascript } from "react-icons/di"
import { FiPenTool } from "react-icons/fi"
import rxRosterImg from "@/public/rxRoster.png";
import whenWomenImg from "@/public/whenWomen.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Full-Stack Developer",
        location: "San Diego, CA",
        description:
        "I'm now a full-stack developer working on personal projects. My stack includes React, Next.js, TypeScript, Tailwind, and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2023 - present",
    },
    {
        title: "Full-Stack Developer, Technical Team Lead",
        location: "San Diego, CA",
        description:
        "I served as a full-stack developer and technical team lead for a Hackathon Project. We were placed in the top 20 out of 64 projects and won the Outstanding Social Impact Award ",
        icon: React.createElement(FaReact),
        date: "2023 - present",
    },
    {
        title: "Cloud Security - Full-Stack Software Engineer Intern",
        location: "Remote",
        description:
        "I worked as a full-stack software engineer intern for the Cloud Security team at a software development tools company.",
        icon: React.createElement(CgWorkAlt), //cannot use component alone in TS file (but can in TSX file)
        date: "2023",
    },
    {
        title: "Graduated Bootcamp",
        location: "Remote",
        description:
        "I completed a Software Engineering Certificate and graduated from Ada Developers Academy where I learned Computer Science and Software Engineering Fundamentals.",
        icon: React.createElement(LuGraduationCap),
        date: "2022-2023",
    },
    {
        title: "UI Designer Student",
        location: "Remote",
        description:
        "I participated in a UI course to learn UI principles and utilizing Figma to create wireframes.",
        icon: React.createElement(FiPenTool), //cannot use component alone in TS file (but can in TSX file)
        date: "2022",
    },
    {
        title: "JavaScript Developer Student",
        location: "Remote",
        description:
        "I participated in a bootcamp where I developed projects using JavaScript and React.",
        icon: React.createElement(DiJavascript), //cannot use component alone in TS file (but can in TSX file)
        date: "2021-2022",
    },
    {
        title: "Full-Stack Student (Self-Taught)",
        location: "San Diego, CA",
        description:
        "I self-taught myself JavaScript and built mini projects using HTML and CSS.",
        icon: React.createElement(FaCode), //cannot use component alone in TS file (but can in TSX file)
        date: "2021-2022",
    },
] as const;

export const projectsData = [
    {
        title: "RxRoster",
        description:
        "I was a full-stack for my capstone and passion project is a Medication Tracker application. It includes authentication using React and Next.js.",
        tags: ["React", "Node.js", "Express", "Next.js", "DynamoDB", "Tailwind"],
        imageUrl: rxRosterImg,
    },
    {
        title: "When Women Understand",
        description:
        "I served as a full-stack developer and technical team lead for this project for women to identify domestic mental abuse. Submission for the Girls Who Code Hackathon-for-Social-Good 2023.",
        tags: ["React", "Node.js", "Express", "Next.js", "Bootstrap"],
        imageUrl: whenWomenImg,
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Bootstrap",
    "MongoDB",
    "DynamoDB",
    "Express",
    "PostgreSQL",
    "Python",
    "Flask",
] as const;