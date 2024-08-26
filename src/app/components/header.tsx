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

const home = "/";

export default function Header() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between border-b-[1px] border-[#CED4D9]/10 bg-[#1E1E1E] px-10 py-4 text-zinc-300">
      <div>
        <Redirect href={home}>
          <Image
            src="/logo-low-racing.png"
            alt="Search"
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
