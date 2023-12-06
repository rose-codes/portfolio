"use client";

import { SectionHeading } from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { SubmitBtn } from "./submit-btn";

export const Contact = () => {
  const { ref } = useSectionInView("Contact");
  
  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-5">
        Please contact me directly via{" "}
        <a className="underline" href="mailto:rosehle33@gmail.com">
          email
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col"
        action={async (formData) => await sendEmail(formData)}
      >
        <input
          className="h-14 rounded-lg borderBlack px-4 active:border-black focus-visible:!outline-black focus-visible:!outline focus-visible:!outline-1"
          name="senderEmail"
          type="email"
          placeholder="Your email"
          required
          maxLength={5000}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 focus-visible:!outline-black focus-visible:!outline  focus-visible:!outline-1"
          name="message"
          placeholder="Your message"
          required
          maxLength={500}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
};
