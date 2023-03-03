import { defineStore } from "pinia";
import {monthsShort} from "../utils/dateConst";
import {log, warn} from "../utils/console";
import {addDays, differenceInDays, formatISO, toDate} from "date-fns";

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
                month: today.getMonth(),
                year: today.getFullYear(),
                iso: today.getFullYear()+'-'+today.getMonth().toString().padStart(2, "0")+'-'+today.getDate().toString().padStart(2, "0")
            },
            end: {
                date: tomorrow,
                day: tomorrow.getDay(),
                dayNum: tomorrow.getDate().toString().padStart(2, "0"),
                month: tomorrow.getMonth(),
                year: tomorrow.getFullYear(),
                iso: tomorrow.getFullYear()+'-'+tomorrow.getMonth().toString().padStart(2, "0")+'-'+tomorrow.getDate().toString().padStart(2, "0")
            },

            nOfNights: 1
        }
    },

    actions: {
        /**
         * Boundary must be 'start' or 'end'. \n
         * Date format is 'yyyy-mm-dd'.
         *
         * @param boundary
         * @param newDate :ISO8601 date
         */
        set(boundary="", newDate) {
            log("setting ",boundary,"to date ",newDate)

            switch (boundary) {
                case 'start':
                    this.iso = newDate
                    this.start.date = new Date(newDate)

                    // deal with strings
                    this.start.year = newDate.substring(0,4)
                    this.start.month = parseInt(newDate.substring(5,7),10)-1
                    this.start.dayNum = newDate.substring(8)

                    // check date order, correct if end is before start
                    if (differenceInDays(toDate(this.end.date), toDate(this.start.date)) <0 ) {
                        let dayAfter = addDays(this.start.date, 1)
                        this.end.date = dayAfter
                        this.end.iso = formatISO(dayAfter,{ representation: 'date' })

                        this.end.year = this.end.iso.substring(0,4)
                        this.end.month = parseInt(this.end.iso.substring(5,7),10)-1
                        this.end.dayNum = this.end.iso.substring(8, 10)
                    }

                    break;

                case 'end':
                    this.end.iso = newDate
                    this.end.date =  new Date(newDate)

                    // deal with strings
                    this.end.year = newDate.substring(0,4)
                    this.end.month = parseInt(newDate.substring(5,7),10)-1
                    this.end.dayNum = newDate.substring(8)

                    // check date order, correct if end is before start
                    if (differenceInDays(toDate(this.end.date), toDate(this.start.date)) <0 ) {
                        let dayBefore = addDays(this.end.date, -1)
                        this.start.date = dayBefore
                        this.start.iso = formatISO(dayBefore,{ representation: 'date' })

                        this.start.year = this.start.iso.substring(0,4)
                        this.start.month = parseInt(this.start.iso.substring(5,7),10)-1
                        this.start.dayNum = this.start.iso.substring(8, 10)
                    }

                    break;

                default:
                    break;
            }

            this.nOfNights = differenceInDays(toDate(this.end.date), toDate(this.start.date))
        }
    }
})