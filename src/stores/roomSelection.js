import { defineStore } from "pinia";
import {toRaw} from "vue";

export const useRoomSelectionStore = defineStore('RoomSelection', {
    state: () => {
        return {
            nightPrice: 0,
            type: 1,
            description: "",
            nOfPers: 48,
            startDate: null,
            endDate: null,
            nOfNights: 0
        }
    },

    actions: {
        set(roomSelectionObject) {
            this.state = roomSelectionObject
        }
    },

    getters: {
        val() { return toRaw(this.state)},
        price() {
            return toRaw(this.state).nightPrice * toRaw(this.state).nOfPers * toRaw(this.state).nOfNights
        }
    }
})