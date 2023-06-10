"use client";

import bg from "@/../public/img/crypto-city.png";

import React from "react";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";

const MAX_BLUR = 20;

const calculateBlur = (scrollY: number) => {
  if (scrollY > document.documentElement.clientHeight) {
    return MAX_BLUR;
  }
  const blur = scrollY / document.documentElement.clientHeight;
  return blur * MAX_BLUR;
}

export default function Background() {
  const { scrollY } = useScroll();

  console.log('r')
  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });

  return (
    <>
      <motion.div className="fixed inset-0 bg-black opacity-60 -z-10"
      style={{
        backdropFilter: `blur(${calculateBlur(scrollY.get())}px)`,
      }}
      ></motion.div>
      <div
        className="fixed inset-0 -z-20"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url('${bg.src}')`,
        }}
      ></div>
    </>
  );
}
