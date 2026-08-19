import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zabyemsya.online"),
  title: "ЗАБЬЁМСЯ — челленджи, друзья и LIVE-дуэли",
  description: "Выберите цель, вступите в челлендж и подтверждайте результат каждый день. Открытые вызовы, LIVE-дуэли и будущий формат для компаний.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "ЗАБЬЁМСЯ — не сливайтесь",
    description: "Открытые челленджи, LIVE-дуэли и будущий формат для компаний: битвы отделов и B2B-лига.",
    type: "website",
    locale: "ru_RU",
    url: "https://zabyemsya.online",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "ЗАБЬЁМСЯ — челленджи, LIVE-дуэли и будущий формат для компаний" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ЗАБЬЁМСЯ — не сливайтесь",
    description: "Челленджи, LIVE-дуэли и будущий формат для компаний.",
    images: ["/og.png"],
  },
  alternates: { canonical: "https://zabyemsya.online" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
