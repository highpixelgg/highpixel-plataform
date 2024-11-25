import { RecommendationArea } from "@/app/components/timeline/recommendation/recommendation-area";
import { SearchInput } from "@/app/components/timeline/ui/search-input";
import { TrendingArea } from "@/app/components/timeline/trending/trending-area";
import { ReactNode } from "react";
import Header from "../components/ui/header";
import { PublicityArea } from "../components/timeline/publicity/publicity-area";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex min-h-screen min-w-full flex-col">
      <Header background={true} />
      <main className="mx-auto mt-24 flex gap-40 lg:w-auto lg:justify-between">
        <aside className="hidden w-80 py-6 lg:block">
          <div className="fixed left-20 flex flex-col gap-5">
            <PublicityArea />
          </div>
        </aside>
        <section className="lg:mx-auto lg:w-screen lg:max-w-2xl lg:flex-1 lg:px-4">
          {children}
        </section>
        <aside className="hidden w-80 px-4 py-6 lg:block">
          <div className="fixed flex flex-col gap-5">
            <SearchInput />
            <TrendingArea />
            <RecommendationArea />
          </div>
        </aside>
      </main>
    </div>
  );
}
