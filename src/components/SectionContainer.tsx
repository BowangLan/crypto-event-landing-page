import React from "react";

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
    <section className={"w-full py-16 " + className}>
      <div className="mx-auto max-w-[1200px] px-8">
        {title && (
          <h2 className="mb-12 text-[36px] font-bold leading-4 text-left">{title}</h2>
        )}
        {children}
      </div>
    </section>
  );
}
