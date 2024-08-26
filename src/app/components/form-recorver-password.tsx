"use client";
import { useRouter } from "next/navigation";
import Button from "./button";
import { Input } from "./input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const schema = z.object({
  email: z.string().email({ message: "E-mail inválido" }),
});

export default function FormRecoverPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const router = useRouter();

  function handleRecoverPassword() {
    router.push("/");
  }

  return (
    <form
      onSubmit={handleSubmit(handleRecoverPassword)}
      className="m-auto w-[420px] space-y-12 text-center"
    >
      <h1 className="text-4xl font-bold">Recuperar Conta</h1>

      <div className="flex flex-col gap-3">
        <Input {...register("email")} type="email" placeholder="Seu e-mail" />
        {errors.email?.message && (
          <p className="text-red-500">{String(errors.email.message)}</p>
        )}
      </div>

      <Button>Recuperar senha</Button>
    </form>
  );
}
