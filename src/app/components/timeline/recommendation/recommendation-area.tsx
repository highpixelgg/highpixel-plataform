import { valdemir, user } from "@/data/user";
import {
  RecommendationItem,
  RecommendationItemSkeleton,
} from "./recommendation-item";

export const RecommendationArea = () => {
  return (
    <div className="w-96 rounded-3xl border border-[#3b3b3b] bg-[#151515] lg:w-96">
      <h2 className="--font-rubik p-6 text-xl font-medium text-white">
        Quem seguir
      </h2>
      <div className="flex flex-col gap-4 p-6 pt-0">
        <RecommendationItem user={user} />
        <RecommendationItem user={valdemir} />
        <RecommendationItemSkeleton />
      </div>
    </div>
  );
};
