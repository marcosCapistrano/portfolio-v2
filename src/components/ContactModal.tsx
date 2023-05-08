'use client'
import Link from "next/link";
import { useState } from "react";

interface ContactModalProps {
    open: boolean;
    setOpen: (arg: boolean) => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ open, setOpen }) => {
    return (
        <dialog open={open} className="fixed top-0 left-0 w-screen h-screen bg-gray-600/70">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md">
                <p className="fs300 text-gray-600">Meus Contatos</p>
                <div className="my-4">
                    <div className="mb-2">
                        <span className="font-bold fs400">LinkedIn</span>
                        <Link className="block" href="https://www.linkedin.com/in/marcos-capistrano-7221a6117/">https://www.linkedin.com/in/marcos-capistrano-7221a6117/</Link>
                    </div>

                    <div className="mb-2">
                        <span className="font-bold fs400">Email</span>
                        <span className="block">mcapistrano50@gmail.com</span>
                    </div>
                </div>
                <button onClick={() => setOpen(false)} className="rounded-md bg-color1 text-white px-4 py-2">Fechar</button>
            </div>
        </dialog>
    );
}

export default ContactModal;