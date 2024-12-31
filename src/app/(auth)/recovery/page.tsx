import FormRecoverPassword from "@/app/components/recovery/form-recorver-password";
import Redirect from "@/app/lib/redirect";
import Image from "next/image";

export default function RecoverPassword() {
  return (
    <div className="relative h-screen w-screen bg-[url('/background.svg')] bg-cover bg-center bg-no-repeat">
      <div>
        <div className="items-center justify-between">
          <Redirect href="/">
            <Image
              src="/logo-low-racing.svg"
              alt="Logo LowRacing"
              width={150}
              height={150}
              quality={100}
              className="absolute left-5 top-5 hidden lg:flex size-24 lg:size-25"
            />
          </Redirect>
          <Image
            src="/coroa.svg"
            alt="Logo LowRacing"
            width={170}
            height={170}
            quality={100}
            className="absolute right-0 top-0 size-24 lg:size-25"
          />
        </div>
        <Image
          src="/raio.svg"
          alt="Logo LowRacing"
          width={170}
          height={170}
          quality={100}
          className="absolute bottom-20 left-0 size-24 lg:size-25"
        />
      </div>
      <div className="flex items-center justify-center">
        <FormRecoverPassword />
      </div>
    </div>
  );
}
