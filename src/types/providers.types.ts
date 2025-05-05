import { LanguagesType } from "@/types/languages.types";

export interface LanguageProviderContextType {
  currentLanguage: string;
  switchLanguage: (language: LanguagesType) => void;
}