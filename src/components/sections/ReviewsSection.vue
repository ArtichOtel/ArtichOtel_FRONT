<template>
  <section id="reviews" class="bg-tertiary text-secondary py-8 px-8 md:py-[9vw] md:px-[8.6vw]">

    <h2 class="font-title text-titleBase md:text-titleMed mb-[8vw]">{{title[langStore.lang]}}</h2>
    <div v-if="reviews.length" class="flex flex-col md:flex-row justify-between">

<!--this div 3 times-->
      <div v-for="review in reviews" v-bind:key="review.id" class="w-10/12 md:w-3/12 md:px-4 mb-16 md:mb-0">

        <div class="flex mb-3">
          <div class="rounded-full overflow-hidden">
            <img src="https://picsum.photos/50/50" alt="user name">
          </div>
          <div class="flex justify-start items-center">
            <p class="flex-none pl-4 font-content tracking-wider">USER NAME</p></div>
        </div>

        <div class="flex mb-3">
          <div class="font-title">{{review.title}}</div>
          <div class="flex-none pl-4">
            <StarNotation v-bind:nOfStar="review.note" />
          </div>
        </div>

        <div class="font-content tracking-wider">{{review.description}}</div>
      </div>

    </div>
  </section>
</template>

<script setup>

import StarNotation from "../StarNotation/StarNotation.vue";

import {ref} from "vue";
import axios from "axios";
import {useLangStore} from "../../stores/lang";
const props = defineProps({
  title: Object,
  uri: String
})

const reviews = ref([])
const langStore = useLangStore()

axios({
  method: "get",
  url: `${import.meta.env.VITE_API_BASE_URL}${props.uri}`,
})
    .then((response) => {
      reviews.value = response.data
    })
    .catch((err)=> {
      console.log("BUG :", err)
    })



</script>