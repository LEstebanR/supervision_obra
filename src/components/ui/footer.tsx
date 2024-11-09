import { Github, Twitter } from "lucide-react";
import { LANDING_LINKS } from "@/lib/data";
import CustomLink from "./link";

const SOCIAL_LINKS = [
  {
    href: "https://x.com/luisestebanrc",
    icon: <Twitter size={32} />,
  },
  {
    href: "https://github.com/LEstebanR/supervision_obra",
    icon: <Github size={32} />,
  },
];

export const Footer = () => {
  return (
    <footer className="relative py-6 w-full shrink-0 px-4 md:px-6 border-t border-dashed border-border bg-background backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-textPrimary  mb-4">
              ConstruApp
            </h3>
            <p className="text-sm text-textSecondary">
              Soluciones innovadoras para la supervisión de obras y proyectos de
              construcción.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-textPrimary">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              {LANDING_LINKS.map((link) => (
                <li key={link.href}>
                  <CustomLink href={link.href}>{link.label}</CustomLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-textPrimary mb-4">
              Redes Sociales
            </h3>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((link) => (
                <CustomLink
                  key={link.href}
                  href={link.href}
                  type="icon"
                  icon={link.icon}
                  target="_blank"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
