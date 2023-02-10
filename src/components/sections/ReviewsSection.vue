<template>
  <div class="bg-tertiary text-secondary py-8 px-8 md:px-16">

<!--  penser à enlever mt-12 avant le merge avec dev  -->
    <div class="font-title text-titleBase md:text-titleMed mb-4">{{title}}</div>
    <div v-if="reviews.length" class="flex flex-col md:flex-row justify-between">

<!--this div 3 times-->
      <div v-for="review in reviews" v-bind:key="review.id" class="w-10/12 md:w-3/12 md:px-4">

        <div class="flex">
          <div class="rounded-full overflow-hidden border">
            <img src="https://picsum.photos/50/50" alt="user name">
          </div>
          <div class="flex justify-start items-center">
            <p class="flex-none pl-4">USER NAME</p></div>
        </div>

        <div class="flex">
          <div class="font-title">{{review.title}}</div>
          <div>{{review.note}}</div>
        </div>
        <div>{{review.description}}</div>
      </div>

    </div>
  </div>
</template>

<script setup>

import {ref} from "vue";
import axios from "axios";

const props = defineProps({
  title: String,
  uri: String
})

const reviews = ref([])

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