import LandingSection from "@/components/ui/landingSection";
import Button from "@/components/ui/button";
import { Title, Body, Title2 } from "@/components/ui/typography";
import ToolCard from "@/components/ui/toolCard";
import { Calculator } from "lucide-react";

export const TOOLS = [
  {
    title: "Calculadora de humedad",
    description:
      "Determina el contenido de humedad en diversos materiales de construcción.",
    icon: <Calculator size={20} className="text-primary" />,
    link: "herramientas/calculadora-humedad",
  },

  {
    title: "Calculadora de humedad",
    description:
      "Determina el contenido de humedad en diversos materiales de construcción.",
    icon: <Calculator size={20} className="text-gray-300" />,
    link: "herramientas/calculadora-humedad",
    commingsonn: true,
  },

  {
    title: "Calculadora de humedad",
    description:
      "Determina el contenido de humedad en diversos materiales de construcción.",
    icon: <Calculator size={20} className="text-gray-300" />,
    link: "herramientas/calculadora-humedad",
    commingsonn: true,
  },

  {
    title: "Calculadora de humedad",
    description:
      "Determina el contenido de humedad en diversos materiales de construcción.",
    icon: <Calculator size={20} className="text-gray-300" />,
    link: "herramientas/calculadora-humedad",
    commingsonn: true,
  },
];

export default function Home() {
  return (
    <>
      <LandingSection background>
        <Title gradient>Herramientas para supervisión de obra</Title>
        <Body>
          Soluciones digitales para optimizar tu trabajo como supervisor técnico
          en construcción.
        </Body>
        <div className="flex gap-2">
          <Button type="link" href="/herramientas" size="lg">
            Herramientas
          </Button>
          <Button variant="outline" type="link" href="/documentación" size="lg">
            Documentación
          </Button>
        </div>
      </LandingSection>
      <LandingSection>
        <Title2>Herramientas destacadas</Title2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {TOOLS.map((tool, index) => (
            <ToolCard key={index} tool={tool} />
          ))}
        </div>
      </LandingSection>
      <LandingSection>
        <Title2>Documentación</Title2>
      </LandingSection>
    </>
  );
}
