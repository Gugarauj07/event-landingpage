"use client";

import StatsCard from "@/components/stats-card";

const STATS = [
  {
    count: "250+",
    title: "Participantes",
  },
  {
    count: "8",
    title: "Palestrantes",
  },
  {
    count: "2",
    title: "Dias",
  },
  {
    count: "1",
    title: "Oficina",
  },
];

export function OurStats() {
  return (
    <section className="container mx-auto grid gap-10 px-8 py-44 lg:grid-cols-1 lg:gap-20 xl:grid-cols-2 xl:place-items-center">
      <div>
        <h6 className="mb-6 font-medium text-orange-500">
          Nossos Números
        </h6>
        <h2 className="text-5xl font-bold leading-tight lg:w-3/4 text-gray-800">
          Destaques do Evento
        </h2>
        <p className="mt-3 w-full text-gray-500 lg:w-9/12 text-lg">
          Este evento de dois dias reúne pesquisadores, instituições civis e públicas, 
          e comunidades locais para elaboração de um plano de ação integrado para a 
          geodiversidade amazônica.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-8 gap-x-28">
          {STATS.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurStats;
