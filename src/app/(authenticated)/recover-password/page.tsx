import FormRecoverPassword from "@/app/components/recovery/form-recorver-password";
import Image from "next/image";
import Redirect from "@/app/lib/redirect";

export default function RecoverPassword() {
  return (
    <div className="bg-image-bg relative h-screen w-screen bg-cover bg-center bg-no-repeat">
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
      <FormRecoverPassword />
    </div>
  );
}
