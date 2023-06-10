"use client"

import React from 'react'

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-12 py-3 text-black bg-white cursor-pointer hover:opacity-80 trans" onClick={() => {
      document.querySelector("#learn-more-anchor")?.scrollIntoView({ behavior: "smooth" })
    }}>
      {children}
    </button>
  )
}
