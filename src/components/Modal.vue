<template>
  <div
    v-show="modalActive"
    class="absolute backdrop-blur-md fixed top-0 left-0 z-90 w-screen h-full xpx-[2.6vw]
    flebx flex-col justify-center items-center py-8 md:py-16 "
  >
    <div class="max-w-[1024px] mx-auto">
      <div class="bg-primary text-secondary text-titleBase w-full flex p-[2.6vw] flex-row justify-between items-start">
        <h2 class="font-title text-center">{{title}}</h2>

        <button class="svg-secondary" @click="$emit('close')">
          <img :src="iconURL + '/closeBtn.svg'" alt="" />
        </button>
      </div>

      <!-- Modal Content (slot)-->
      <div class="bg-white">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const imgUrl = ref(import.meta.env.VITE_API_IMG_URL)
const iconURL = ref(import.meta.env.VITE_API_ICON_URL)

const props = defineProps({
  title: String,
  modalActive: false,
});
</script>
