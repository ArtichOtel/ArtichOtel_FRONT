import { defineStore } from "pinia";

export const useLangStore = defineStore('lang', {
    state: () => {

        // TODO use browser locale (http accept-language)
        return { lang: 'fr_FR' }
    },

    actions: {
        setLanguage(localeLang) {
            this.lang = localeLang
        }

    }
})