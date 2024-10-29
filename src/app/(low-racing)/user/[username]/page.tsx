"use client";

import Header from "@/app/components/header";
import ProfileContent from "@/app/components/profile";
import { useParams } from "next/navigation";

export default function PageProfile() {
  const { username } = useParams();
  return (
    <div className="h-screen w-screen bg-[#1B1B1B]">
      <Header background={true} username={username as string} />
      <ProfileContent username={username as string} />
    </div>
  );
}
