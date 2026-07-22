import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import type { ReactNode } from "react";
import { WhatsAppProvider } from "@/components/providers/WhatsAppProvider";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://concontabilconsultoria.pro"),
  title: {
    default: "Consultoria Financeira e Empresarial",
    template: "%s",
  },
  description:
    "Consultoria especializada com descontos de até 98%. Atendimento 100% online, equipe qualificada e resultados rápidos para o seu negócio.",
  openGraph: {
    title: "Consultoria Financeira",
    description: "Descontos de até 98%. Consultoria 100% online, sem burocracia.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.variable} ${sora.variable}`}>
        <WhatsAppProvider>{children}</WhatsAppProvider>
      </body>
    </html>
  );
}
