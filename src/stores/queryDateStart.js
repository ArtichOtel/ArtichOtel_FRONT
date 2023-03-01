import { defineStore } from "pinia";
import {monthsShort} from "../utils/dateConst";
import {log} from "../utils/console";

export const useQDStartStore = defineStore('QDStart', {
    state: () => {
        // give the today date in 3 parts :
        // - day number (1-31)
        // - month short (janv.)
        // - year 4 digits
        
        // now + 12h
        let today = new Date(Date.now()+1000*60*60*12)
        
        return {
            day: today.getDay(),
            dayNum: today.getDate(),
            month: monthsShort[today.getMonth()],
            year: today.getFullYear()
        }
    },

    actions: {
        set(date) {
            log("date",date)
            this.year = date.substring(0,4)
            this.month = monthsShort[parseInt(date.substring(5,7),10)-1]
            this.dayNum = date.substring(8)
            //log(date.getDate())
        }
    }
})