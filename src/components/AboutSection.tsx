"use client"

import { motion } from "framer-motion";
import React from "react";
import SectionContainer from "./SectionContainer";
import { INITIAL_NAME, SHOW_NAME, make_fade_in } from "@/constants";

export default function AboutSection() {
  return (
    <SectionContainer title="About Us" className="section-bg">
      <motion.div
        className="leading-10 text-white"
        initial={INITIAL_NAME}
        whileInView={SHOW_NAME}
        exit={INITIAL_NAME}
        variants={make_fade_in(0.0)}
        viewport={{ once: true }}
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
