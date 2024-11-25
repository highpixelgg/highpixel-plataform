import FooterLogin from "@/app/components/login/footer-login";
import FormLogin from "@/app/components/login/form-login";
import Image from "next/image";
import Redirect from "@/app/lib/redirect";

export default function Login() {
  return (
    <div className="bg-image-bg relative flex h-full w-full items-center justify-center bg-cover bg-center bg-no-repeat">
      <div>
        <div className="flex items-center justify-between">
          <Redirect href="/">
            <Image
              src="/logo-low-racing.svg"
              alt="Logo LowRacing"
              width={200}
              height={200}
              quality={100}
              className="absolute left-5 top-5"
            />
          </Redirect>
          <Image
            src="/coroa.svg"
            alt="Logo LowRacing"
            width={170}
            height={170}
            quality={100}
            className="absolute right-5 top-0"
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
      <div className="mt-52 flex flex-col items-center justify-center gap-60">
        <FormLogin />
        <FooterLogin />
      </div>
    </div>
  );
}
