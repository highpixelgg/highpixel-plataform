import FooterLogin from "@/app/components/login/footer-login";
import FormLogin from "@/app/components/login/form-login";
import Image from "next/image";
import Redirect from "@/app/lib/redirect";

export default function Login() {
  return (
    <div className="bg-image-bg relative h-screen w-screen bg-cover bg-center bg-no-repeat">
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
          className="absolute bottom-0 mt-5 left-0 lg:bottom-20"
        />
      </div>
      <div className="mx-5 mt-52 flex flex-col items-center justify-center gap-5">
        <FormLogin />
        <FooterLogin />
      </div>
    </div>
  );
}
