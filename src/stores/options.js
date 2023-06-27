import { defineStore } from "pinia";
import {monthsShort} from "../utils/dateConst";
import {log, warn} from "../utils/console";
import {addDays, differenceInDays, formatISO, toDate} from "date-fns";

export const useOptionsStore = defineStore('RoomSelection', {
    state: () => {
        return {
            data: []
        }
    },

    actions: {
        /**
         * Replace data array by the given array
         *
         * @param newData
         */
        setWhole(newData) {
            this.data = newData.map(i => i)
        },

        /**
         * Replace an item of the data array
         *
         * @param itemIndex
         * @param newItemValue
         */
        setById(itemIndex=0, newItemValue) {
            this.data[itemIndex] = newItemValue
        }
    }
})