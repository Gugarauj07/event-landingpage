"use client";

import Image from "next/image";

const SPONSORS = [
  {
    name: "UFAM",
    src: "/assets/UFAM_logo.png",
  },
  {
    name: "ICE",
    src: "/assets/ICE_logo.png",
  },
  {
    name: "DEGEO",
    src: "/assets/DEGEO_logo.png",
  },
  {
    name: "UNESCO",
    src: "/assets/UNESCO_logo.svg",
  },
  {
    name: "IPAM",
    src: "/assets/IPAM_white-logo.svg",
  },
  {
    name: "UEA",
    src: "/assets/UEA_logo.png",
  },
];

export function SponsoredBy() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto text-center">
        <h6 className="mb-8 text-lg font-semibold text-gray-800">
          REALIZAÇÃO
        </h6>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {SPONSORS.map((logo, key) => (
            <div key={key} className={logo.name === "IPAM" ? "p-4 rounded-full bg-gray-900" : "p-0"}>
              <Image
                width={256}
                height={256}
                src={logo.src}
                alt={logo.name}
                className="w-40 h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SponsoredBy;
