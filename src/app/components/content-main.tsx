"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import Header from "./header";

export default function ContentMain() {
  const { username } = useParams();
  return (
    <div className="h-screen w-screen overflow-hidden bg-[url('/bg.svg')] bg-cover bg-center bg-no-repeat">
      <Header background={false} username={username as string} />
      <main className="relative z-10 mx-auto px-8 pb-16 pt-24">
        <div className="flex items-center justify-between">
          <div className="absolute bottom-0 right-1/4 top-0 mr-96 block h-full">
            <div className="h-full">
              <div className="-rotate-90 transform space-y-5 whitespace-nowrap text-nowrap font-scribble text-6xl text-[#b3b3b3]/20">
                <h3 className="text-nowrap">
                  LOW RACING EM BREVE LOW RACING EM BREVE LOW RACING
                </h3>
                <h3 className="text-nowrap">
                  EM BREVE LOW RACING EM BREVE LOW RACING EM BREVE
                </h3>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-2xl">
            <h1 className="font-krona text-6xl font-normal text-white">
              BEM VINDO AO
              <span className="block text-green-500">LOW RACING</span>
            </h1>
            <p className="mb-8 mt-2 text-gray-400">
              Low Racing é um jogo de corrida para computadores, que tenta
              atingir o maior público possível e apresenta características
              únicas. Somos todos jogadores, e por isso conhecemos as
              necessidades e como executá-las! Garantimos dedicação e cuidado
              para transformar LowRacing em uma experiência única.
            </p>
            <div className="flex gap-4">
              <button className="cursor-pointer rounded-md bg-[#40D040] px-6 py-3 text-black transition hover:bg-green-600">
                Download Launcher
              </button>
              <button className="cursor-pointer rounded-md border border-white bg-transparent px-6 py-3 transition hover:bg-white/10">
                Entrar no Discord
              </button>
            </div>
          </div>
          <div className="pointer-events-none absolute -top-20 ml-10 w-full">
            <Image
              src="/faixas.svg"
              alt="faixas"
              width={900}
              height={357}
              className="absolute left-2/4"
              quality={100}
            />
          </div>
          <div className="pointer-events-none relative h-[777px] w-auto">
            <img
              src="/person.svg"
              width={768}
              height={800}
              alt="Character"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#09DD09] to-[#E6DD06] h-2 w-full"></div>
      </main>
    </div>
  );
}
