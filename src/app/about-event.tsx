"use client";

import { Typography } from "@material-tailwind/react";
import AboutCard from "@/components/about-card";

const EVENT_INFO = [
  {
    title: "Conservação da Geodiversidade!",
    description:
      "Promover discussões estratégicas sobre a geodiversidade amazônica, reunindo pesquisadores, instituições e comunidades locais para elaboração de um plano de ação integrado.",
    subTitle: "Palestras",
  },
  {
    title: "Participação Comunitária!",
    description:
      "Oficinas participativas para construção colaborativa do Plano de Ação da Geodiversidade, valorizando os saberes tradicionais das comunidades locais.",
    subTitle: "Oficinas",
  },
];

export function AboutEvent() {
  return (
    <section id="sobre" className="container mx-auto flex flex-col items-center px-4 py-10">
      <Typography variant="h6" className="text-center mb-2" color="orange">
        Sobre o evento
      </Typography>
      <Typography variant="h3" className="text-center" color="blue-gray">
        Por que Participar?
      </Typography>
      <Typography
        variant="lead"
        className="mt-2 lg:max-w-4xl mb-8 w-full text-center font-normal !text-gray-500"
      >
        O evento "Diálogos Amazônicos: Plano de Ação da Geodiversidade" é uma iniciativa 
        pioneira no Brasil que busca articular conhecimento científico, gestão territorial 
        e participação comunitária, promovendo estratégias colaborativas que valorizem 
        a geodiversidade amazônica.
      </Typography>
      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {EVENT_INFO.map((props, idx) => (
          <AboutCard key={idx} {...props} />
        ))}
        <div className="md:col-span-2">
          <AboutCard
            title="Geoparque UNESCO!"
            subTitle="Objetivo"
            description="Contribuir diretamente para a candidatura do Geoparque Cachoeiras do Amazonas ao selo da UNESCO, fortalecendo as políticas públicas do município."
          />
        </div>
      </div>
    </section>
  );
}

export default AboutEvent;
