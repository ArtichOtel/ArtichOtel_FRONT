<template>
  <div class="flex flex-row items-end font-content">
    <div class="m-2">
      <p class="text-sm -mb-1">{{ dico[langStore.lang].nightNbr }}</p>
      <img
        :src="apiIconURL + 'moon.svg'"
        alt="calendar"
        class="text-black h-20 w-20"
        :class="svgColor"
        aria-hidden="true"
      />
    </div>
    <div class="0 flex flex-row">
      <div class="flex flex-col justify-center items-center">
        <p class="text-5xl px-1 -mb-2">{{ dateStore.nOfNights }}</p>
      </div>

      <div class="relative text-4xl">
        <!--        <input type="number" name="nOfNight" id="nOfNight"
               class="block z-10 w-12 h-10 bg-black text-white text-2xl ::-webkit-inner-spin-button:h-12"
        >-->
        <div
          class="w-8 h-8 cursor-pointer flex justify-center items-center hover:bg-primary hover:text-accent transition select-none"
          @click="nOfNightAdd(1), $emit('changeDate')"
        >
          +
        </div>
        <div
          class="w-8 h-8 cursor-pointer flex justify-center items-center hover:bg-primary hover:text-accent transition select-none"
          @click="nOfNightAdd(-1), $emit('changeDate')"
        >
          -
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useLangStore } from "../../stores/lang";
import { log } from "../../utils/console";
import { useQueryDatesStore } from "../../stores/queryDates";
import { i18n } from "../../utils/i18n";

const apiIconURL = ref(import.meta.env.VITE_API_ICON_URL);
const dateStore = useQueryDatesStore();

const props = defineProps({
  title: String,
  svgColor: String,
});
const langStore = useLangStore();
const dico = i18n;

/**
 *
 * @param nToAdd :Number
 */
function nOfNightAdd(nToAdd = 0) {
  dateStore.changeNOfNight(nToAdd);
}
</script>

<!--

               @change="dateStore.set(boundary, $event.target.value)"


-->
