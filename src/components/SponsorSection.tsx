"use client";

import { motion } from "framer-motion";
import React from "react";
import SectionContainer from "./SectionContainer";
import { sponsors } from "@/data";
import Image from "next/image";

export default function SponsorsSection() {
  return (
    <SectionContainer title="Sponsors" className="text-white section-bg">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-[32px] mt-8">
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
