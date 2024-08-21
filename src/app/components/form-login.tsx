"use client";
import { useRouter } from "next/navigation";
import Button from "./button";
import { Input } from "./input";
import Redirect from "./redirect";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const schema = z.object({
  email: z.string().email({ message: "E-mail inválido" }),
  password: z
    .string()
    .min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
});

export default function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const router = useRouter();

  function handleLogin() {
    router.push("/dashboard");
  }
  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="m-auto w-[420px] space-y-12"
    >
      <h1 className="text-4xl font-bold">Sign in to Low Racing</h1>

      <div className="flex flex-col gap-3">
        <Input {...register("email")} type="email" placeholder="Seu e-mail" />
        {errors.email?.message && (
          <p className="text-red-500">{String(errors.email.message)}</p>
        )}

        <Input
          {...register("password")}
          type="password"
          placeholder="Sua senha"
        />
        {errors.password?.message && (
          <p className="text-red-500">{String(errors.password.message)}</p>
        )}
        <div className="space-x-1">
          <span>Esqueci</span>
          <Redirect href="/recover-password" className="text-[#E6DD06]">
            minha senha
          </Redirect>
        </div>

        <Button>Entrar</Button>

        <div className="mb-6 space-x-1 text-center">
          <span>Não tem uma conta ainda? </span>
          <Redirect href="/register" className="text-[#E6DD06]">
            Registre aqui!
          </Redirect>
        </div>

        <div className="flex items-center justify-center gap-4">
          <span>Ou continue com: </span>
          <div className="flex items-center gap-2" title="Em breve">
            <Image
              src="/google.svg"
              alt="Logo LowRacing"
              width={30}
              height={30}
              quality={100}
            />
            Google
          </div>
        </div>
      </div>
    </form>
  );
}
