<template>
  <div class="flex flex-row items-end font-content p-3">
    <div class="">
      <p class="text-sm -mb-1">{{title}}</p>
      <img src="src/assets/icons/calendar-edit.svg" alt="calendar"
           class="text-black h-20 w-20" :class="svgColor" aria-hidden="true">
    </div>
    <div class="0 flex flex-row">
      <div class="flex flex-col justify-center items-center">
        <p class="text-5xl px-1 -mb-2">{{dateStore[boundary].dayNum}}</p>
      </div>
      <div class="flex flex-col justify-center items-center">
        <p class="text-lg -mb-1">{{dateStore[boundary].month}}</p>
        <p class="text-lg -mb-1">{{dateStore[boundary].year}}</p>
      </div>

      <div class="flex justify-center items-center relative">
        <input type="date" name="{{boundary}}" id="{{boundary}}"
               class="block z-10 w-6 bg-transparent text-transparent text-2xl"
               @change="dateStore.set(boundary, $event.target.value)"
        >
        <label for="{{boundary}}" class="absolute z-0" >
          <img src="src/assets/icons/arrow-down-1.svg" alt="selectDate" class="svg-accent">
        </label>
      </div>
    </div>

  </div>
</template>

<script setup>

import { ref } from 'vue';
import { useLangStore } from '../../stores/lang';
import { log } from '../../utils/console';
import {useQueryDatesStore} from "../../stores/queryDates";

const imgURL = ref(import.meta.env.VITE_IMG_URL)

const dateStore = useQueryDatesStore()

const props = defineProps({
  title: String,
  boundary: String,
  svgColor: String
})


</script>