import { Bell, Search } from "lucide-react";
import Image from "next/image";
import Redirect from "./redirect";

export default function Header() {
  return (
    <div className="flex items-center justify-between border-b-[1px] border-[#CED4D9]/10 bg-[#1E1E1E] px-10 py-4 text-zinc-300">
      <div>
        <Image
          src="/logo-low-racing.png"
          alt="Search"
          width={100}
          height={132}
          quality={100}
        />
      </div>
      <div className="flex items-center gap-4">
        <Redirect href="/dashboard" className="hover:text-zinc-50">
          Home
        </Redirect>
        <Redirect href="/404" className="hover:text-zinc-50">
          Discover
        </Redirect>
        <Redirect href="/404" className="hover:text-zinc-50">
          Marketplace
        </Redirect>
        <Redirect href="/404" className="hover:text-zinc-50">
          Support
        </Redirect>
        <Redirect href="/404" className="hover:text-zinc-50">
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
        <Image
          src="/user.svg"
          alt="Search"
          width={30}
          height={30}
          quality={100}
        />
      </div>
    </div>
  );
}
