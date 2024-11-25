import { tweet } from "@/data/tweet";
import { TimelineItem } from "@/app/components/timeline/timeline/timeline-item";

export const ProfileFeed = () => {
  return (
    <div>
      <TimelineItem tweet={tweet} />
      <TimelineItem tweet={tweet} />
      <TimelineItem tweet={tweet} />
      <TimelineItem tweet={tweet} />
    </div>
  );
};
