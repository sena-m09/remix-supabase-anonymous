import { type MetaFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
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

    </main>
  );
}
