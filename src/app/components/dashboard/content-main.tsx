"use client";

import { Header } from "@/app/components/ui/header";
import Image from "next/image";

export default function ContentMain() {
  return (
    <div className="relative min-h-screen w-screen overflow-hidden bg-[url('/bg.svg')] bg-cover bg-center bg-no-repeat">
      <Header />
      <main className="relative mx-auto h-[calc(100vh-64px)] px-8">
        <div className="flex h-full items-center justify-between">
          <div className="fixed bottom-0 left-0 hidden lg:flex flex-col items-center space-x-36">
            <div className="origin-left -rotate-90 transform whitespace-nowrap font-scribble text-6xl text-[#b3b3b3]/20">
              <h3 className="text-nowrap">
                EM BREVE LOW RACING EM BREVE LOW RACING
              </h3>
            </div>
            <div className="origin-left -rotate-90 transform whitespace-nowrap font-scribble text-6xl text-[#b3b3b3]/20">
              <h3 className="text-nowrap">
                LOW RACING EM BREVE LOW RACING EM BREVE
              </h3>
            </div>
          </div>
          <div className="relative z-10 mx-auto max-w-4xl">
            <h1 className="font-krona text-4xl text-center lg:text-start font-normal text-white lg:text-6xl">
              BEM VINDO AO
              <span className="block text-green-500 text-nowrap">LOW RACING</span>
            </h1>
            <p className="mb-8 mt-5 lg:w-3/4 text-gray-400">
              Low Racing é um jogo de corrida para computadores, que tenta
              atingir o maior público possível e apresenta características
              únicas. Somos todos jogadores, e por isso conhecemos as
              necessidades e como executá-las! Garantimos dedicação e cuidado
              para transformar LowRacing em uma experiência única.
            </p>
            <div className="flex gap-4">
              <button className="rounded-lg bg-[#40D040] px-6 py-3 font-medium text-black transition hover:bg-green-600">
                Download Launcher
              </button>
              <button className="rounded-lg border border-white bg-transparent px-6 py-3 font-medium text-white transition hover:bg-white/10">
                Entrar no Discord
              </button>
            </div>
          </div>
          <div className="absolute -top-20 right-0 lg:block">
            <Image
              src="/faixas.svg"
              alt="faixas"
              width={900}
              height={357}
              className="object-contain"
              quality={100}
              priority
            />
          </div>
          <div className="absolute -bottom-10 right-0 hidden lg:block lg:h-[800px] lg:w-[600px]">
            <Image
              src="/person.svg"
              alt="character"
              width={600}
              height={800}
              className="h-full w-full object-contain object-bottom"
              quality={100}
              priority
            />
          </div>
        </div>
      </main>
      <div className="absolute bottom-0 left-0 h-3 w-full bg-gradient-to-r from-[#09DD09] to-[#E6DD06]"></div>
    </div>
  );
}
