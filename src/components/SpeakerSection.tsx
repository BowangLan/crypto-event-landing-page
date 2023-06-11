"use client";

import {
  INITIAL_STATE,
  SHOW_STATE,
  SectonVariants,
  TRANSITION,
} from "@/constants";
import { speakers } from "@/data";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import SectionContainer from "./SectionContainer";

export default function SpeakersSection() {
  return (
    <SectionContainer title="Speakers" className="text-white section-bg">
      <div className="grid grid-cols-4 gap-8 mt-8 text-black">
        {speakers.map((s, i) => (
          <motion.div
            key={i}
            className="group fcenter px-4 h-[250px] bg-white rounded-lg cursor-default shadow-1 hover:bg-indigo-50/90 trans relative overflow-hidden"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: "easeOut",
                },
              },
            }}
          >
            <div className="absolute inset-0 z-10 fcenter">
              <Image
                src={`/img/speakers/${s.avatar}`}
                alt={s.name}
                width={120}
                height={120}
                className="object-contain rounded-full group-hover:scale-105 trans"
              />
              <div className="flex flex-col items-center mt-2 text-center">
                <span className="text-xl">{s.name}</span>
                <span className="text-[16px] text-gray-500">{s.company}</span>
              </div>
            </div>
            <div className="absolute inset-0 opacity-0 bg-card-hover group-hover:opacity-100 trans"></div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}
