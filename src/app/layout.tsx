import "./globals.css";
import { Rubik, Press_Start_2P } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });
const press = Press_Start_2P({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "CryptoOWL",
  description: "CryptoOWL is the blockchain conference network bringing together the key players of crypto industry and experts to redefine the future of finance. The edition of the CryptoOWL will take place during on August 10, 2023 in Dubai, with the world’s top crypto companies and blockchain entrepreneurs.",
};

const Header = () => {
  return (
    <header className="fixed z-50 top-0 inset-x-0 h-[80px] flex items-center justify-between bg-[var(--header-bg)] backdrop-blur-sm z-100">
      <div className="w-full h-full px-8 mx-auto max-w-[1200px] flex items-center">
        <span className="text-2xl text-white font-press">CryptoOWL</span>
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
        <Header />
        <main>
          {children}
          <footer className="gap-3 py-6 text-xs text-gray-50 fcenter section-bg">
            <span>@2023 CryptoOWL All rights reserved.</span>
            <span className="">
              This website is built by{" "}
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
