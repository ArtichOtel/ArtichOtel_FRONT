<template>
  <section class="hidden md:block">
    <div
    id="video"
    class="bg-white text-tertiary pt-8 px-8 pb-4 md:pb-[3vw] md:pt-[9vw] md:px-[8.6vw]"
  >
    <div class="font-title text-titleBase md:text-titleMed">
      {{ title[langStore.lang] }}
    </div>
  </div>
  <!--  pexels-max-vakhtbovych-6238613.jpg-->

  <div
    class="bg-primary/70 text-tertiary pt-4 md:pt-[3vw] pb-8 px-8 md:pb-[9vw] md:px-[8.6vw]"
  >
    <div v-if="data" class="flex flex-col md:flex-row items-center w-full">
      <iframe
        class="flex-1 w-1/2 aspect-4/3 my-[4vw]"
        src="https://www.youtube.com/embed/p7YXXieghto"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>

      <div class="flex-1 w-1/2 aspect-4/3 my-[4vw] flex justify-center items-center bg-secondary">
        <p v-if="loaded" class="text-2xl tracking-wider px-[3vw]">
          {{ data.description[langStore.lang] }}
        </p>
      </div>
    </div>
  </div>
  </section>
  
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { log } from "../../utils/console";
import { useLangStore } from "../../stores/lang";

const langStore = useLangStore();

const props = defineProps({
  title: Object,
  uri: String,
});

const data = ref([]);
const loaded = ref(false);
//const videoId = ref(getIdFromURL("https://www.youtube.com/watch?v=24C8r8JupYY"))

axios({
  method: "get",
  url: `${import.meta.env.VITE_API_BASE_URL}${props.uri}`,
})
  .then((response) => {
    //log(response.data[0])
    data.value = response.data[0];
  })
  .then(() => {
    loaded.value = true;
  })
  .catch((err) => {
    console.log("BUG :", err);
  });
</script>
