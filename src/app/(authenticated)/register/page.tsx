import Assets from "@/app/_assets/images";
import FormRegister from "@/app/_components/form-register";

export default function Register() {
  return (
    <div className="relative h-screen w-screen bg-image-bg bg-cover bg-center bg-no-repeat">
      <Assets />
      <FormRegister />
    </div>
  );
}
