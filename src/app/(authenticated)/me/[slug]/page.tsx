import { ProfileFeed } from "@/app/components/profile/profile-feed";
import { Button } from "@/app/components/ui/button";
import { GeneralHeader } from "@/app/components/timeline/ui/general-header";
import { user } from "@/data/user";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Page() {
  const isMe = true;

  return (
    <div className="bg-black text-white">
      <GeneralHeader backHref="/">
        <div className="text-lg font-bold">{user.name}</div>
        <div className="text-xs text-gray-500">{user.postCounter} posts</div>
      </GeneralHeader>
      <section className="border-b-2 border-[#161616]">
        <div
          className="h-28 bg-gray-500 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(" + user.cover + ")" }}
        ></div>
        <div className="-mt-12 flex items-end justify-between px-6">
          <img
            src={user.avatar}
            alt={user.name}
            className="size-24 rounded-full"
          />
          <div className="w-32">
            {isMe && (
              <Link href={`/${user.slug}/edit`}>
                <Button label="Editar Perfil" size={2} borderounded={true} />
              </Link>
            )}
            {!isMe && <Button label="Seguir" size={2} />}
          </div>
        </div>
        <div className="mt-4 px-6 font-rubik">
          <div className="text-xl font-medium">{user.name}</div>
          <div className="font-light text-[#72767A]">@{user.slug}</div>
          <div className="py-5 text-lg text-[#72767A]">{user.bio}</div>
          {user.link && (
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faLink} className="size-5" />
              <Link
                className="font-rubik font-extralight text-blue-500 hover:text-blue-400"
                target="_blank"
                href={user.link}
              >
                {user.link}
              </Link>
            </div>
          )}
          <div className="my-5 flex gap-6 font-rubik">
            <div className="flex gap-2 text-xl text-[#72767A]">
              <span className="font-medium text-white">32</span>Seguindo
            </div>
            <div className="flex gap-2 text-xl font-normal text-[#72767A]">
              <span className="font-medium text-white">65,8k</span>Seguidores
            </div>
          </div>
        </div>
      </section>
      <ProfileFeed />
    </div>
  );
}
