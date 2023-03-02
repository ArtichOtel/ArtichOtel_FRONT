import { defineStore } from "pinia";
import {monthsShort} from "../utils/dateConst";
import {log, warn} from "../utils/console";
import {getDate} from "tw-elements/dist/src/js/mdb/datepicker/date-utils";
import {differenceInDays, toDate} from "date-fns";

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
                date: today,
                day: today.getDay(),
                dayNum: today.getDate().toString().padStart(2, "0"),
                month: monthsShort[today.getMonth()],
                year: today.getFullYear()
            },
            end: {
                date: tomorrow,
                day: tomorrow.getDay(),
                dayNum: tomorrow.getDate().toString().padStart(2, "0"),
                month: monthsShort[tomorrow.getMonth()],
                year: tomorrow.getFullYear()
            },
            //nOfNight: differenceInDays(this.end.date, this.start.date)
            nOfNights: 1
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
        set(boundary="", newDate="") {
            log("setting ",boundary,"to date ",newDate)

            switch (boundary) {
                case 'start':
                    this.start.date = new Date(newDate)
                    this.start.year = newDate.substring(0,4)
                    this.start.month = monthsShort[parseInt(newDate.substring(5,7),10)-1]
                    this.start.dayNum = newDate.substring(8)
                    break;
                case 'end':
                    this.end.date =  new Date(newDate)
                    this.end.year = newDate.substring(0,4)
                    this.end.month = monthsShort[parseInt(newDate.substring(5,7),10)-1]
                    this.end.dayNum = newDate.substring(8)
                    break;
                default:
                    break;
            }

            this.nOfNights = differenceInDays(toDate(this.end.date), toDate(this.start.date))+1
        }
    }
})