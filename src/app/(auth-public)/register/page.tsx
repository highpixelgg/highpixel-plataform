import FormRegister from "@/app/components/register/form-register";
import FooterLogin from "@/app/components/login/footer-login";
import Image from "next/image";
import Redirect from "@/app/lib/redirect";

export default function Register() {
  return (
    <div className="bg-image-bg relative h-screen w-screen bg-cover bg-center bg-no-repeat">
      {/* Background */}
      <div className="flex items-center justify-between">
        <Image
          src="/background.svg"
          alt="Background"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>
      {/* Assets no topo */}
      <div className="">
        <div>
          <div className="flex items-center justify-between">
            <Redirect href="/">
              <Image
                src="/logo-low-racing.svg"
                alt="Logo LowRacing"
                width={200}
                height={200}
                quality={100}
                className="absolute top-5 hidden lg:left-5 lg:flex"
              />
            </Redirect>
            <Image
              src="/coroa.svg"
              alt="Logo LowRacing"
              width={170}
              height={170}
              quality={100}
              className="absolute right-0 top-0 lg:right-5"
            />
          </div>
          <Image
            src="/raio.svg"
            alt="Logo LowRacing"
            width={170}
            height={170}
            quality={100}
            className="absolute bottom-0 left-0 mt-5 lg:bottom-20"
          />
        </div>
      </div>

      {/* Content */}
      <div className="mx-5 mt-52 flex flex-col items-center justify-center gap-5">
        <div className="z-10 w-full max-w-md">
          <div className="">
            <div className="mb-8 text-center">
              <h1 className="text-2xl font-bold text-white">
                Criar nova conta
              </h1>
              <p className="mt-2 text-zinc-400">
                Preencha os dados abaixo para começar
              </p>
            </div>
            <FormRegister />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <FooterLogin />
        </div>
      </div>
    </div>
  );
}
