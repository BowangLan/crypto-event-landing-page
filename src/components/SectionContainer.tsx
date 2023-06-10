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

const getSpeakerAvatar = (name: string) => {
  const s = speakers.filter((s) => s.name === name);
  if (s.length === 0) return "";
  else return s[0].avatar;
};

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
            className="mb-12 text-[36px] font-bold leading-4 text-left z-80 text-white"
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

export function AboutSection() {
  return (
    <SectionContainer title="About Us" className="section-bg">
      <motion.div
        className="leading-10 text-white"
        initial={INITIAL_STATE}
        whileInView={SHOW_STATE}
        exit={INITIAL_STATE}
        viewport={{ once: true }}
        transition={{ ...TRANSITION }}
      >
        CryptoOWL is the blockchain conference network bringing together the key
        players of crypto industry and experts to redefine the future of
        finance. The edition of the CryptoOWL will take place during on August
        10, 2023 in Dubai, with the world’s top crypto companies and blockchain
        entrepreneurs. Today, UAE, specifically Dubai is gearing up to become a
        global crypto hub. Thus, CryptoFOX will be the gathering in the region
        on behalf of the world of blockchain and cryptocurrency, with a wide
        range of topics focused on the financial technologies of the future,
        extensive networking opportunities and participation from more than 40
        countries.
      </motion.div>
    </SectionContainer>
  );
}

export function SponsorsSection() {
  return (
    <SectionContainer title="Sponsors" className="text-white section-bg">
      <div className="grid grid-cols-4 gap-[32px] mt-8">
        {sponsors.map((sponsor, i) => {
          return (
            <motion.a
              className="self-center px-4 py-12 rounded-lg bg-[rgb(226 242 254 / 50%)] fcenter justify-self-stretch trans bg-white hover:bg-blue-50 shadow-1 hover:scale-105"
              href={`//${sponsor.link}`}
              target="_blank"
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
              key={i}
            >
              <div className="relative min-w-[140px] h-[36px]">
                <Image
                  src={`/img/sponsors/${sponsor.icon}`}
                  alt="sponsor"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.a>
          );
        })}
      </div>
    </SectionContainer>
  );
}

export function TalksSection() {
  const [selectedTalkIndex, setSelectedTalkIndex] = React.useState<
    number | null
  >(null);
  return (
    <SectionContainer title="Discussion Topics">
      {/* <div className="fixed inset-0 fcenter z-60 bg-black/50"></div> */}
      <div className="grid gap-8 lg:gap-12 md:grid-cols-2 xl:grid-cols-3">
        {talks.map((talk, i) => (
          <motion.div
            key={i}
            className={
              "flex items-center px-6 py-8 bg-white rounded-lg group hover:scale-[103%] trans + " +
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
            <div className="flex flex-col h-full gap-3">
              <h3 className="text-2xl font-bold">{talk.title}</h3>
              <div className="flex items-center gap-8 lg:gap-12">
                {talk.speaker.map((sp, j) => (
                  <div key={j} className="relative flex items-center gap-2">
                    <Image
                      src={`/img/speakers/${getSpeakerAvatar(sp)}`}
                      alt={sp}
                      width={26}
                      height={26}
                      className="object-contain rounded-full"
                    />
                    <span className="text-base">{sp}</span>
                  </div>
                ))}
              </div>
              <span
                className={
                  "text-gray-500 text-[16px] leading-[28px]" +
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

export function SpeakersSection() {
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
