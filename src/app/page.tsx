import LandingSection from "@/components/ui/landingSection";
import Button from "@/components/ui/button";
import { Title, Body, Title2 } from "@/components/ui/typography";
import ToolCard from "@/components/ui/toolCard";
import HelpCard from "@/components/ui/helpCard";
import {
  Calculator,
  MessageSquare,
  GitPullRequest,
  Github,
  DollarSign,
} from "lucide-react";

export default function Home() {
  const TOOLS = [
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
      commingsoon: true,
    },

    {
      title: "Calculadora de humedad",
      description:
        "Determina el contenido de humedad en diversos materiales de construcción.",
      icon: <Calculator size={20} className="text-gray-300" />,
      link: "herramientas/calculadora-humedad",
      commingsoon: true,
    },

    {
      title: "Calculadora de humedad",
      description:
        "Determina el contenido de humedad en diversos materiales de construcción.",
      icon: <Calculator size={20} className="text-gray-300" />,
      link: "herramientas/calculadora-humedad",
      commingsoon: true,
    },
  ];

  const DOCUMENTS = [
    {
      title: "Ensayo de humedad",
      description:
        "Determina el contenido de humedad en diversos materiales de construcción.",
      icon: <Calculator size={20} className="text-primary" />,
      link: "documentos/ensayo-humedad-arena",
      isDocument: true,
    },
    {
      title: "Ensayo de humedad",
      description:
        "Determina el contenido de humedad en diversos materiales de construcción.",
      icon: <Calculator size={20} className="text-primary" />,
      link: "documentos/ensayo-humedad-arena",
      isDocument: true,
      commingsoon: true,
    },
    {
      title: "Ensayo de humedad",
      description:
        "Determina el contenido de humedad en diversos materiales de construcción.",
      icon: <Calculator size={20} className="text-primary" />,
      link: "documentos/calculadora-humedad",
      isDocument: true,
      commingsoon: true,
    },
    {
      title: "Ensayo de humedad",
      description:
        "Determina el contenido de humedad en diversos materiales de construcción.",
      icon: <Calculator size={20} className="text-primary" />,
      link: "documentos/calculadora-humedad",
      isDocument: true,
      commingsoon: true,
    },
  ];

  const HELP = [
    {
      title: "Comentarios",
      description:
        "Comparte tus ideas y sugerencias para mejorar nuestras herramientas.",
      icon: <MessageSquare size={20} className="text-primary" />,
      butonLabel: "Deja un comentario",
    },
    {
      title: "Pull Request",
      description:
        "Contribuye directamente al código fuente y ayuda a mejorar nuestras herramientas.",
      icon: <GitPullRequest size={20} className="text-primary" />,
      butonLabel: "Crear pull request",
    },
    {
      title: "Issues",
      description:
        "Reporta problemas o sugiere nuevas funcionalidades para nuestro proyecto.",
      icon: <Github size={20} className="text-primary" />,
      butonLabel: "Crear issue",
    },
    {
      title: "Donaciones",
      description:
        "Apoya el desarrollo continuo de nuestras herramientas con una donación.",
      icon: <DollarSign size={20} className="text-primary" />,
      butonLabel: "Hacer donación",
    },
  ];
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
      <LandingSection background direction="up">
        <Title2>Documentación</Title2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {DOCUMENTS.map((tool, index) => (
            <ToolCard key={index} tool={tool} />
          ))}
        </div>
      </LandingSection>
      <LandingSection>
        <Title2>Contribuye al proyecto</Title2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {HELP.map((help, index) => (
            <HelpCard help={help} key={index} />
          ))}
        </div>
      </LandingSection>
    </>
  );
}
