import {getLocales} from 'react-native-localize';

export const getLanguage = () => {
  const locales = getLocales();
  return locales[0].languageCode;
};
