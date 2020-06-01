

import I18n from "i18n-js";
import * as RNLocalize from "react-native-localize";

import ru from "./locales/ru";
import uk from "./locales/uk";

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  I18n.defaultLocale = "ru-RU";  
  I18n.locale = locales[0].languageTag;
}

I18n.fallbacks = true;
I18n.translations = {
  ru,
  uk
};

export default I18n;

