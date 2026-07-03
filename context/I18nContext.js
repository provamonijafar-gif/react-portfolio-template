import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import en from "../data/i18n/en.json";
import zh from "../data/i18n/zh.json";

const locales = { en, zh };

const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("locale");
    if (saved && locales[saved]) {
      setLocale(saved);
    }
  }, []);

  const switchLocale = useCallback((newLocale) => {
    if (locales[newLocale]) {
      setLocale(newLocale);
      localStorage.setItem("locale", newLocale);
    }
  }, []);

  const t = useCallback(
    (key) => {
      const keys = key.split(".");
      let value = locales[locale];
      for (const k of keys) {
        value = value?.[k];
      }
      return value || key;
    },
    [locale]
  );

  return (
    <I18nContext.Provider value={{ locale, switchLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}
