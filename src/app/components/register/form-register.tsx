"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const schema = z.object({
  name: z.string().min(3, { message: "Nome deve ter no mínimo 3 caracteres" }),
  username: z
    .string()
    .min(3, { message: "Username deve ter no mínimo 3 caracteres" }),
  email: z.string().email({ message: "E-mail inválido" }),
  password: z
    .string()
    .min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
});

export default function FormRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const router = useRouter();

  function handleRegister() {
    router.push("/");
  }

  return (
    <form
      onSubmit={handleSubmit(handleRegister)}
      className="m-auto w-[420px] space-y-12"
    >
      <div className="flex flex-col gap-3">
        <Input placeholder="Nome completo" />

        <Input placeholder="Username" />

        <Input placeholder="Seu e-mail" />

        <Input placeholder="Sua senha" />
      </div>

      <Button label="Cadastrar" size={1} />
    </form>
  );
}
