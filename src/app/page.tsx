import Image from "next/image";
import Showcase from "@/components/Showcase";

export default function Home() {
  return (
    <>
      <header id="top" className='container mt-16 lg:grid grid-cols-2 gap-16'>

        <div className="col-span-1">
          <h1>Olá, me chamo <span className='block fs900 font-bold text-color1'>Marcos<br /> Capistrano</span></h1>
          <div className='mt-12 fs400 '>
            <p className="max-w-2xl">Especializado em desenvolvimento web React/NodeJS. Atuando profissionalmente há 5 anos em startups em ambientes competitivos e ágeis, transformando idéias em realidade.</p>
            <ul className='mt-4 list-disc list-inside marker:text-color1 max-w-3xl'>
              <li>Soluções personalizadas adaptadas às necessidades específicas de negócios.</li>
              <li>Desenvolvimento de aplicações web complexas.</li>
              <li>Diversas linguagens de programações e estruturas de projeto.</li>
            </ul>
          </div>

          <div className='flex gap-8 mt-8'>
            <a href="" className='rounded-md text-center md:text-left font-bold text-white bg-color1 py-4 px-8 transition duration-150 hover:bg-blue-500'>Entre em Contato</a>
            <a href="" className='rounded-md text-center md:text-left font-bold py-4 px-8 border-black border-2 transition duration-150 hover:border-color1 hover:text-color1'>Saiba Mais</a>
          </div>
        </div>

        <div className="col-span-1 lg:grid grid-cols-1 hidden lg:visible">
          <Image src="/images/pfp.jpeg" alt="Marcos Capistrano" width={1200} height={1600} className="h-full rounded-full"/>
        </div>
      </header>

      <Showcase />
    </>
  )
}
