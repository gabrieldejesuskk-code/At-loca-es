import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ClipboardList,
  Home,
  Menu,
  MessageCircle,
  Package,
  X,
  ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AT Locações" },
      {
        name: "description",
        content: "Locação de móveis e itens para eventos em Petrópolis.",
      },
      { name: "theme-color", content: "#123b36" },
    ],
  }),
  component: Index,
});

const navigation = [
  { label: "Início", href: "#inicio", icon: Home },
  { label: "Catálogo", href: "#catalogo", icon: Package },
  { label: "Orçamentos", href: "#orcamentos", icon: ClipboardList },
  { label: "Contato", href: "#contato", icon: MessageCircle },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div id="inicio" className="min-h-screen bg-[#f6f8f7] text-[#172522]">
      <header className="sticky top-0 z-30 flex h-[76px] items-center gap-4 bg-[#123b36] px-4 text-white shadow-md sm:px-7">
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menu"
          aria-controls="main-navigation"
          aria-expanded={menuOpen}
          className="grid size-11 shrink-0 place-items-center rounded-xl border border-white/20 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b8ddca]"
        >
          <Menu size={23} strokeWidth={2} />
        </button>

        <a href="#inicio" className="flex flex-col leading-tight no-underline">
          <span className="text-[18px] font-extrabold tracking-[0.08em]">
            AT LOCAÇÕES
          </span>
          <span className="mt-1 text-[10px] font-semibold tracking-[0.2em] text-white/70">
            LOCAÇÃO PARA EVENTOS
          </span>
        </a>
      </header>

      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#071714]/55 transition-opacity"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      <aside
        id="main-navigation"
        aria-label="Menu principal"
        aria-hidden={!menuOpen}
        className={[
          "fixed inset-y-0 left-0 z-50 flex w-[min(340px,88vw)] flex-col bg-white px-5 py-6 shadow-2xl",
          "transition-transform duration-300 ease-out",
          menuOpen ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        <div className="flex items-center justify-between border-b border-[#e6ece9] px-1 pb-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#71827b]">
              AT Locações
            </p>
            <h2 className="mt-1 text-lg font-bold text-[#123b36]">
              Menu principal
            </h2>
          </div>
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Fechar menu"
            className="grid size-10 place-items-center rounded-xl bg-[#eff5f1] text-[#123b36] transition hover:bg-[#e1ece5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123b36]"
          >
            <X size={20} />
          </button>
        </div>

        <p className="mb-3 mt-7 px-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#89958f]">
          Navegação
        </p>
        <nav className="grid gap-1">
          {navigation.map(({ label, href, icon: Icon }, index) => (
            <a
              key={label}
              href={href}
              onClick={closeMenu}
              aria-current={index === 0 ? "page" : undefined}
              className="group flex min-h-12 items-center gap-3 rounded-xl px-3 text-sm font-semibold text-[#35443e] transition hover:bg-[#edf5f0] hover:text-[#123b36] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123b36]"
            >
              <Icon size={19} className="text-[#648077]" strokeWidth={1.9} />
              <span>{label}</span>
              <ChevronRight
                size={16}
                className="ml-auto text-[#9aa8a1] opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100"
              />
            </a>
          ))}
        </nav>

        <div className="mt-auto border-t border-[#e6ece9] px-2 pt-5">
          <p className="text-sm font-semibold text-[#123b36]">AT Locações</p>
          <p className="mt-1 text-xs leading-relaxed text-[#718079]">
            Praticidade para organizar seu evento.
          </p>
        </div>
      </aside>

      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-7 sm:py-14">
        <section className="overflow-hidden rounded-2xl border border-[#e7eeea] bg-white shadow-[0_8px_30px_rgba(18,59,54,0.05)]">
          <div className="p-7 sm:p-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#648077]">
              AT Locações
            </p>
            <h1 className="mt-3 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-[#0b2925] sm:text-4xl">
              Seu evento começa com uma boa organização.
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#66736f] sm:text-base">
              Encontre os itens para seu evento e solicite um orçamento de forma
              simples e prática.
            </p>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="mt-7 inline-flex h-11 items-center gap-2 rounded-xl bg-[#123b36] px-5 text-sm font-semibold text-white transition hover:bg-[#0b2925] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#123b36] focus-visible:ring-offset-2"
            >
              Acessar menu <ChevronRight size={17} />
            </button>
          </div>
          <div className="h-1.5 w-full bg-gradient-to-r from-[#123b36] via-[#6b9a83] to-[#c6dfd2]" />
        </section>
      </main>
    </div>
  );
}
