import { type MetaFunction, type LoaderFunctionArgs } from "@remix-run/node";
import { Form, json, useLoaderData } from "@remix-run/react";
import { supabaseClient } from "~/services/supabase.server";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async({ request }: LoaderFunctionArgs) => {
  const { supabase } = supabaseClient(request);
  const { data: { user } } = await supabase.auth.getUser();

  return json({ user });

}

export default function Index() {
  const { user } = useLoaderData<typeof loader>();
  return (
    <main className="p-6">
      <h1 className="mb-1">TOP PAGE</h1>
      <p>texttexttext</p>
      <Form action="/signin" method="post">
        <button type="submit">ログイン</button>
      </Form>
      <Form action="/signout" method="post">
        <button type="submit">ログアウト</button>
      </Form>
      {user && <p>Welcome, {user.id}</p>}

    </main>
  );
}
