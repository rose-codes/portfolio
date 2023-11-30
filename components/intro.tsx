"use client";

import React from "react";
import Image from "next/image";
import Headshot from "@/public/Headshot.jpeg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { playfairDisplay, openSans } from "@/app/fonts";

export const Intro = () => {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={Headshot}
              alt="Rose Le Software Engineer Portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "string",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 font-medium flex flex-col"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span
          className={`${playfairDisplay.className} font-bold text-3xl sm:text-5xl !leading-[1.5]`}
        >{`Hi, I\'m Rose.`}</span>
        <span
          className={`${openSans.className} text-lg sm:text-xl !leading-[1.5] `}
        >
          <span>{`I\'m a `}</span>
          <span className="font-bold">Full-Stack Software Engineer </span>
          <span>with </span>
          <span className="font-bold">2.5 years </span>
          <span>of web development experience. I enjoy building </span>
          <span className="italic">beautiful & quality websites. </span>
          <span>My specialty is </span>
          <span className="underline">developing React apps.</span>
        </span>
      </motion.p>
      <motion.div
        className={`${playfairDisplay.className} flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium`}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact Me
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
          href="/Resume.pdf"
          download
        >
          Download Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-white px-7 py-3 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
          href="https://www.linkedin.com/in/rhle"
          target="_blank"
        >
          LinkedIn <BsLinkedin />
        </a>
        <a
          className="bg-white px-7 py-3 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
          href="https://www.github.com/rose-codes"
          target="_blank"
        >
          GitHub <BsGithub />
        </a>
      </motion.div>
    </section>
  );
};
