import { defineStore } from "pinia";
import {monthsShort} from "../utils/dateConst";
import {log} from "../utils/console";

export const useQueryDatesStore = defineStore('QueryDates', {
    state: () => {
        // give the today date in 3 parts :
        // - day number (1-31)
        // - month short (janv.)
        // - year 4 digits
        
        // now + 12h
        let today = new Date(Date.now()+1000*60*60*12)
        // now + 36h
        let tomorrow = new Date(Date.now()+1000*60*60*36)
        
        return {
            start: {
                day: today.getDay(),
                dayNum: today.getDate().toString().padStart(2, "0"),
                month: monthsShort[today.getMonth()],
                year: today.getFullYear()
            },
            end: {
                day: tomorrow.getDay(),
                dayNum: tomorrow.getDate().toString().padStart(2, "0"),
                month: monthsShort[tomorrow.getMonth()],
                year: tomorrow.getFullYear()
            }
        }
    },

    actions: {
        /**
         * Boundary must be 'start' or 'end'. \n
         * Date format is 'yyyy-mm-dd'.
         *
         * @param boundary
         * @param date
         */
        set(boundary="", date="") {
            log("setting",boundary,"date",date)

            switch (boundary) {
                case 'start':
                    this.start.year = date.substring(0,4)
                    this.start.month = monthsShort[parseInt(date.substring(5,7),10)-1]
                    this.start.dayNum = date.substring(8)
                    break;
                case 'end':
                    this.end.year = date.substring(0,4)
                    this.end.month = monthsShort[parseInt(date.substring(5,7),10)-1]
                    this.end.dayNum = date.substring(8)
                    break;
                default:
                    break;
            }
        }
    }
})