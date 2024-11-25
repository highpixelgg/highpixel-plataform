import FormRegister from "@/app/components/register/form-register";
import FooterLogin from "@/app/components/login/footer-login";
import Image from "next/image";
import Redirect from "@/app/lib/redirect";

export default function Register() {
  return (
    <div className="relative min-h-screen w-full bg-black">
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
        <div>
          <div className="flex items-center justify-between">
            <Redirect href="/">
              <Image
                src="/logo-low-racing.svg"
                alt="Logo LowRacing"
                width={300}
                height={300}
                quality={100}
                className="absolute left-0 top-0"
              />
            </Redirect>
            <Image
              src="/coroa.svg"
              alt="Logo LowRacing"
              width={170}
              height={170}
              quality={100}
              className="absolute right-0 top-0"
            />
          </div>
          <Image
            src="/raio.svg"
            alt="Logo LowRacing"
            width={170}
            height={170}
            quality={100}
            className="absolute bottom-20 left-0"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex min-h-screen flex-col items-center justify-between px-4 py-8">
        <div className="z-10 w-full max-w-md">
          <div className="p-8">
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

        <div className="z-10 w-full">
          <FooterLogin />
        </div>
      </div>
    </div>
  );
}
