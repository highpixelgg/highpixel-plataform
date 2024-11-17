import Assets from "@/app/_assets/images";
import FormRegister from "@/app/_components/form-register";
import FooterLogin from "@/app/_components/footer-login";
import Image from "next/image";

export default function Register() {
  return (
    <div className="relative min-h-screen w-full bg-black ">
      {/* Background */}
      <div className="absolute inset-0">
        <Image 
          src="/background.svg" 
          alt="Background" 
          fill 
          className="object-cover opacity-40"
          priority 
        />
      </div>

      {/* Assets no topo */}
      <div className="relative z-10">
        <Assets />
      </div>

      {/* Content */}
      <div className="flex min-h-screen flex-col items-center justify-between px-4 py-8">
        <div className="z-10 w-full max-w-md">
          <div className="p-8">
            <div className="mb-8 text-center">
              <h1 className="text-2xl font-bold text-white">Criar nova conta</h1>
              <p className="mt-2 text-zinc-400">
                Preencha os dados abaixo para começar
              </p>
            </div>
            
            <FormRegister />
          </div>
        </div>

        <div className="z-10 w-full">
          <FooterLogin />
        </div>
      </div>
    </div>
  );
}
