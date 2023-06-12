import AOSInit from "@/components/AOSInit";
import "./globals.css";
import "aos/dist/aos.css";
import { Rubik } from "next/font/google";
import Background from "@/components/Background";
import { font_press } from "@/constants";
import Button, { ButtonOutline } from "@/components/Button";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "CryptoOWL",
  description:
    "CryptoOWL is the blockchain conference network bringing together the key players of crypto industry and experts to redefine the future of finance. The edition of the CryptoOWL will take place during on August 10, 2023 in Dubai, with the world’s top crypto companies and blockchain entrepreneurs.",
};

const Header = () => {
  return (
    <header className="fixed z-50 top-0 inset-x-0 h-[80px] flex items-center justify-between bg-[var(--header-bg)] backdrop-blur-sm z-100">
      <div className="w-full h-full px-8 mx-auto max-w-[1200px] flex items-center">
        <span
          className={"text-2xl text-white font-press " + font_press.className}
        >
          CryptoOWL
        </span>
        <div className="flex-1"></div>
        <div>
          <ButtonOutline>Buy Ticket</ButtonOutline>
        </div>
      </div>
    </header>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${rubik.className}`}>
        {/* <AOSInit /> */}
        <Background />
        <Header />
        <main className="">
          {children}
          <footer className="relative gap-3 py-6 text-xs text-gray-50 fcenter section-bg">
            <span>@2023 CryptoOWL All rights reserved.</span>
            <span className="md:absolute bottom-6 right-8">
              Developed by{" "}
              <a
                href="https://www.linkedin.com/in/bowang-lan-3b5759207/"
                className="underline"
                target="_blank"
              >
                Bowang Lan
              </a>
            </span>
          </footer>
        </main>
      </body>
    </html>
  );
}
