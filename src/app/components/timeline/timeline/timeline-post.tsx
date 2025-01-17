"use client";

import { Button } from "@/app/components/ui/button";
import { user } from "@/data/user";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AvatarUser } from "../../ui/avatar";

export const TimelinePost = () => {
  const handleImageUpload = () => {};
  const handlePostClick = () => {};

  return (
    <div className="flex max-w-2xl gap-6 border-b border-[#161616] px-8 py-6 text-[#72767A]">
      <div className="relative h-11 w-11">
        <AvatarUser isBorded={false} src={user.avatar} />
      </div>
      <div className="flex-1">
        <div
          className="min-h-14 text-lg text-white outline-none empty:before:content-[attr(data-placeholder)]"
          contentEditable
          role="textbox"
          data-placeholder="O que está acontecendo?"
        ></div>
        {/* <Input
          border={false}
          placeholder="O que está acontecendo?"
          password={false}
        /> */}
        <div className="mt-2 flex items-center justify-between">
          <div className="cursor-pointer" onClick={handleImageUpload}>
            <FontAwesomeIcon icon={faImage} className="size-6" />
          </div>
          <div className="w-28">
            <Button
              label="Postar"
              size={2}
              onClick={handlePostClick}
              background="white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
