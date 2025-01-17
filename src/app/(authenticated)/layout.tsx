import { ReactNode } from "react";
import { PublicityArea } from "../components/timeline/publicity/publicity-area";
import { RecommendationArea } from "../components/timeline/recommendation/recommendation-area";
import { TrendingArea } from "../components/timeline/trending/trending-area";
import { SearchInput } from "../components/timeline/ui/search-input";
import { Header } from "../components/ui/header";

type LayoutProps = { children: ReactNode };

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <div className="sticky top-0 z-50 w-full">
        <Header />
      </div>
      <main className="flex flex-1 justify-between px-4 lg:px-8 gap-10">
        <section className="hidden lg:block lg:max-w-2xl">
          <div className="sticky top-20 h-[calc(100vh-5rem)] overflow-hidden">
            <PublicityArea />
          </div>
        </section>
        <section className="max-w-2xl flex-1 overflow-y-auto px-4 lg:px-0">
          {children}
        </section>
        <aside className="hidden lg:block lg:max-2xl">
          <div className="sticky top-20 flex flex-col gap-6">
            <SearchInput />
            <TrendingArea />
            <RecommendationArea />
          </div>
        </aside>
      </main>
    </div>
  );
}
