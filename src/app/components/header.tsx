"use client";

import { useRouter } from "next/navigation";
import { Bell, Search } from "lucide-react";
import Image from "next/image";
import Redirect from "./redirect";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";

interface User {
  id: string;
  fullName: string;
  username: string;
  roles: string[];
  createdAt: string;
}

type HeaderProps = {
  username: string;
  background: boolean;
};
const home = "/";

export default function Header({ background, username }: HeaderProps) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null); // Inicializa com `null` para representar estado de carregamento
  const [loading, setLoading] = useState(true); // Estado de carregamento

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`http://localhost:10000/user/${username}`);

        if (!response.ok) {
          throw new Error("Erro ao buscar dados do usuário");
        }

        const data = await response.json();
        console.log(data);
        setUser(data);
      } catch (error) {
        console.error("Erro na requisição:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [username]);

  if (loading) {
    return (
      <div className="mt-96 flex items-center justify-center">Carregando</div>
    );
  }

  return (
    <div
      className={`font-poppins flex items-center justify-between px-10 py-4 text-zinc-300 ${
        background
          ? "border-b-[1px] border-b-[#CED4D9]/10 bg-[#1E1E1E]"
          : "border-none bg-none"
      }`}
    >
      <div>
        <Redirect href={home}>
          <Image
            src="/logo-low-racing.svg"
            alt="Logo"
            width={100}
            height={132}
            quality={100}
          />
        </Redirect>
      </div>
      <div className="flex items-center gap-4">
        <Redirect href={home} className="hover:text-zinc-50">
          Home
        </Redirect>
        <Redirect href={home} className="hover:text-zinc-50">
          Discover
        </Redirect>
        <Redirect href={home} className="hover:text-zinc-50">
          Marketplace
        </Redirect>
        <Redirect href={home} className="hover:text-zinc-50">
          Support
        </Redirect>
        <Redirect href={home} className="hover:text-zinc-50">
          Premium
        </Redirect>
      </div>
      <div className="flex items-center gap-4">
        <Search className="size-5" />
        <Image
          src="/money.svg"
          alt="Search"
          width={20}
          height={20}
          quality={100}
        />
        <Bell className="size-5" />
        <span>Júlio Developer</span>
        <Avatar>
          <AvatarImage src="/user.svg" alt="@shadcn" />
          <AvatarFallback>user</AvatarFallback>
        </Avatar>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Image
              src="/arrow.svg"
              alt="Arrow"
              width={25}
              height={25}
              quality={100}
              className="cursor-pointer"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-6 w-44 border-neutral-700 bg-[#1B1B1B] text-neutral-400">
            <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-neutral-700" />
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => router.push("/profile")}>
                Perfil
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/settings")}>
                Configurações
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push("/logout")}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
