import { tweet } from "@/data/tweet";
import { TimelineItem } from "../timeline/timeline-item";

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
