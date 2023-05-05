import Image from "next/image";
import { HomeIcon, Bars3Icon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <>
      <header id="top" className='container mt-16'>
        <h1>Olá, me chamo <span className='block fs900 font-bold text-color1'>Marcos<br /> Capistrano</span></h1>
        <div className='mt-12 fs400 max-w-2xl'>
          <p>Especializado em desenvolvimento web React/NodeJS. Atuando profissionalmente há 5 anos em startups em ambientes competitivos e ágeis, transformando idéias em realidade.</p>
          <ul className='mt-4 list-disc marker:text-color1'>
            <li>Soluções personalizadas adaptadas às necessidades específicas de negócios.</li>
            <li>Desenvolvimento de aplicações web complexas.</li>
            <li>Diversas linguagens de programações e estruturas de projeto.</li>
          </ul>
        </div>

        <div className='flex gap-8 mt-8'>
          <a href="" className='rounded-md font-bold text-white bg-color1 py-4 px-8 transition duration-150 hover:bg-blue-500'>Entre em Contato</a>
          <a href="" className='rounded-md font-bold py-4 px-8 border-black border-2 transition duration-150 hover:border-color1 hover:text-color1'>Saiba Mais</a>
        </div>

      </header>

      <nav className='bg-color1 text-white font-bold mt-16 sticky top-0'>
        <div className="container flex py-4">
          <a href="#top">
            <HomeIcon className="w-12 h-12" />
          </a>
          <div className="flex ml-auto items-center gap-8">
            <a href="" className="fs500">Experiência</a>
            <a href="" className="fs500">Projetos</a>
          </div>
        </div>
      </nav>

      <div className="container flex flex-col items-center text-justify md:text-center lg:grid lg:grid-cols-12 lg:text-left py-8 gap-8 ">
        <div className="col-span-4">
          <Image src="/images/soil.jpg" className="rounded-md" width={600} height={300} alt="Soil Tecnologia" />
        </div>

        <div className="col-span-8">
          <h2 className="fs500 font-light leading-tight">Desenvolvedor <span className="block fs700 font-bold leading-none">JavaScript Full Stack</span></h2>
          <h3 className="mt-4 text-gray-500">Soil Tecnologia para Irrigação | 2019 - 2022</h3>

          <p className="mt-6">Implementação de sistema de acionamento/coleta de dados em campo, completo com dashboard em ReactJS. Arquitetura mista para disponibilização de uso via rede local ou à distancia.</p>
          <ul className="mt-4 list-disc list-inside">
            <li>Servidor local em NodeJS comunicando com dispositivos em campo via TCP/IP</li>
            <li>Replicação dos dados locais para nuvem via AWS IoT Core</li>
            <li>Recepção de comandos à distancia utilizando AWS IoT Core</li>
            <li>Dashboard ReactJS para visualização dos dados</li>
          </ul>
        </div>

        <div className="col-span-4">
          <Image src="/images/ausyx.jpeg" className="rounded-md" width={600} height={300} alt="Ausyx" />
        </div>

        <div className="col-span-8">
          <h2 className="fs500 font-light leading-tight">Desenvolvedor <span className="block fs700 font-bold leading-none">Firmware ESP32</span></h2>
          <h3 className="mt-4 text-gray-500">Ausyx | 2022 - 2023</h3>

          <p className="mt-6">Implementação de diversos sistemas embarcados baseados em ESP32 para sensoriamento, acionamento, e coleta de dados.</p>
          <ul className="mt-4 list-disc list-inside">
            <li>Sensoriamento remoto em comunicação WiFi com central</li>
            <li>Acionamento baseado nos dados coletados</li>
            <li>Desenvolvimento de Interface de Usuário</li>
            <li>Coleta de dados on-premises utilizando SPIFFS</li>
          </ul>
        </div>
      </div>
    </>
  )
}
