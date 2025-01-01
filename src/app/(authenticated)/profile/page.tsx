import { user } from "@/data/user";
import { redirect } from "next/navigation";

export default function Page() {
  redirect("/me/" + user.slug); // verify my profile or other user.
  return null;
}
