"use client";
import Header from "@/app/components/header";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  function handleClick() {
    router.push("/dashboard");
  }

  return (
    <div>
      <Header />
      <div className="m-auto mt-[-90px] flex h-screen items-center justify-center gap-14">
        <Image
          src="/detercontagem.svg"
          alt="404"
          width={488}
          height={570}
          quality={100}
        />
        <div className="flex w-[345px] flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-8xl font-bold text-[#E6DD06]">432...</h2>
            <span className="text-3xl font-bold text-[#FFFFFF]">
              Espere, detenham a contagem!
            </span>
          </div>
          <div>
            <p className="text-xl text-[#00FF4C]">
              * PICA-PAU APARECE E AVISA:
            </p>
            <p className="mt-6 text-lg text-[#FFFFFF]">
              A página que você solicitou ainda não está finalizada. Lembre-se:
              esta é uma versão beta e logo ela estará online.
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
  );
}
