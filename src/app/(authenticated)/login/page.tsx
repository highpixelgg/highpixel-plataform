import FormLogin from "@/app/_components/form-login";
import FooterLogin from "@/app/_components/footer-login";
import Assets from "@/app/_assets/images";
import Image from "next/image";

export default function Login() {
  return (
    <div className="relative min-h-screen w-full bg-black">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/background.svg"
          alt="Background"
          fill
          className="object-cover opacity-60"
          priority
        />
      </div>

      {/* Assets no topo */}
      <div className="relative z-10">
        <Assets />
      </div>

      {/* Content */}
      <div className="flex min-h-screen flex-col items-center justify-between px-4 py-8">
        <div className="z-10 w-full">
          <FormLogin />
        </div>
        
        <div className="z-10 w-full">
          <FooterLogin />
        </div>
      </div>
    </div>
  );
}
