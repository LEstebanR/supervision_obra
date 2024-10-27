"use client";
import { useState } from "react";
import Link from "next/link";
import { HardHat, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50  lg:px-6 py-4 backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 border-b border-dashed border-gray-200 dark:border-gray-700 transition-colors duration-300 h-16 w-full">
      <div className="container  flex items-center justify-between px-4  mx-auto ">
        <Link className="flex items-center space-x-2" href="/">
          <HardHat className="h-8 w-8 text-teal-500 dark:text-teal-400" />
          <span className="text-xl font-semibold text-gray-800 dark:text-white hidden md:block">
            ConstruApp
          </span>
        </Link>
        <nav className="space-x-6">
          <div className="hidden md:flex gap-4">
            <Link
              className="text-sm font-medium text-gray-600 hover:text-teal-500 dark:text-gray-300 dark:hover:text-teal-400 transition-colors"
              href="/herramientas"
            >
              Herramientas
            </Link>
            <Link
              className="text-sm font-medium text-gray-600 hover:text-teal-500 dark:text-gray-300 dark:hover:text-teal-400 transition-colors"
              href="/documentacion"
            >
              Documentación
            </Link>
            <Link
              className="text-sm font-medium text-gray-600 hover:text-teal-500 dark:text-gray-300 dark:hover:text-teal-400 transition-colors"
              href="#"
            >
              Contribuir
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </nav>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col space-y-2 bg-white rounded p-4 gap-4 w-full">
          <Link
            className="text-sm font-medium text-gray-600 hover:text-teal-500 dark:text-gray-300 dark:hover:text-teal-400 transition-colors"
            href="/herramientas"
          >
            Herramientas
          </Link>
          <Link
            className="text-sm font-medium text-gray-600 hover:text-teal-500 dark:text-gray-300 dark:hover:text-teal-400 transition-colors"
            href="/documentacion"
          >
            Documentación
          </Link>
          <Link
            className="text-sm font-medium text-gray-600 hover:text-teal-500 dark:text-gray-300 dark:hover:text-teal-400 transition-colors"
            href="#"
          >
            Contribuir
          </Link>
        </nav>
      )}
    </header>
  );
};
