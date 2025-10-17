"use client";

import { PlayIcon } from "@heroicons/react/24/solid";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/event.jpeg')] bg-cover bg-no-repeat">
    <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
    <div className="grid min-h-screen px-8">
      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
        <h3 className="mb-2 text-white text-xl">
          18-19 Novembro @ Presidente Figueiredo
        </h3>
        <h1 className="lg:max-w-3xl text-white text-4xl md:text-5xl font-bold">
          Diálogos Amazônicos: Plano de Ação da Geodiversidade
        </h1>
        <p className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl text-white text-lg">
          Evento pioneiro no Brasil voltado à integração da conservação do patrimônio natural, 
          desenvolvimento sustentável e saberes tradicionais das comunidades locais.
        </p>
        <div className="flex items-center gap-4">
          <button className="rounded-full bg-white p-6 hover:bg-gray-100 transition-colors">
            <PlayIcon className="h-4 w-4 text-gray-900" />
          </button>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Hero;
