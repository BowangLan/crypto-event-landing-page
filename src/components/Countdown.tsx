"use client";

import { INITIAL_NAME, SHOW_NAME, make_fade_in } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const CountdownItem = ({ value, label }: { value: number; label: string }) => (
  <div className="flex items-center w-[72px] sm:w-[96px] md:w-[120px] countdown-item flex-col">
    <AnimatePresence>
      <motion.span
        className="countdown-value h-[36px] md:h-[56px] fcenter text-[20px] sm:text-[24px] md:text-[32px] font-press"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {String(value).padStart(2, "0")}
      </motion.span>
    </AnimatePresence>
    <span className="font-normal uppercase countdown-label text-[12px] md:text-[14px]">
      {label}
    </span>
  </div>
);

const Separator = () => <div className="h-full bg-slate-400 w-[1px]"></div>;

export default function CountdownTimer({ date }: { date: string }) {
  const [countdown, setCountdown] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    const countdownDate = new Date(date).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        setCountdown([0, 0, 0, 0]);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountdown([days, hours, minutes, seconds]);
      }
    };

    const countdownInterval = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, [date]);

  return (
    <motion.div className="flex"
      initial={INITIAL_NAME}
      animate={SHOW_NAME}
      variants={make_fade_in(1.8)}
    >
      <CountdownItem value={countdown[0]} label="days" />
      <Separator />
      <CountdownItem value={countdown[1]} label="hours" />
      <Separator />
      <CountdownItem value={countdown[2]} label="minutes" />
      <Separator />
      <CountdownItem value={countdown[3]} label="seconds" />
    </motion.div>
  );
}
