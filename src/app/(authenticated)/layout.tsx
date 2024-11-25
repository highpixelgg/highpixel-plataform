import { NavItem } from "@/app/components/nav/nav-item";
import { NavLogout } from "@/app/components/nav/nav-logout";
import { NavMyProfie } from "@/app/components/nav/nav-myprofile";
import { Logo } from "@/app/components/ui/logo";
import { RecommendationArea } from "@/app/components/timeline/recommendation-area";
import { SearchInput } from "@/app/components/timeline/search-input";
import { TrendingArea } from "@/app/components/timeline/trending-area";
import { faHouse, faUser } from "@fortawesome/free-solid-svg-icons";
import { ReactNode } from "react";
import Header from "../components/ui/header";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex min-h-screen min-w-full flex-col">
      <Header background={true} />
      <main className="mt-24 flex w-full lg:container lg:mx-auto lg:justify-between">
        <aside className="hidden w-80 px-4 py-6 lg:block">
          <div className="fixed flex flex-col gap-5">
            <SearchInput />
            <TrendingArea />
            <RecommendationArea />
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
