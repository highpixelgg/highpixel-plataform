import { RecommendationArea } from "@/app/components/timeline/recommendation/recommendation-area";
import { TrendingArea } from "@/app/components/timeline/trending/trending-area";
import { SearchInput } from "@/app/components/timeline/ui/search-input";
import { ReactNode } from "react";
import { PublicityArea } from "../components/timeline/publicity/publicity-area";
import { Header } from "../components/ui/header";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex min-h-screen min-w-full flex-col">
      <Header />
      <main className="mt-5 flex gap-14">
        <aside className="hidden w-96 py-6 lg:block">
          <div className="fixed flex flex-col">
            <PublicityArea />
          </div>
        </aside>
        <section className="lg:max-w-2xl">{children}</section>
        <aside className="hidden w-80 py-6 lg:block">
          <div className="fixed flex flex-col gap-3">
            <SearchInput />
            <TrendingArea />
            <RecommendationArea />
          </div>
        </aside>
      </main>
    </div>
  );
}
