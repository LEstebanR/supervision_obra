"use client";
import { useState } from "react";
import Link from "next/link";
import { HardHat, Menu } from "lucide-react";
import Button from "@/components/ui/button";
import CustomLink from "@/components/ui/link";
import { LANDING_LINKS } from "@/lib/data";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50  lg:px-6 py-4 backdrop-blur-sm bg-backgorund border-dashed border-border transition-colors duration-300 h-16 w-full border-b-4">
      <div className="container  flex items-center justify-between px-4  mx-auto ">
        <Link className="flex items-center space-x-2" href="/">
          <HardHat className="h-8 w-8 text-primary" />
          <span className="text-xl font-semibold text-primary hidden md:block">
            ConstruApp
          </span>
        </Link>
        <nav className="space-x-6">
          <div className="hidden md:flex gap-4">
            {LANDING_LINKS.map((link) => (
              <CustomLink key={link.href} href={link.href}>
                {link.label}
              </CustomLink>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <Button
              type="icon"
              className="md:hidden"
              action={() => setIsMenuOpen(!isMenuOpen)}
              size="sm"
              icon={<Menu className="h-6 w-6" />}
              variant="outline"
            />
          </div>
        </nav>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col space-y-2 bg-background rounded p-4 gap-4 w-full">
          {LANDING_LINKS.map((link) => (
            <CustomLink key={link.href} href={link.href}>
              {link.label}
            </CustomLink>
          ))}
        </nav>
      )}
    </header>
  );
};
