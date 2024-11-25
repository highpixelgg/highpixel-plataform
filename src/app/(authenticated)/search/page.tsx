import { TimelineItem } from "@/app/components/timeline/timeline-item";
import { GeneralHeader } from "@/app/components/timeline/general-header";
import { SearchInput } from "@/app/components/timeline/search-input";
import { tweet } from "@/data/tweet";
import { redirect } from "next/navigation";

type Props = {
  searchParams: {
    q: string | undefined;
  };
};

export default function Search({ searchParams }: Props) {
  if (!searchParams.q) redirect("/");

  return (
    <div>
      <GeneralHeader backHref="/">
        <SearchInput defaultValue={searchParams.q} />
      </GeneralHeader>
      <div className="border-t-2 border-[#161616]">
        <TimelineItem tweet={tweet} />
        <TimelineItem tweet={tweet} />
        <TimelineItem tweet={tweet} />
        <TimelineItem tweet={tweet} />
      </div>
    </div>
  );
}
