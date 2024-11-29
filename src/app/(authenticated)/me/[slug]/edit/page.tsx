"use client";

import { GeneralHeader } from "@/app/components/timeline/ui/general-header";
import { user } from "@/data/user";
import { faCamera } from "@fortawesome/free-solid-svg-icons/faCamera";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { TextArea } from "@/app/components/ui/textarea";
import Image from "next/image";

export default function Page() {
  return (
    <div className="w-screen text-white lg:w-full">
      <GeneralHeader backHref="/">
        <div className="text-lg font-bold">Editar Perfil</div>
      </GeneralHeader>
      <section className="border-b-2 border-[#161616]">
        <div
          className="flex h-28 items-center justify-center gap-4 bg-gray-500 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(" + user.cover + ")" }}
        >
          <div className="flex size-12 cursor-pointer items-center justify-center rounded-full bg-black/80">
            <FontAwesomeIcon icon={faCamera} className="size-6" />
          </div>
          <div className="flex size-12 cursor-pointer items-center justify-center rounded-full bg-black/80">
            <FontAwesomeIcon icon={faXmark} className="size-6" />
          </div>
        </div>
        <div className="-mt-12 px-6">
          <div className="relative size-24">
            <Image
              src={user.avatar}
              alt={user.name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div className="-mt-24 flex size-24 items-center justify-center">
            <div className="flex size-12 cursor-pointer items-center justify-center rounded-full bg-black/80">
              <FontAwesomeIcon icon={faCamera} className="size-6" />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-4 p-6">
        <label htmlFor="">
          <p className="mb-2 text-lg text-gray-500">Nome</p>
          <Input
            placeholder="Digite seu nome"
            value={user.name}
            border={true}
          />
        </label>
        <label htmlFor="">
          <p className="mb-2 text-lg text-gray-500">Bio</p>
          <TextArea
            placeholder="Escreva uma biografia"
            rows={4}
            value={user.bio}
          />
        </label>
        <label htmlFor="">
          <p className="mb-2 text-lg text-gray-500">Link</p>
          <Input placeholder="Digite um Link" value={user.link} border={true} />
        </label>
        <Button label="Salvar alterações" size={1} />
      </section>
    </div>
  );
}
