'use client'

import { useRouter } from "next/navigation";
import React, { useState } from 'react'
import Image from 'next/image';
import NavbarHome from "../navbar";

const AboutUs: React.FC = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false); 
    
    return (
        <div className="pt-20" >
            <NavbarHome />
            <main className='min-h-screen grid grid-cols-1 lg:grid-cols-1 p-10 lg:p-8'>
            <section className='lg:flex h-full flex-col items-center justify-center gap-y-5 bg-primary rounded-2xl'>
                <div className="pt-24 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <section className="text-center">
                            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
                                Sobre Nosotros
                            </h1>
                            <p className="mt-4 text-xl text-white">
                                Conoce al equipo detrás de nuestra librería digital y nuestra misión para ofrecerte la mejor experiencia de lectura.
                            </p>
                        </section> 
                        <section className="mt-12">
                            <h2 className="text-3xl font-semibold text-white text-center">
                                Nuestro Equipo
                            </h2>
                            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
                                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                                    <Image 
                                        src='/participante4.png' 
                                        alt='par4' 
                                        width={800}
                                        height={800}
                                        className="object-cover rounded-lg mb-6 flex items-center relative"
                                    />
                                    <h3 className="mt-4 text-xl font-bold text-gray-800">Michel Emanuel Lopez Franco</h3>
                                    <p className="text-gray-600">Asesor</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                                    <Image 
                                        src='/participante1.png' 
                                        alt='par1' 
                                        width={800}
                                        height={800}
                                        className="object-cover rounded-lg mb-6 flex items-center relative"
                                    />
                                    <h3 className="mt-4 text-xl font-bold text-gray-800">Jose Emmanuel Vazquez Haro</h3>
                                    <p className="text-gray-600">Intgrante 1</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                                    <Image 
                                        src='/participante3.png' 
                                        alt='par3' 
                                        width={800}
                                        height={800}
                                        className="object-cover rounded-lg mb-6 flex items-center relative"
                                    />
                                    <h3 className="mt-4 text-xl font-bold text-gray-800">Juan Carlos Portugal Pacheco</h3>
                                    <p className="text-gray-600">Integrante 2</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                                    <Image 
                                        src='/participante2.png' 
                                        alt='par2' 
                                        width={800}
                                        height={800}
                                        className="object-cover rounded-lg mb-6 flex items-center relative"
                                    />
                                    <h3 className="mt-4 text-xl font-bold text-gray-800">Christopher Bernabe Perez Elvira</h3>
                                    <p className="text-gray-600">Integrante 3</p>
                                </div>
                            </div>
                        </section>
                        <section className="mt-12 text-center m-5">
                            <h2 className="text-3xl font-semibold text-white">
                                Ponte en Contacto
                            </h2>
                            <p className="mt-4 text-lg text-white">
                                ¿Tienes preguntas o deseas colaborar con nosotros? No dudes en contactarnos.
                            </p>
                            <li className="mt-6 inline-block px-6 py-5 text-white bg-secondary rounded-lg hover:bg-gray-500 cursor-pointer" onClick={() => {setIsOpen(false); router.push('/home/contact');}}>
                                <a>Enviar correo</a>
                                <span className="absolute left-0 bottom-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                            </li>  
                        </section>
                    </div>
                </div>
            </section>
        </main>
    </div>
    );
}

export default AboutUs;