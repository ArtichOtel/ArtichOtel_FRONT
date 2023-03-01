import { defineStore } from "pinia";
import {monthsShort} from "../utils/dateConst";
import {log} from "../utils/console";

export const useQDEndStore = defineStore('QDEnd', {
    state: () => {
        // give the tomorrow date in 3 parts :
        // - day number (1-31)
        // - month short (janv.)
        // - year 4 digits
        
        // now + 36h
        let tomorrow = new Date(Date.now()+1000*60*60*36)
        
        return {
            day: tomorrow.getDay(),
            dayNum: tomorrow.getDate(),
            month: monthsShort[tomorrow.getMonth()],
            year: tomorrow.getFullYear()
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