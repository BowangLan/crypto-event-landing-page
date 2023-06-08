import Image from "next/image";
import { MdOutlineLocationOn } from "react-icons/md";
import bg from "@/../public/img/crypto-city.png";
import SectionContainer from "@/components/SectionContainer";
import { speakers, sponsors } from "@/data";

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <a className="px-12 py-3 text-black bg-white cursor-pointer hover:opacity-80 trans">
      {children}
    </a>
  );
};

export default function Home() {
  return (
    <>
      <div
        className="relative w-full h-screen gap-3 fcenter"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url('${bg.src}')`,
        }}
      >
        {/*  */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="absolute inset-0 z-20 gap-4 text-white fcenter">
          {/* Line */}
          <div className="flex items-center gap-6 text-white text-[24px]">
            <span>August 10, 2023 at 6:30 PM</span>
            <span className="inline-flex items-center gap-1">
              <MdOutlineLocationOn size={26} color="#fff" />
              <span>Dubai, Atlantis, The Palm</span>
            </span>
          </div>

          {/* Line */}
          <h1 className="font-press text-[64px] lg:text-[72px] text-center leading-[72px] lg:leading-[80px] mb-1">
            CryptoOWL Conference
          </h1>
          {/* Line */}
          <span className="text-[24px] text-center">
            {
              "Join the World's Top Crypto Companies and Blockchain Entrepreneurs"
            }
          </span>
          {/* Line */}
          <div className="flex gap-8 mt-8">
            <Button>Learn More</Button>
            <Button>Buy Ticket</Button>
          </div>
        </div>
      </div>
      <SectionContainer title="About Us" className="text-white section-bg">
        <span className="leading-10">
          CryptoOWL is the blockchain conference network bringing together the
          key players of crypto industry and experts to redefine the future of
          finance. The edition of the CryptoOWL will take place during on August
          10, 2023 in Dubai, with the world’s top crypto companies and
          blockchain entrepreneurs. Today, UAE, specifically Dubai is gearing up
          to become a global crypto hub. Thus, CryptoFOX will be the gathering
          in the region on behalf of the world of blockchain and cryptocurrency,
          with a wide range of topics focused on the financial technologies of
          the future, extensive networking opportunities and participation from
          more than 40 countries.
        </span>
      </SectionContainer>
      <SectionContainer title="Sponsors" className="text-white section-bg">
        <div className="grid grid-cols-4 gap-[32px] mt-8">
          {sponsors.map((sponsor, i) => {
            return (
              <a
                className="self-center px-4 py-12 rounded-lg bg-[rgb(226 242 254 / 50%)] fcenter justify-self-stretch trans bg-white hover:bg-blue-50 shadow-1"
                href={`//${sponsor.link}`}
                target="_blank"
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
              </a>
            );
          })}
        </div>
      </SectionContainer>
      <SectionContainer title="Speakers" className="text-white section-bg">
        <div className="grid grid-cols-4 gap-8 mt-8 text-black">
          {speakers.map((s, i) => (
            <div
              key={i}
              className="group fcenter px-4 h-[250px] bg-white rounded-lg cursor-default shadow-1 hover:bg-indigo-50/90 trans relative overflow-hidden"
            >
              <div className="absolute inset-0 z-50 fcenter">
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
            </div>
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
