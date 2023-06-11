"use client";

import {
  INITIAL_STATE,
  SHOW_STATE,
  SectonVariants,
  TRANSITION,
} from "@/constants";
import { speakers, sponsors, talks } from "@/data";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import SectionContainer from "./SectionContainer";

const getSpeakerAvatar = (name: string) => {
  const s = speakers.filter((s) => s.name === name);
  if (s.length === 0) return "";
  else return s[0].avatar;
};

export default function TalksSection() {
  const [selectedTalkIndex, setSelectedTalkIndex] = React.useState<
    number | null
  >(null);
  return (
    <SectionContainer title="Discussion Topics">
      {/* <div className="fixed inset-0 fcenter z-60 bg-black/50"></div> */}
      <div className="grid gap-8 lg:gap-12 md:grid-cols-2">
        {talks.map((talk, i) => (
          <motion.div
            key={i}
            className={
              "flex items-center px-8 py-10 bg-white rounded-lg group hover:scale-[102%] trans + " +
              (selectedTalkIndex === i ? "z-60 h-[]" : "")
            }
            // layout
            style={
              selectedTalkIndex === i
                ? {
                    position: "fixed",
                    top: "20%",
                    left: "20%",
                    right: "20%",
                    bottom: "20%",
                  }
                : {}
            }
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            // onClick={() => {
            //   if (selectedTalkIndex === i) {
            //     setSelectedTalkIndex(null);
            //   } else {
            //     setSelectedTalkIndex(i);
            //   }
            // }}
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
            <div className="flex flex-col flex-none h-full mt-1 mr-6 text-xl font-bold text-gray-500">
              {i + 1}
            </div>
            <div className="flex flex-col h-full gap-4">
              <h3 className={"text-[16px] md:text-[20px] font-bold font-press "}>
                {talk.title}
              </h3>
              <div className="flex items-center gap-3 lg:gap-4">
                {talk.speaker.map((sp, j) => (
                  <div key={j} className="relative flex items-center gap-2">
                    <Image
                      src={`/img/speakers/${getSpeakerAvatar(sp)}`}
                      alt={sp}
                      width={24}
                      height={24}
                      className="object-contain rounded-full"
                    />
                    <span className="text-[14px]">{sp}</span>
                  </div>
                ))}
              </div>
              <span
                className={
                  "text-gray-500 text-[16px] leading-[32px] line-clamp-5 " +
                  (selectedTalkIndex === i ? "" : "line-clamp-5")
                }
              >
                {talk.abstract}
              </span>
              <div className="flex flex-wrap gap-3">
                {talk.tag.map((tag, j) => (
                  <span
                    key={i}
                    className="inline-block px-3 py-1 text-[12px] bg-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}
