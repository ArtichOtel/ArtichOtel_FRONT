import { defineStore } from "pinia";
import { toRaw } from "vue";

export const useFooterStore = defineStore('footers', {
    state: () => {
        return {
            category: null,
            links: null,
        }
    },

    actions: {
        set(footersObject) {
            this.category = footersObject[0]
            this.links = footersObject[1]
        },
        
        getCategory() {
            return toRaw(this.category)
        },

        getLinks() {
            return toRaw(this.links)
        }
    }
})