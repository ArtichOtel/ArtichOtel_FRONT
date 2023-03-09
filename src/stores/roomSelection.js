import { defineStore } from "pinia";
import {toRaw} from "vue";

export const useRoomSelectionStore = defineStore('RoomSelection', {
    state: () => {
        return {
            nightPrice: 0,
            type: 1,
            description: "",
            nOfPers: 0,
            startDate: null,
            endDate: null,
            nOfNights: 0,
            roomId:0
        }
    },

    actions: {
        set(roomSelectionObject) {
            //console.log("setting room selection to", roomSelectionObject)
            this.state = roomSelectionObject
        },
        erase() {
            console.log("erase roomSelectionStore")
            this.state = {
                nightPrice: 0,
                type: 1,
                description: "",
                nOfPers: 0,
                startDate: null,
                endDate: null,
                nOfNights: 0,
                roomId:0
            }
        }
    },

    getters: {
        val() { return toRaw(this.state)},
        price() {
            return toRaw(this.state).nightPrice * toRaw(this.state).nOfPers * toRaw(this.state).nOfNights
        }
    }
})