// hooks/useLocale.ts
import { ar } from "../locales";
import { en } from "../locales";
import { useLocation } from "react-router-dom";

export const useLocale = () => {
  const lang = useLocation().pathname.split("/")[1];
  return lang === "ar" ? ar : en;
};
