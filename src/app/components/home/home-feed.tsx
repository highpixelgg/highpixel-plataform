import { tweet, tweetValdemir } from "@/data/tweet";
import { TimelineItem } from "@/app/components/timeline/timeline/timeline-item";

export default function HomeFeed() {
  return (
    <div>
      <TimelineItem tweet={tweet} />
      <TimelineItem tweet={tweetValdemir} />
      <TimelineItem tweet={tweet} />
      <TimelineItem tweet={tweetValdemir} />
    </div>
  );
}
