import Assets from "@/app/assets/images";
import FormRegister from "@/app/components/form-register";

export default function Register() {
  return (
    <div className="relative h-screen w-screen bg-image-bg bg-cover bg-center bg-no-repeat">
      <Assets />
      <FormRegister />
    </div>
  );
}
