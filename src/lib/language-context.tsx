"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Locale = "fr" | "en";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "soun7-locale";

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always start at "fr" so server and first client render match exactly.
  // The saved/browser preference is applied right after mount, below.
  const [locale, setLocaleState] = useState<Locale>("fr");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "fr" || saved === "en") {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync with localStorage/navigator on mount, cannot be derived during SSR
      setLocaleState(saved);
    } else {
      const browserLang = window.navigator.language?.slice(0, 2);
      if (browserLang === "en") {
        setLocaleState("en");
      }
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  function setLocale(next: Locale) {
    setLocaleState(next);
  }

  function toggleLocale() {
    setLocaleState((prev) => (prev === "fr" ? "en" : "fr"));
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
