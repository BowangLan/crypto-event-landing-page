"use client"

import React, { useEffect } from "react";
import AOS from "aos";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      delay: 400,
      duration: 800,
    });
  });
  return <div></div>
}
