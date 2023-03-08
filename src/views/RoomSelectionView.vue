<template >
  <HeaderSection />
  <main class="w-full overflow-hidden">
    <div class="relative h-full mt-12 bg-primary/40 py-8 px-8 md:py-[4vw] md:px-[8.6vw]">

      <div class="flex flex-col justify-center items-center bg-secondary">
        <h2 class="font-title text-titleBase md:text-titleMed mt-[4vw] mb-[2vw]">{{ dico[langStore.lang].roomSelectionTitle }}</h2>

        <form class="mb-[2vw] tracking-wider">

          <div class="flex flex-wrap justify-center gap-[2vw] mb-[3vw]">

            <!--    left picker        -->
            <DatePicker v-bind:title="dico[langStore.lang].datePickerArrivalTitle"
                        v-bind:boundary="'start'"
                        v-bind:svgColor="'svg-tertiary'"
                        v-bind:maxDate="''"
                        v-bind:minDate="minDateStart"
            />

            <!--    right picker        -->
            <DatePicker v-bind:title="dico[langStore.lang].datePickerDepartureTitle"
                        v-bind:boundary="'end'"
                        v-bind:svgColor="'svg-tertiary'"
                        v-bind:maxDate="''"
                        v-bind:minDate="minDateEnd"
            />


            <NOfNights v-bind:dateStore="queryDateStore"
                       v-bind:svgColor="'svg-tertiary'"
            />



          </div>

          <div class="flex flex-col items-center gap-4">
            <button type="button" v-on:click="toto"
                    class="bg-accent flex justify-center items-center w-64 h-9 text-xl tracking-wider text-tertiary font-semibold font-content uppercase"
            >{{ dico[langStore.lang].roomSelectionCTA }}</button>
          </div>
        </form>

      </div>


    </div>

  </main>
  <FooterSection v-if="sections.length" :title="sections[7].title" :uri="sections[7].uri" />
</template>

<script>
export default {
  name: "SignUpView"
}
</script>

<script setup>

import HeaderSection from "../components/sections/HeaderSection.vue";
import FooterSection from "../components/sections/FooterSection.vue";
import router from "../router";
import NavBar from "../components/navigation/NavBar.vue";
import DatePicker from "../components/blocks/DatePicker.vue";
import NOfNights from "../components/blocks/NOfNights.vue";
import {useQueryDatesStore} from "../stores/queryDates";
import {computed, ref} from "vue";
import {addDays, formatISO} from "date-fns";
import { i18n } from "../utils/i18n";
import { useLangStore } from "../stores/lang";

const props = defineProps({
  sections: Array
})

const queryDateStore = useQueryDatesStore()
const langStore = useLangStore()
const dico = i18n

const minDateStart = ref(formatISO(addDays(new Date(), 0.5),{ representation: 'date' }))
const minDateEnd = computed(()=> {
  return formatISO(addDays(queryDateStore['start'].date, 1.5),{ representation: 'date' })
})


function toto() {
  router.push("/booking")
}

</script>