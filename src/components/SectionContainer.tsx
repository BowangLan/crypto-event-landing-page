"use client";

import {
  INITIAL_NAME,
  SHOW_NAME,
  make_fade_in,
} from "@/constants";
import { motion } from "framer-motion";
import React from "react";
import { font_press } from "@/constants";

export default function SectionContainer({
  title,
  className = "",
  children,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section className={"w-full py-16 " + className}>
      <div className="mx-auto max-w-[1200px] px-8 lg:px-12">
        {title && (
          <motion.h2
            className={
              "mb-12 text:[28px] md:text-[32px] font-bold leading-4 text-left z-80 text-white font-press " +
              font_press.className
            }
            viewport={{ once: true }}
            initial={INITIAL_NAME}
            whileInView={SHOW_NAME}
            exit={INITIAL_NAME}
            variants={make_fade_in(0.0)}
          >
            {title}
          </motion.h2>
        )}
        {children}
      </div>
    </motion.section>
  );
}
