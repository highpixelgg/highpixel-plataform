import Assets from "@/app/_assets/images";
import FooterLogin from "@/app/_components/footer-login";
import FormLogin from "@/app/_components/form-login";

export default function Login() {
  return (
    <div className="bg-image-bg relative h-screen w-screen bg-cover bg-center bg-no-repeat ">
      <Assets />
      <div className="flex flex-col gap-60">
        <FormLogin />
        <FooterLogin />
      </div>
    </div>
  );
}
