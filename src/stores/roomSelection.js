import { defineStore } from "pinia";
import {monthsShort} from "../utils/dateConst";
import {log, warn} from "../utils/console";
import {addDays, differenceInDays, formatISO, toDate} from "date-fns";

export const useRoomSelectionStore = defineStore('RoomSelection', {
    state: () => {
        return {
            nightPrice: 99,
            standing: "",
            description: "",
            nOfPers: 1,
            startDate: "2023-05-01",
            endDate: "2023-05-05"
        }
    },

    actions: {

    }
})