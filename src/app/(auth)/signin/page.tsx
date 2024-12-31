import FooterLogin from "@/app/components/signin/footer-login";
import FormLogin from "@/app/components/signin/form-login";
import Redirect from "@/app/lib/redirect";
import Image from "next/image";

export default function Login() {
  return (
    <div className="relative h-screen w-screen bg-[url('/background.svg')] bg-cover bg-center bg-no-repeat">
      <div>
        <div className="flex items-center justify-between">
          <Redirect href="/">
            <Image
              src="/logo-low-racing.svg"
              alt="Logo LowRacing"
              width={150}
              height={150}
              quality={100}
              className="absolute top-5 hidden lg:left-5 lg:flex"
            />
          </Redirect>
          <Image
            src="/coroa.svg"
            alt="Logo LowRacing"
            width={150}
            height={150}
            quality={100}
            className="absolute right-0 top-0 lg:right-5"
          />
        </div>
        <Image
          src="/raio.svg"
          alt="Logo LowRacing"
          width={150}
          height={150}
          quality={100}
          className="absolute -bottom-20 size-24 lg:size-40 left-0 mt-5 lg:bottom-20"
        />
      </div>
      <div className="mx-5 mt-40 flex flex-col items-center justify-center gap-5">
        <FormLogin />
        <FooterLogin />
      </div>
    </div>
  );
}
