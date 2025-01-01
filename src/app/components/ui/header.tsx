"use client";

import { user } from "@/data/user";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Image from "next/image";
import LogoLR from "../../../../public/logo-low-racing.svg";
import { AvatarStatus } from "./avatar";

export const Logo = () => {
  return <Image src={LogoLR} alt="logo" className="h-20 w-20" />;
};

export const Header = () => {
  return (
    <Navbar>
      <NavbarBrand>
        <Logo />
      </NavbarBrand>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/marketplace">
            Discover
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link aria-current="page" color="success" href="/home">
            Início
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/discover">
            Marketplace
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Button
              className="h-full rounded-full bg-transparent"
              disableRipple
            >
              <AvatarStatus src={user.avatar} color="success" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" href="/profile">
              Perfil
            </DropdownItem>
            <DropdownItem key="settings" href="/settings">
              Configurações
            </DropdownItem>
            <DropdownItem key="logout" href="/logout" color="danger">
              Sair
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};
