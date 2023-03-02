import { defineStore } from "pinia";
import { toRaw } from "vue";

export const useContactStore = defineStore('contact', {
    state: () => {
        return { contact: null }
    },

    actions: {
        setContact(contactObject) {
            this.contact = contactObject
        },
        get() {
            return toRaw(this.contact)
        }
    },
})