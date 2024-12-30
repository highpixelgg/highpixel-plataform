// import { TimelineItem } from "@/app/components/timeline/timeline/timeline-item";
// import { GeneralHeader } from "@/app/components/timeline/ui/general-header";
// import { SearchInput } from "@/app/components/timeline/ui/search-input";
// import { tweet } from "@/data/tweet";
// import { redirect } from "next/navigation";

// interface Props {
//   searchParams: { q?: string };
// }

// export default function Search({ searchParams }: Props) {
//   const query = searchParams?.q; // Acesso direto ao parâmetro

//   if (!query) {
//     redirect("/"); // Redireciona caso não exista a query
//   }

//   return (
//     <div>
//       <GeneralHeader backHref="/">
//         <SearchInput defaultValue={query} />
//       </GeneralHeader>
//       <div className="border-t-2 border-[#161616]">
//         <TimelineItem tweet={tweet} />
//         <TimelineItem tweet={tweet} />
//         <TimelineItem tweet={tweet} />
//         <TimelineItem tweet={tweet} />
//       </div>
//     </div>
//   );
// }
