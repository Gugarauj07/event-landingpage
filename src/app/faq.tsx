"use client";

import React from "react";
// Removido Material Tailwind no FAQ para evitar erros de tipagem

const FAQS = [
  {
    title: "1. Como posso participar do evento Diálogos Amazônicos?",
    desc: "O evento é gratuito e aberto ao público. Para participar, basta comparecer ao Auditório da Prefeitura de Presidente Figueiredo nos dias 18 e 19 de novembro de 2025. O credenciamento será realizado no local.",
  },
  {
    title: "2. Qual é o objetivo do evento?",
    desc: "O evento tem como objetivo promover discussões estratégicas sobre a geodiversidade amazônica, reunindo pesquisadores, instituições civis e públicas, e comunidades locais para elaboração de um plano de ação integrado que contribua para a candidatura do Geoparque Cachoeiras do Amazonas ao selo da UNESCO.",
  },
  {
    title: "3. Quem pode participar?",
    desc: "O evento é destinado a pesquisadores, instituições civis e públicas, comunidades locais, estudantes, profissionais da área ambiental e qualquer pessoa interessada em geodiversidade e conservação do patrimônio natural amazônico.",
  },
  {
    title: "4. Haverá certificado de participação?",
    desc: "Sim, será fornecido certificado de participação para todos os participantes que comparecerem ao evento e participarem das atividades programadas.",
  },
  {
    title: "5. Qual é o local do evento?",
    desc: "O evento será realizado no Auditório da Prefeitura de Presidente Figueiredo, localizado no município de Presidente Figueiredo, Amazonas. Haverá transporte saindo de Manaus no dia 18/11 às 7h30.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">Perguntas Frequentes</h1>
        </div>

        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          {FAQS.map(({ title, desc }, key) => (
            <details key={key} className="border-b border-gray-200 py-3">
              <summary className="cursor-pointer list-none text-left font-medium text-gray-900">
                {title}
              </summary>
              <div className="mt-2 text-gray-500">{desc}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Faq;
