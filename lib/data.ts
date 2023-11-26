import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
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
        title: "Graduated bootcamp",
        location: "Remote",
        description:
        "I graduated after from Ada Developers Academy where I learned Computer Science and Software Engineering Fundamentals.",
        icon: React.createElement(LuGraduationCap),
        date: "2023",
    },
    {
        title: "Cloud Security - Full-Stack Software Engineer Intern",
        location: "Remote",
        description:
        "I worked as a full-stack software engineer intern for the Cloud Security team.",
        icon: React.createElement(CgWorkAlt),
        date: "2023",
    },
    {
        title: "Full-Stack Developer",
        location: "San Diego, CA",
        description:
        "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2023 - present",
    },
] as const;

export const projectsData = [
    {
        title: "RxRoster",
        description:
        "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
        tags: ["React", "Node.js", "Express", "Next.js", "DynamoDB", "Tailwind"],
        imageUrl: rxRosterImg,
    },
    {
        title: "When Women Understand",
        description:
        "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
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