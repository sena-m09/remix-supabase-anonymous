import { type ActionFunctionArgs, redirect } from "@remix-run/node";
import { supabase } from "~/services/supabase.server";
import { sessionStorage } from "~/services/session.server";


export const action = async ({ request }: ActionFunctionArgs) => {
  // Supabase で匿名ログインを実行
  const { data, error } = await supabase.auth.signInAnonymously();

  if (error) {
    return { error: error.message };
  }

  const session = await sessionStorage.getSession(request.headers.get("Cookie"));
  if(data.session) {
    session.set("auth_session", data.session);
  }

  return redirect("/", {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session),
    },
  });
};
