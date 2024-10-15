import { type ActionFunctionArgs, redirect } from "@remix-run/node";
import { supabase } from "~/services/supabase.server";
import { sessionStorage } from "~/services/session.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    return { error: error.message };
  }

  const session = await sessionStorage.getSession(request.headers.get("Cookie"));
  return redirect("/", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session),
    },
  });
};
