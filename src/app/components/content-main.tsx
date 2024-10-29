"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import Header from "./header";

export default function ContentMain() {
  const { username } = useParams();
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[url('/bg.svg')] bg-cover bg-center bg-no-repeat">
      <Header background={false} username={username as string} />
      <div className="flex flex-row items-center justify-center">
        <div className="font-scribble flex -rotate-90 flex-col items-center justify-center gap-4 border border-lime-400 text-2xl text-[#989898]">
          <h3>LOW RACING EM BREVE LOW RACING EM BREVE LOW RACING</h3>
          <h3>EM BREVE LOW RACING EM BREVE LOW RACING EM BREVE </h3>
        </div>
        <div className="flex-col items-center justify-center border border-green-500">
          <h6 className="font-darker border-[#E6DD06] text-start mr-60 flex h-7 w-80 items-center justify-center rounded-lg border text-xl text-white">
            10 Pessoas estão conosco!
          </h6>
          <h1 className="border font-krona text-6xl font-normal text-white">
            BEM VINDO AO <br />
            <span className="gap-12 text-[#00FF4C]">LOW RACING</span>
          </h1>
          <p className="font-darker border font-bold text-gray-300">
            LowRacing é um jogo de corrida para computadores, que tenta atingir
            o maior público
            <br />
            possível e apresenta características únicas. Somos todos jogadores,
            e por isso
            <br />
            conhecemos as necessidades e como executá-las! Garantimos dedicação
            e cuidado
            <br />
            para transformar LowRacing em uma experiência única.
          </p>
          <div className="font-darker flex items-center justify-center gap-10 text-xl font-semibold">
            <button className="h-16 w-56 rounded-2xl bg-[#40D040] text-center text-black">
              Download Launcher
            </button>
            <button className="h-16 w-56 rounded-2xl border border-white text-center">
              Entrar Discord
            </button>
          </div>
        </div>
        <div className="h-screen w-screen flex-1 flex-col">
          <Image
            src="/faixas.svg"
            alt="faixas"
            width={905}
            height={357}
            className="absolute right-0 top-0"
            quality={100}
          />
          <Image
            src="/person.svg"
            alt="personagem"
            width={768}
            height={777}
            className="absolute right-48 top-40"
            quality={100}
          />
        </div>
        {/* barra gradiente */}
      </div>
    </div>
  );
}
