"use client";

import { user } from "@/data/user";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const TimelinePost = () => {
  const handleImageUpload = () => {};
  const handlePostClick = () => {};

  return (
    <div className="flex gap-6 border-b-2 border-[#161616] px-8 py-6 text-[#72767A]">
      <div>
        <img
          src={user.avatar}
          alt={user.name}
          className="size-12 rounded-full"
        />
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
            <Button label="Postar" size={2} onClick={handlePostClick} />
          </div>
        </div>
      </div>
    </div>
  );
};
