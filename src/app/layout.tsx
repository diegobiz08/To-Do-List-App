'use client'
import './globals.css'
import { useStore } from "@/app/globalStore";
import { FaMoon, FaSun } from "react-icons/fa";

export default function RootLayout({children,}: { children: React.ReactNode}) {

  const { darkMode, toggleDarkMode } = useStore();

  return (
      <html data-theme={darkMode ? 'dark' : 'light'} lang="en">
      <head>
          <title>Lista de Actividades</title>
      </head>
      <body>
      <button
          onClick={toggleDarkMode}
          className="flex items-center absolute left-0 top-0 ml-4 mt-4"
      >
        {darkMode ? (
            <>
              <FaSun className="ml-0" />
              <span className="ml-1">Modo Claro</span>
            </>
        ) : (
            <>
              <FaMoon className="mr-1" />
              <span>Modo Oscuro</span>
            </>
        )}
      </button>
      {children}
      </body>
      </html>
  )
}
