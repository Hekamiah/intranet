import { createI18n } from "vue-i18n";
import en from "./en";
import pt from "./pt";

const messages = {
  en,
  pt,
};

export default createI18n({
  legacy: false,
  locale: "pt",
  fallbackLocale: "en",
  messages,
});
