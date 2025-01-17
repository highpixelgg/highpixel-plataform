import { user, valdemir } from "@/data/user";
import { PublicityItem, PublicityItemSkeleton } from "./publicity-item";

export const PublicityArea = () => {
  return (
    <div className="ml-4 w-full rounded-3xl border border-[#3b3b3b] bg-[#151515] lg:w-96">
      <h2 className="--font-rubik p-6 text-xl font-medium text-white">
        Veja o que está bombando
      </h2>
      <div className="flex flex-col gap-4 p-6 pt-0">
        <PublicityItem
          user={user}
          description="FullStack Developer"
          url="/google.com"
        />
        <PublicityItem
          user={valdemir}
          description="Novo DSW Painel"
          url="/youtube.com"
        />
        <PublicityItemSkeleton />
      </div>
    </div>
  );
};
