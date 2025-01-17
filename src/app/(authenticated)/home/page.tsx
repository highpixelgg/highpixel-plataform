import HomeFeed from "@/app/components/home/home-feed";
import { TimelinePost } from "@/app/components/timeline/timeline/timeline-post";

export default function Page() {
  return (
    <div className="bg-black flex flex-col">
      <TimelinePost />
      <HomeFeed />
    </div>
  );
}
