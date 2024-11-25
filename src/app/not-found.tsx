"use client";

import Header from "@/app/components/ui/header";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  function handleClick() {
    router.push("/");
  }

  return (
    <div>
      <Header background={true} />
      <div className="absolute mt-24 flex h-full w-full items-center justify-center lg:mt-0">
        <div className="mx-5 flex flex-col items-center justify-center gap-14 px-6 lg:mx-auto lg:mt-0 lg:flex-row">
          <Image
            src="/detercontagem.svg"
            alt="404"
            width={400}
            height={550}
            quality={100}
            className="-z-10 h-auto"
          />
          <div className="flex w-full flex-col gap-10 lg:w-[345px]">
            <div className="flex flex-col gap-2">
              <h2 className="-z-10 text-8xl font-bold text-[#E6DD06]">
                432...
              </h2>
              <span className="text-3xl font-bold text-[#FFFFFF]">
                Espere, detenham a contagem!
              </span>
            </div>
            <div>
              <p className="text-xl text-[#00FF4C]">
                * PICA-PAU APARECE E AVISA:
              </p>
              <p className="mt-6 text-lg text-[#FFFFFF]">
                A página que você solicitou ainda não está finalizada.
                Lembre-se: esta é uma versão beta e logo ela estará online.
              </p>
            </div>
            <button
              onClick={handleClick}
              className="h-16 w-48 text-nowrap rounded-[10px] bg-gradient-to-r from-[#40D040] to-[#004B00] px-4 py-3 text-lg font-medium uppercase text-[#FFFFFF] transition-all hover:brightness-75"
            >
              Voltar a Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
