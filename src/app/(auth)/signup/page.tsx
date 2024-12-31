import FooterLogin from "@/app/components/signin/footer-login";
import FormRegister from "@/app/components/signup/form-register";
import Redirect from "@/app/lib/redirect";
import Image from "next/image";

export default function Register() {
  return (
    <div className="relative h-screen w-screen bg-[url('/background.svg')] bg-cover bg-center bg-no-repeat text-white">
      <div className="relative z-10 flex items-center justify-between">
        <Redirect href="/">
          <Image
            src="/logo-low-racing.svg"
            alt="Logo LowRacing"
            width={200}
            height={200}
            quality={100}
            className="absolute hidden top-5 lg:left-5 lg:flex"
          />
        </Redirect>
        <Image
          src="/coroa.svg"
          alt="Coroa"
          width={170}
          height={170}
          quality={100}
          className="absolute right-0 top-0 lg:right-5 size-24 lg:size-25"
        />  
      </div>
      <div className="relative z-10 mx-5 mt-20 flex flex-col items-center justify-center gap-5">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold">Criar nova conta</h1>
            <p className="mt-2 text-zinc-400">
              Preencha os dados abaixo para começar
            </p>
          </div>
          <FormRegister />
        </div>
        <FooterLogin />
      </div>
    </div>
  );
}
