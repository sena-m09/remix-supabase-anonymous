import type { MetaFunction } from "@remix-run/node";

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
    </main>
  );
}
