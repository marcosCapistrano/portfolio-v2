import Image from "next/image";
import { ExperienceData } from "@/data/data";

function Experience({experience}: {experience: ExperienceData}) {
    const {titleSm, titleLg, timePeriod, description, list, image, imageAlt, link} = experience;
    return (
        <>
            <div className="col-span-4 h-full max-w-sm">
                <Image src={image} className="rounded-md h-full aspect-square" width={600} height={300} alt={imageAlt}  />
            </div>

            <div className="col-span-8 place-items-start">
                <h2 className="fs500 font-light leading-tight">{titleSm} <span className="block fs700 font-bold leading-none">{titleLg}</span></h2>
                <h3 className="mt-2 text-gray-500">{timePeriod}</h3>

                <p className="mt-6">{description}</p>
                {list && list.length > 0 && (
                <ul className="mt-4 list-disc list-inside">
                    {list.map((item, i) => (
                       <li key={i}>{item}</li> 
                    ))}
                </ul>
                )}
                {/* <a href={link} className='rounded-md block mt-4 mx-auto lg:mx-0 md:max-w-fit text-center md:text-left font-bold py-2 px-4 border-black border-2 transition duration-150 hover:border-color1 hover:text-color1'>Saiba Mais</a> */}
            </div>
        </>
    );
}

export default Experience;