"use client";

import { IconButton } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import { PlayIcon } from "@heroicons/react/24/solid";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/event.jpeg')] bg-cover bg-no-repeat">
    <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
    <div className="grid min-h-screen px-8">
      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
        <Typography variant="h3" color="white" className="mb-2">
          18-19 Novembro @ Presidente Figueiredo
        </Typography>
        <Typography variant="h1" color="white" className="lg:max-w-3xl">
          Diálogos Amazônicos: Plano de Ação da Geodiversidade
        </Typography>
        <Typography
          variant="lead"
          color="white"
          className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl"
        >
          Evento pioneiro no Brasil voltado à integração da conservação do patrimônio natural, 
          desenvolvimento sustentável e saberes tradicionais das comunidades locais.
        </Typography>
        <div className="flex items-center gap-4">
          <IconButton className="rounded-full bg-white p-6">
            <PlayIcon className="h-4 w-4 text-gray-900" />
          </IconButton>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Hero;
