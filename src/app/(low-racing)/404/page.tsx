"use client";
import Button from "@/app/components/button";
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
      <div className="m-auto mt-[-90px] flex h-screen items-center justify-center gap-10">
        <Image
          src="/detercontagem.svg"
          alt="404"
          width={400}
          height={400}
          quality={100}
        />
        <div className="flex w-[400px] flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-5xl font-bold text-[#E6DD06]">432...</h2>
            <span className="text-2xl font-bold">
              Espere, detenham a contagem!
            </span>
          </div>
          <div>
            <p className="text-[#00FF4C]">PICA-PAU APARECE E AVISA:</p>
            <span>
              A página que você solicitou ainda não está finalizada. Lembre-se:
              esta é uma versão beta e logo ela estará online.
            </span>
          </div>
          <Button onClick={handleClick}>Voltar a Home</Button>
        </div>
      </div>
    </div>
  );
}
