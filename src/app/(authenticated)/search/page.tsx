import { TimelineItem } from "@/app/components/timeline/timeline/timeline-item";
import { GeneralHeader } from "@/app/components/timeline/ui/general-header";
import { SearchInput } from "@/app/components/timeline/ui/search-input";
import { tweet } from "@/data/tweet";
import { redirect } from "next/navigation";

// type Props = {
//   searchParams: {
//     q: string;
//   };
// };

export default async function Page() {
  // const resolvedSearchParams = searchParams;
  // if (!resolvedSearchParams.q) redirect("/home");

  return (
    <div>
      <GeneralHeader backHref="/home">
        <SearchInput defaultValue={'/home'} />
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
