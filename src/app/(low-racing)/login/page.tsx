import Assets from "@/app/assets/images";
import FormLogin from "@/app/components/form-login";

export default function Login() {
  return (
    <div className="relative h-screen w-screen bg-image-bg bg-cover bg-center bg-no-repeat">
      <Assets />
      <FormLogin />
    </div>
  );
}
