import { defineStore } from "pinia";

export const useRoomSelectionStore = defineStore('RoomSelection', {
    state: () => {
        return {
            nightPrice: 99,
            type: 1,
            description: "",
            nOfPers: 1,
            startDate: "2023-05-01",
            endDate: "2023-05-05"
        }
    },

    actions: {
        set(roomSelectionObject) {
            this.state = roomSelectionObject
        }
    }
})