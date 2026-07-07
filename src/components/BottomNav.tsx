import { Link } from "@tanstack/react-router";
import { Home, Music, Library, User } from "lucide-react";

const items = [
  { to: "/", label: "Home", Icon: Home, exact: true },
  { to: "/musicas", label: "Músicas", Icon: Music },
  { to: "/repertorios", label: "Repertórios", Icon: Library },
  { to: "/perfil", label: "Perfil", Icon: User },
] as const;

export default function BottomNav() {
  return (
    <nav
      className="fixed bottom-0 inset-x-0 z-40 border-t border-white/10 bg-[#0b0d12]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0b0d12]/80"
      aria-label="Navegação principal"
    >
      <ul className="max-w-3xl mx-auto grid grid-cols-4">
        {items.map(({ to, label, Icon, exact }) => (
          <li key={to}>
            <Link
              to={to}
              activeOptions={{ exact: !!exact }}
              className="flex flex-col items-center gap-1 py-2.5 text-white/60 hover:text-white transition"
              activeProps={{ className: "flex flex-col items-center gap-1 py-2.5 text-[#f5c451]" }}
            >
              <Icon size={20} />
              <span className="text-[11px] font-medium">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div style={{ height: "env(safe-area-inset-bottom)" }} />
    </nav>
  );
}
