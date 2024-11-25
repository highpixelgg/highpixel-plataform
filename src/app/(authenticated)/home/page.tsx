import HomeFeed from "@/app/components/home/home-feed";
import { TimelinePost } from "@/app/components/timeline/timeline-post";

export default function Page() {
  return (
    <div className="bg-black">
      <TimelinePost />
      <HomeFeed />
    </div>
  );
}
