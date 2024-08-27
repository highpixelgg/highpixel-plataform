import Assets from "@/app/assets/images";
import FooterLogin from "@/app/components/footer-login";
import FormLogin from "@/app/components/form-login";

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
