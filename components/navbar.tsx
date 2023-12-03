"use client";

import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { playfairDisplay } from "@/app/fonts";
import clsx from "clsx";
import React from "react";
import { useActiveSectionContext } from "@/context/active-section-context";

// type HeaderProps = {
//   activeSection: string;
//   setActiveSection: React.Dispatch<React.SetStateAction<"Home" | "About" | "Projects" | "Skills" | "Experience" | "Contact">;
// };

export const Navbar = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <nav
      className={`${playfairDisplay.className} fixed flex top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.75rem] sm:h-[initial] sm:py-0`}
    >
      <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.94rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
        {links.map((link) => {
          return (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition",
                  { "text-gray-950": activeSection === link.name }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-orange-100 rounded-full absolute inset-0 -z-10"
                    layoutId="activeSelection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </nav>
  );
};
