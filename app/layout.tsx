import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "أثر | رحلات تصنع لك ذكريات",
  description: "اكتشف أجمل وجهات عُمان، واحجز رحلتك مع مرشدين محليين موثوقين.",
  icons: { icon: "/athar_logo.jpeg", shortcut: "/athar_logo.jpeg", apple: "/athar_logo.jpeg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><body>{children}</body></html>;
}
