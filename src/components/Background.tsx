"use client";

import bg from "@/../public/img/crypto-city.png";

import React from "react";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";

const MAX_BLUR = 20;

const calculateBlur = (scrollY: number) => {
  if (typeof document === "undefined") return;
  if (scrollY > document.documentElement.clientHeight + 100) {
    return MAX_BLUR;
  }
  const blur = scrollY / (document.documentElement.clientHeight + 100);
  return blur * MAX_BLUR;
};

export default function Background() {
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (typeof document === "undefined") return;
    let percentage = latest / (document.documentElement.clientHeight + 100);
    if (percentage > 1) percentage = 1;
    const e = document.getElementById("background");
    if (!e) return;
    e.style.filter = `blur(${percentage * MAX_BLUR}px)`;
    const e2 = document.getElementById("background-filter");
    if (!e2) return;
    e2.style.opacity = `${percentage * 0.1 + 0.5}`;
  });

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.5, delay: 0.0, ease: "easeOut" }}
        className="fixed inset-0 bg-black -z-10"
        id="background-filter"
      ></motion.div>
      <div
        id="background"
        className="fixed inset-0 -z-20"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url('${bg.src}')`,
        }}
      ></div>
    </>
  );
}
