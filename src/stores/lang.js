import { defineStore } from "pinia";

export const useLangStore = defineStore('lang', {
    state: () => {
        return { lang: 'fr_FR' }
    },

    actions: {
        setToEnglish() {
            this.lang = 'en_EN'
        },
        setToFrench() {
            this.lang = 'fr_FR'
        }
    }
})