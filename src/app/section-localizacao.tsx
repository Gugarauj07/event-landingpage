"use client";

import React from "react";

export default function Localizacao() {
  return (
    <section id="localizacao" className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-blue-gray-900 mb-4">Localização</h2>
        <p className="mb-6 text-gray-600">
          Auditório da Prefeitura de Presidente Figueiredo, AM. Transporte saindo de Manaus em 18/11 às 7h30.
        </p>
        <div className="w-full overflow-hidden rounded-xl border border-gray-200 shadow-sm">
          <iframe
            title="Mapa - Prefeitura de Presidente Figueiredo"
            src="https://www.google.com/maps?q=Prefeitura%20de%20Presidente%20Figueiredo%20AM&output=embed"
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}


