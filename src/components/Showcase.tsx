'use client'
import Image from "next/image";
import { HomeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Experience from "./Experience";
import Project from "./Project";
import { myExperience, myProjects } from "@/data/data";

enum Selection {
    EXPERIENCE = 1,
    PROJECTS
}

function Showcase({id} : {id: string}) {
    const [selected, setSelected] = useState(Selection.EXPERIENCE);

    return (
        <div id={id} className="min-h-screen">
            <nav className='bg-color1 text-white font-bold mt-16 sticky top-0'>
                <div className="container flex items-center">
                    <a href="#top">
                        <HomeIcon className="w-8 h-8" />
                    </a>
                    <div className="flex ml-auto items-center gap-8">
                        <button onClick={() => setSelected(Selection.EXPERIENCE)} className={`fs400 py-4 transition duration-300 ${selected === Selection.EXPERIENCE && 'border-b-4'}`}>Experiência</button>
                        <button onClick={() => setSelected(Selection.PROJECTS)} className={`fs400 py-4 transition duration-300 ${selected === Selection.PROJECTS && 'border-b-4'}`}>Projetos</button>
                    </div>
                </div>
            </nav>

            {selected === Selection.EXPERIENCE ? (
                <div className="container flex flex-col items-center text-justify md:text-center lg:grid lg:grid-cols-12 lg:text-left py-8 gap-8 ">
                    {myExperience && myExperience.length > 0 && (
                        myExperience.map((experience, i) => (
                            <Experience key={i} experience={experience} />
                        ))
                    )}
                    </div>
             ) : (
                <div className="container flex flex-col items-center text-justify md:text-center lg:grid lg:grid-cols-12 lg:text-left py-8 gap-8 ">
                    {myProjects && myProjects.length > 0 && (
                        myProjects.map((project, i) => (
                            <Project key={i} project={project} />
                        ))
                    )}
                    </div>
            )}
        </div>
    )
}

export default Showcase;