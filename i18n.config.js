import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { getLocales } from "react-native-localize";

const getLanguage = () => {
    const locales = getLocales()
    return locales[0].languageCode
}

const resouses = {
    
}