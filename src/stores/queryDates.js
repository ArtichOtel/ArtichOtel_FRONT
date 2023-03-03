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

            nOfNights: 1,

            next: 'start'
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
        set(boundary="", newDate, update=true) {
            //log("setting ",boundary,"to date ",newDate)

            switch (boundary) {
                case 'start':
                    if (new Date(newDate) > new Date(Date.now()+1000*60*60*12)) {
                        this.iso = newDate
                        this.start.date = new Date(newDate)

                        // deal with strings
                        this.start.year = newDate.substring(0,4)
                        this.start.month = parseInt(newDate.substring(5,7),10)-1
                        this.start.dayNum = newDate.substring(8)

                        // check date order, correct if end is before start
                        if (differenceInDays(toDate(this.end.date), toDate(this.start.date)) <1 ) {
                            let dayAfter = addDays(this.start.date, 1)
                            this.end.date = dayAfter
                            this.end.iso = formatISO(dayAfter,{ representation: 'date' })

                            this.end.year = this.end.iso.substring(0,4)
                            this.end.month = parseInt(this.end.iso.substring(5,7),10)-1
                            this.end.dayNum = this.end.iso.substring(8, 10)
                        }

                        if (update) { this.next = 'end'}
                    }

                    break;

                case 'end':
                    if (new Date(newDate) > new Date(Date.now()+1000*60*60*36)) {
                        this.end.iso = newDate
                        this.end.date =  new Date(newDate)

                        // deal with strings
                        this.end.year = newDate.substring(0,4)
                        this.end.month = parseInt(newDate.substring(5,7),10)-1
                        this.end.dayNum = newDate.substring(8)

                        // check date order, correct if end is before start
                        if (differenceInDays(toDate(this.end.date), toDate(this.start.date)) <1 ) {
                            let dayBefore = addDays(this.end.date, -1)
                            this.start.date = dayBefore
                            this.start.iso = formatISO(dayBefore,{ representation: 'date' })

                            this.start.year = this.start.iso.substring(0,4)
                            this.start.month = parseInt(this.start.iso.substring(5,7),10)-1
                            this.start.dayNum = this.start.iso.substring(8, 10)
                        }

                        if (update) { this.next = 'start'}

                    }
                    break;

                default:
                    break;
            }

            this.nOfNights = differenceInDays(toDate(this.end.date), toDate(this.start.date))
        },


        /**
         * Number of night might be integer, will update
         *
         * @param nToAdd
         */
        changeNOfNight(nToAdd= 0) {
            switch (this.next) {
                case 'start':
                    this.set(this.next, formatISO(addDays(this.start.date, nToAdd * (-1)), {representation: 'date'}), false)
                    break;
                case 'end':
                    this.set(this.next, formatISO(addDays(this.end.date, nToAdd), {representation: 'date'}), false)
                    break;
                default:
                    break
            }
        }
    }
})