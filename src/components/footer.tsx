import React from "react";

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Programação", href: "#programacao" },
  { label: "Localização", href: "#localizacao" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        <div className="flex !w-full py-10 mb-5 md:mb-20 flex-col justify-center !items-center bg-gray-900 max-w-6xl mx-auto rounded-2xl p-5 ">
          <h3 className="text-2xl md:text-3xl text-center font-bold text-white">
            Participe do Evento Pioneiro!
          </h3>
          <p className=" md:w-7/12 text-center my-3 !text-base text-white">
            Primeiro Plano de Ação da Geodiversidade do Brasil - Contribua para a candidatura do Geoparque Cachoeiras do Amazonas à UNESCO.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center !justify-between">
          <a href="#" className="text-gray-900 text-lg font-semibold">
            Diálogos Amazônicos
          </a>
          <ul className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
            {LINKS.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="font-normal !text-gray-700 hover:!text-gray-900 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex w-fit justify-center gap-6 text-gray-700">
            <div className="text-sm">
              <div className="font-semibold text-gray-900">Contato</div>
              <div>Email: humbertoclima@ufam.edu.br</div>
              <div>Telefone: (92) 98120-4343</div>
            </div>
          </div>
        </div>
        <p className="text-center mt-12 font-normal !text-gray-700">
          &copy; {CURRENT_YEAR} Diálogos Amazônicos - Plano de Ação da Geodiversidade. 
          Realizado pelo Departamento de Geociências (DEGEO) da UFAM.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
