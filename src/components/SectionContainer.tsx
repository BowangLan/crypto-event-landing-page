"use client";

import {
  INITIAL_STATE,
  SHOW_STATE,
  SectonVariants,
  TRANSITION,
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
            initial={INITIAL_STATE}
            whileInView={SHOW_STATE}
            exit={INITIAL_STATE}
            transition={{ ...TRANSITION }}
          >
            {title}
          </motion.h2>
        )}
        {children}
      </div>
    </motion.section>
  );
}
