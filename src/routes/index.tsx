import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AT Locações" },
      {
        name: "description",
        content: "Locação de móveis e itens para eventos em Petrópolis.",
      },
      { name: "theme-color", content: "#00C853" },
    ],
  }),
  component: Index,
});

function Index() {
  return <main className="min-h-screen w-full bg-[#00C853]" />;
}
