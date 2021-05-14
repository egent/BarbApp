

import I18n from "i18n-js";
import * as RNLocalize from "react-native-localize";

import ru from "./locales/ru";
import uk from "./locales/uk";

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  I18n.defaultLocale = "ru";  
  I18n.locale = locales[0].languageCode;
}


// янв
// фев
// мар
// апр
// мая
// июн
// июл
// авг
// сен
// окт
// ноя
// дек

// I18n.translations = {
//   ru: {
//     date: {
//       abbr_month_names: [null, "янв", "фев", "мар", "апр", "мая", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"],
//     }
//   }
// };

I18n.fallbacks = true;
I18n.translations = {
  ru,
  uk
};

export default I18n;

