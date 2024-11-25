import { TimelineItem } from "@/app/components/timeline/timeline-item";
import { TimelinePost } from "@/app/components/timeline/timeline-post";
import { GeneralHeader } from "@/app/components/timeline/general-header";
import { tweet, tweetValdemir } from "@/data/tweet";

export default function () {
  return (
    <div className="text-white">
      <GeneralHeader backHref="/">
        <div className="text-lg font-bold">Voltar</div>
      </GeneralHeader>
      <div className="border-t-2 border-[#161616]">
        <TimelineItem tweet={tweet} />
        <div className="border-y-8 border-[#161616]">
          <TimelinePost />
        </div>
        <TimelineItem tweet={tweetValdemir} hideComments />
        <TimelineItem tweet={tweetValdemir} hideComments />
      </div>
    </div>
  );
}
