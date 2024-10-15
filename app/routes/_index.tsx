import { type MetaFunction } from "@remix-run/node";
import { Form, json } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";
import { supabase } from "~/services/supabase.server";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async() => {
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
