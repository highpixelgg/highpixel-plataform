"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { user } from "@/data/user";
import { Bell, Menu, Search } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import LogoLR from "../../../../public/logo-low-racing.svg";
import Redirect from "../../lib/redirect";

type HeaderProps = {
  background: boolean;
};
const home = "/";

export default function Header({ background }: HeaderProps) {
  const router = useRouter();

  return (
    <div
      className={`fixed left-0 right-0 top-0 z-50 flex w-screen items-center justify-between overflow-hidden px-6 py-4 font-poppins text-zinc-300 ${
        background
          ? "border-b-[1px] border-b-[#CED4D9]/10 bg-[#151515]"
          : "border-none bg-none"
      }`}
    >
      <div>
        <Redirect href={"/dashboard"}>
          <Image
            src={LogoLR}
            alt="Logo"
            width={100}
            height={132}
            quality={100}
          />
        </Redirect>
      </div>

      <div className="hidden items-center gap-6 lg:flex">
        <Redirect href={"/home"} className="hover:text-zinc-50">
          Home
        </Redirect>
        <Redirect href={"/discover"} className="hover:text-zinc-50">
          Discover
        </Redirect>
        <Redirect href={"/marketplace"} className="hover:text-zinc-50">
          Marketplace
        </Redirect>
        <Redirect href={"/support"} className="hover:text-zinc-50">
          Support
        </Redirect>
        <Redirect href={"/premium"} className="hover:text-zinc-50">
          Premium
        </Redirect>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden items-center justify-center gap-4 lg:flex">
          <Search className="text-zinc-300" size={20} />
          <Image
            src="/money.svg"
            alt="Money"
            width={20}
            height={20}
            quality={100}
          />
          <Bell className="text-zinc-300" size={20} />
          <span>Júlio Developer</span>
          <Avatar>
            <AvatarImage src="https://i.postimg.cc/wjqdc3XL/user1.jpg" alt="user" />
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
                <DropdownMenuItem
                  onClick={() => router.push("/me/" + user.slug)}
                >
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

        <div className="flex flex-col items-center justify-center gap-4 lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-2">
                <Menu className="h-6 w-6 text-zinc-300" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-4 flex w-screen flex-col border-neutral-700 bg-[#1B1B1B] text-neutral-400">
              <DropdownMenuLabel>Low Racing</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-neutral-700" />
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={() => router.push("/dashboard")}>
                  Home
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push("/discover")}>
                  Discover
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push("/marketplace")}>
                  Marketplace
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push("/support")}>
                  Suport
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push("/premium")}>
                  Premium
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
