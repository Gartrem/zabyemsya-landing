import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ЗАБЬЁМСЯ — челленджи и LIVE-дуэли",
  description: "Открытые челленджи для всех, собственные вызовы для себя и друзей и LIVE-дуэли. Выберите цель или создайте свою.",
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "ЗАБЬЁМСЯ — не сливайтесь",
    description: "Открытые челленджи, свои вызовы и LIVE-дуэли.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
