import { redirect } from "next/navigation";
import { routes } from "@/lib/routes";

export default function LegacyShortformPopupRedirect({
  searchParams,
}: {
  searchParams: { style?: string };
}) {
  redirect(routes.shortform.popup(searchParams.style ?? null));
}
