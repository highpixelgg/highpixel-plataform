"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Redirect from "./redirect";
import { Input } from "./input";
import Image from "next/image";
import Button from "./button";
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
      className="m-auto w-full max-w-[420px] space-y-8"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">Bem-vindo de volta!</h1>
        <p className="mt-2 text-zinc-400">Entre com suas credenciais para acessar sua conta</p>
      </div>

      <div className="flex flex-col gap-4">
        <Input
          {...register("email")}
          type="email"
          placeholder="Seu e-mail"
          className={errors.email ? "border-red-500 focus:border-red-500" : "border-zinc-700"}
        />

        <Input
          {...register("password")}
          type="password"
          placeholder="Sua senha"
          className={errors.password ? "border-red-500 focus:border-red-500" : "border-zinc-700"}
        />

        <div className="space-x-1 text-zinc-400">
          <span>Esqueci</span>
          <Redirect href="/recover-password" className="text-[#E6DD06] hover:brightness-75 transition-all">
            minha senha
          </Redirect>
        </div>

        <Button className="w-full h-12 bg-gradient-to-r from-[#40D040] to-[#004B00] hover:brightness-75 transition-all rounded-md">
          Entrar
        </Button>

        <div className="space-x-1 text-center text-zinc-400">
          <span>Não tem uma conta ainda?</span>
          <Redirect href="/register" className="text-[#E6DD06] hover:brightness-75 transition-all">
            Registre aqui!
          </Redirect>
        </div>

        <div className="flex items-center justify-center gap-4 text-zinc-400">
          <span>Ou continue com:</span>
          <button 
            type="button"
            className="flex items-center gap-2 rounded-[10px] border border-zinc-700 px-4 py-2 hover:bg-zinc-800/50 transition-all" 
            title="Em breve"
          >
            <Image
              src="/google.svg"
              alt="Google"
              width={20}
              height={20}
              quality={100}
            />
            Google
          </button>
        </div>
      </div>
    </form>
  );
}
