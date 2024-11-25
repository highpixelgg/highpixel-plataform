"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
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
      className="flex h-screen w-full flex-col items-center justify-center space-y-12 text-center"
    >
      <h1 className="text-4xl font-bold text-white">Recuperar Conta</h1>

      <div className="flex w-full flex-col items-center justify-center gap-3">
        <Input placeholder="Seu e-mail" border />
      </div>

      <Button label="Recuperar senha" size={1} />
    </form>
  );
}
