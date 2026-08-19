import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zabyemsya.online"),
  title: "ЗАБЬЁМСЯ — челленджи, друзья и LIVE-дуэли",
  description: "Выберите цель, вступите в челлендж и подтверждайте результат каждый день. Открытые вызовы, свои челленджи и LIVE-дуэли на 60 секунд.",
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "ЗАБЬЁМСЯ — не сливайтесь",
    description: "Открытые челленджи, свои вызовы для друзей и LIVE-дуэли на 60 секунд.",
    type: "website",
    locale: "ru_RU",
    url: "https://zabyemsya.online",
  },
  alternates: { canonical: "https://zabyemsya.online" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
