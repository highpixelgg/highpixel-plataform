"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CalendarIcon,
  Globe,
  Heart,
  MapPin,
  MessageSquare,
  Repeat2,
  Share,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

interface User {
  id: string;
  fullName: string;
  username: string;
  roles: string[];
  createdAt: string;
}

type ProfileContentProps = {
  username: string;
};

export default function ProfileContent({ username }: { username: string }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

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
    <div className="m-auto mt-[-110px] flex h-screen items-center justify-center gap-14">
      <Card className="w-full max-w-3xl border-zinc-500/50 bg-black text-white">
        <CardHeader className="relative p-0">
          <Image
            src="/profile-banner.png"
            alt="Profile banner"
            width={600}
            height={200}
            className="w-full object-cover"
          />
          <div className="absolute bottom-4 left-4 flex items-end space-x-4">
            <Image
              src="/profile.svg"
              alt="Low Racing logo"
              width={80}
              height={80}
              className="rounded-full border-4 border-black"
            />
            <div>
              <h2 className="text-2xl font-bold">{user?.fullName}</h2>
              <p className="text-sm text-gray-400">@{user?.username}</p>
            </div>
          </div>
          <Button size="sm" className="absolute right-4 top-4">
            Editar Perfil
          </Button>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
          <p>Hey, venha jogar conosco!!</p>
          <div className="flex space-x-4 text-sm text-gray-400">
            <span className="flex items-center">
              <MapPin className="mr-1 h-4 w-4" />
              Brasil
            </span>
            <span className="flex cursor-pointer items-center text-sky-500">
              <Globe className="mr-1 h-4 w-4 text-white" />
              www.lowracing.com
            </span>
            <span className="flex items-center">
              <CalendarIcon className="mr-1 h-4 w-4" />
              {user?.createdAt}
            </span>
          </div>
          <div className="flex space-x-4 text-sm">
            <span>
              <strong>67</strong> Seguindo
            </span>
            <span>
              <strong>47</strong> Seguidores
            </span>
          </div>
        </CardContent>
        <CardFooter className="border-t border-gray-800 p-0">
          <Tabs defaultValue="postagens" className="w-full">
            <TabsList className="w-full justify-start border-b border-gray-800 bg-transparent">
              <TabsTrigger
                value="postagens"
                className="data-[state=active]:border-b-2 data-[state=active]:border-blue-500"
              >
                Postagens
              </TabsTrigger>
              <TabsTrigger
                value="fotos"
                className="data-[state=active]:border-b-2 data-[state=active]:border-blue-500"
              >
                Fotos
              </TabsTrigger>
              <TabsTrigger
                value="likes"
                className="data-[state=active]:border-b-2 data-[state=active]:border-blue-500"
              >
                Likes
              </TabsTrigger>
            </TabsList>
            <TabsContent value="postagens" className="p-4">
              <div className="flex items-start space-x-4">
                <Image
                  src="/profile.svg"
                  alt="Low Racing logo"
                  width={40}
                  height={40}
                  quality={100}
                  className="rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-bold">{user?.fullName}</h3>
                    <span className="text-sm text-gray-400">
                      @{user?.username} · Agosto 26
                    </span>
                  </div>
                  <p>
                    Se o piano A não funcionar, há 25 letras restantes no
                    alfabeto.
                  </p>
                  <div className="mt-2 flex space-x-4 text-gray-400">
                    <span className="flex items-center">
                      <MessageSquare className="mr-1 h-4 w-4 cursor-pointer" />
                      10
                    </span>
                    <span className="flex cursor-pointer items-center">
                      <Repeat2 className="mr-1 h-4 w-4" />1
                    </span>
                    <span className="flex cursor-pointer items-center text-green-500">
                      <Heart className="mr-1 h-4 w-4" />8
                    </span>
                    <span className="flex cursor-pointer items-center">
                      <Share className="mr-1 h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardFooter>
      </Card>
    </div>
  );
}
