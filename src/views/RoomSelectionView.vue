<template>
  <HeaderSection />
  <main class="w-full overflow-hidden">
    <div class="static mt-12 bg-primary/40 py-8 px-8 md:py-[4vw] md:px-[8.6vw]">

      <div class="flex flex-col justify-center items-center bg-secondary">
        <h2 class="font-title text-titleBase md:text-titleMed mt-[4vw] mb-[2vw]">{{ dico[langStore.lang].roomSelectionTitle }}</h2>

        <form class="mb-[2vw] tracking-wider">

          <div class="flex flex-wrap justify-center gap-[2vw] mb-[3vw]">

            <!--    left picker        -->
            <DatePicker
              v-bind:title="dico[langStore.lang].datePickerArrivalTitle"
              v-bind:boundary="'start'"
              v-bind:svgColor="'svg-tertiary'"
              v-bind:maxDate="''"
              v-bind:minDate="minDateStart"
              @changeDate="refreshAvailability()"
            />

            <!--    right picker        -->
            <DatePicker
              v-bind:title="dico[langStore.lang].datePickerDepartureTitle"
              v-bind:boundary="'end'"
              v-bind:svgColor="'svg-tertiary'"
              v-bind:maxDate="''"
              v-bind:minDate="minDateEnd"
              @changeDate="refreshAvailability()"
            />

            <NOfNights
              v-bind:dateStore="queryDateStore"
              v-bind:svgColor="'svg-tertiary'"
              @changeDate="refreshAvailability()"
            />



          </div>

          <div class="flex flex-col items-center gap-4">
            <button
              type="button"
              v-on:click="search()"
              class="bg-accent flex justify-center items-center w-64 h-9 text-xl tracking-wider text-tertiary font-semibold font-content uppercase bg-[length:1000px] bg-left hover:bg-center transition-all duration-300
            bg-gradient-to-r from-transparent via-[rgba(255,255,254,0.001)] via-[rgba(255,255,254,0.01)] via-[rgba(255,255,254,0.01)] via-white/50 to-transparent"
            >
              {{ dico[langStore.lang].roomSelectionCTA }}
            </button>
          </div>
        </form>

      </div>
      <AvailableRooms
        v-if="availability.length"
        v-bind:availability="availability[0]"
      />
    </div>

  </main>
  <FooterSection v-if="sections.length" :title="sections[7].title" :uri="sections[7].uri" />
</template>

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
import AvailableRooms from "../components/blocks/AvailableRooms.vue";
import axios from "axios";


const props = defineProps({
  sections: Array
})

const queryDateStore = useQueryDatesStore();
const langStore = useLangStore();
const dico = i18n;
const availability = ref([]);
const loaded = ref(false);

const minDateStart = ref(
  formatISO(addDays(new Date(), 0.5), { representation: "date" })
);
const minDateEnd = computed(() => {
  return formatISO(addDays(queryDateStore["start"].date, 1.5), {
    representation: "date",
  });
});

const refreshAvailability = () => {
  availability.value = [];
  //console.log("Refreshing availability");
};

function search() {
  //console.log("search");

  axios
    .get(
      `${import.meta.env.VITE_API_BASE_URL}/search?type=1&startDate=${
        queryDateStore.start.date
      }&endDate=${queryDateStore.end.date}`
    )
    .then((resp) => {
      availability.value = resp.data;
      console.log("Recup data : ", resp.data);
    })
    .then(() => {
      loaded.value = true;
    });
}
</script>