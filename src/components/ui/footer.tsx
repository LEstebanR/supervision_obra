import Link from "next/link";
import { Github, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative z-10 py-6 w-full shrink-0 px-4 md:px-6 border-t border-dashed border-gray-200 dark:border-gray-700 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              ConstruApp
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Soluciones innovadoras para la supervisión de obras y proyectos de
              construcción.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  className="text-sm text-gray-600 hover:text-teal-500 dark:text-gray-300 dark:hover:text-teal-400 transition-colors"
                  href="/herramientas"
                >
                  Herramientas
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-gray-600 hover:text-teal-500 dark:text-gray-300 dark:hover:text-teal-400 transition-colors"
                  href="/documentacion"
                >
                  Documentación
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-gray-600 hover:text-teal-500 dark:text-gray-300 dark:hover:text-teal-400 transition-colors"
                  href="#"
                >
                  Contribuir
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
              Redes Sociales
            </h3>
            <div className="flex space-x-4">
              <Link
                href="https://x.com/luisestebanrc"
                target="_blank"
                className="text-gray-600 hover:text-teal-500 dark:text-gray-300 dark:hover:text-teal-400"
              >
                <Twitter size={24} />
              </Link>
              <Link
                href="https://github.com/LEstebanR/supervision_obra"
                target="_blank"
                className="text-gray-600 hover:text-teal-500 dark:text-gray-300 dark:hover:text-teal-400"
              >
                <Github size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
