"use client";

import React from "react";

export default function Button({
  children,
  onClick,
}: {
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      className="px-12 py-3 text-black bg-white cursor-pointer hover:opacity-80 trans"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function ButtonOutline({
  children,
  onClick,
}: {
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      className="px-10 py-2.5 text-white bg-transparent border border-white cursor-pointer hover:bg-white/10 trans"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
