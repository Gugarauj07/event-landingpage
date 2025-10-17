"use client";

import EventContentCard from "@/components/event-content-card";


const EVENT_CONTENT = [
  {
    title: "Programa Internacional Geociência e Geoparques UNESCO",
    des: "Conferência sobre integração de conservação, ciência e comunidades no contexto dos Geoparques UNESCO, apresentando experiências internacionais e metodologias aplicadas.",
    name: "José Bernardo Brilha",
    position: "Universidade de Minho, Portugal",
    panel: "Conferência",
    img: "/image/avatar1.jpg",
  },
  {
    title: "Povos Originários e a Proteção do Território",
    des: "Palestra sobre a importância dos povos indígenas na proteção e conservação do território amazônico, destacando saberes tradicionais e práticas de gestão territorial.",
    name: "Representantes dos Povos Indígenas",
    position: "Programa Waimiri Atroari",
    panel: "Palestra",
    img: "/image/avatar2.jpg",
  },
  {
    title: "Inventário Integrado: Mapeando o Patrimônio",
    des: "Apresentação do inventário integrado do patrimônio geocientífico, cultural e turístico de Presidente Figueiredo, metodologia e resultados preliminares.",
    name: "Raimundo Humberto C. Lima",
    position: "PPGGEO/UFAM",
    panel: "Palestra",
    img: "/image/avatar3.jpg",
  },
];

export function EventContent() {
  return (
    <section id="programacao" className="py-8 px-8 lg:py-20">
      <div className="w-full flex mb-8 flex-col items-center">
        <div className="h-12 w-72 md:w-96 bg-gray-100 rounded-lg p-1 flex">
          <button className="flex-1 bg-white rounded-md font-medium shadow-sm">
            Dia 1
          </button>
          <button className="flex-1 font-medium text-gray-600">
            Dia 2
          </button>
        </div>
      </div>
      <div className="mx-auto container">
        {EVENT_CONTENT.map((props, idx) => (
          <EventContentCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default EventContent;
