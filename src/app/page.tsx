import LandingSection from "@/components/ui/landingSection";
import Button from "@/components/ui/button";
import { Title, Body } from "@/components/ui/typography";

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
        <p>Herramientas...</p>
      </LandingSection>
    </>
  );
}
