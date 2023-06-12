"use client";

import React from "react";
import Button from "@/components/Button";
import { MdOutlineLocationOn } from "react-icons/md";
import { motion } from "framer-motion";
import {
  BUY_TICKET_URL,
  INITIAL_NAME,
  SHOW_NAME,
  font_press,
  make_fade_in,
} from "@/constants";
import Countdown from "./Countdown";

export default function Hero() {
  return (
    <div className="relative w-full h-screen gap-3 fcenter">
      {/*  */}

      <div className="absolute inset-0 z-20 gap-4 text-white fcenter">
        <motion.div
          className="mb-1"
          initial={INITIAL_NAME}
          animate={SHOW_NAME}
          variants={make_fade_in(1.8)}
        >
          <Countdown date="2023-08-10T18:30:00" />
        </motion.div>
        {/* Line */}
        <motion.div
          className="flex items-center flex-col md:flex-row gap-2 md:gap-6 text-white text-[24px]"
          initial={INITIAL_NAME}
          animate={SHOW_NAME}
          variants={make_fade_in(0.9)}
        >
          <span>August 10, 2023 at 6:30 PM</span>
          <span className="inline-flex items-center gap-1">
            <MdOutlineLocationOn size={26} color="#fff" />
            <span>Dubai, Atlantis, The Palm</span>
          </span>
        </motion.div>

        {/* Line */}
        <motion.h1
          className={
            "text-[48px] md:text-[48px] text-center leading-[72px] lg:leading-[80px] " +
            font_press.className +
            " font-press"
          }
          initial={INITIAL_NAME}
          animate={SHOW_NAME}
          variants={make_fade_in(1.2)}
        >
          CryptoOWL Conference
        </motion.h1>
        {/* Line */}
        <motion.span
          className="text-[24px] text-center"
          initial={INITIAL_NAME}
          animate={SHOW_NAME}
          variants={make_fade_in(1.5)}
        >
          {"Join the World's Top Crypto Companies and Blockchain Entrepreneurs"}
        </motion.span>
        {/* Line */}
        <motion.div
          className="flex gap-8 mt-8"
          initial={INITIAL_NAME}
          animate={SHOW_NAME}
          variants={make_fade_in(1.8)}
        >
          <Button
            onClick={() => {
              document
                .querySelector("#learn-more-anchor")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Learn More
          </Button>
          <Button
            onClick={() => {
              console.log("buy ticket");
              window.open(BUY_TICKET_URL);
            }}
          >
            Buy Ticket
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
