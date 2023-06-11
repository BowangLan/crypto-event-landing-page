"use client";

import React from "react";
import Button from "@/components/Button";
import { MdOutlineLocationOn } from "react-icons/md";
import { motion } from "framer-motion";
import { font_press } from "@/constants";

export default function Hero() {
  return (
    <div className="relative w-full h-screen gap-3 fcenter">
      {/*  */}

      <div className="absolute inset-0 z-20 gap-4 text-white fcenter">
        {/* Line */}
        <motion.div
          className="flex items-center gap-6 text-white text-[24px]"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <span>August 10, 2023 at 6:30 PM</span>
          <span className="inline-flex items-center gap-1">
            <MdOutlineLocationOn size={26} color="#fff" />
            <span>Dubai, Atlantis, The Palm</span>
          </span>
        </motion.div>

        {/* Line */}
        <motion.h1
          className={"text-[64px] lg:text-[48px] text-center leading-[72px] lg:leading-[80px] mb-1 " + font_press.className + " font-press"}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        >
          CryptoOWL Conference
        </motion.h1>
        {/* Line */}
        <motion.span
          className="text-[24px] text-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
        >
          {"Join the World's Top Crypto Companies and Blockchain Entrepreneurs"}
        </motion.span>
        {/* Line */}
        <motion.div
          className="flex gap-8 mt-8"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
        >
          <Button>Learn More</Button>
          <Button>Buy Ticket</Button>
        </motion.div>
      </div>
    </div>
  );
}
