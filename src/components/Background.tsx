"use client";

import bg from "@/../public/img/crypto-city.png";

import React from "react";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";

const MAX_BLUR = 30;

const calculateBlur = (scrollY: number) => {
  if (typeof document === "undefined") return;
  if (scrollY > document.documentElement.clientHeight) {
    return MAX_BLUR;
  }
  const blur = scrollY / document.documentElement.clientHeight;
  return blur * MAX_BLUR;
};

export default function Background() {
  const { scrollY } = useScroll();
  const ref = React.useRef<HTMLDivElement>();

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
    if (typeof document === "undefined") return;
    const e = document.getElementById("background");
    if (!e) return;
    // e.style.backdropFilter = `blur(${calculateBlur(latest)}px)`;
    e.style.filter = `blur(${calculateBlur(latest)}px)`;
  });

  return (
    <>
      <motion.div className="fixed inset-0 bg-black opacity-60 -z-10"></motion.div>
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
