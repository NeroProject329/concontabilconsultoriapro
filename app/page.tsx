import type { Metadata } from "next";
import LandingPage from "@/components/site/LandingPage";

export const metadata: Metadata = {
  title: "Consultoria Financeira e Empresarial",
  description:
    "Consultoria especializada com descontos de até 98%. Atendimento 100% online, equipe qualificada e resultados rápidos para o seu negócio.",
};

export default function Home() {
  return <LandingPage />;
}
