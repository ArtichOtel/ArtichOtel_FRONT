<template>
  <section
    id="news"
    class="relative px-[8.6vw] py-[9vw] text-tertiary overflow-hidden"
  >
    <div class="flex flex-col">
      <h2 class="font-title text-titleBase md:text-titleMed mb-[4vw]">
        {{ title[langStore.lang] }}
      </h2>

      <div
        v-if="newsInfos.length"
        class="flex flex-col md:flex-row justify-between items-end gap-[1vw] tracking-wider"
      >
        <div v-for="n in 3" :key="n" class="relative bg-red-200 h-fit">
          <div class="font-content absolute inset-x-0 bottom-0 h-fit">
            <h3 class="bg-tertiary text-secondary text-xl w-fit p-[1vw]">
              {{ newsInfos[n - 1].title[langStore.lang] }}
            </h3>

            <p class="bg-secondary/60 p-[1vw]">
              {{ newsInfos[n - 1].description[langStore.lang] }}
            </p>
          </div>

          <div class="">
            <img :src="newsInfos[n - 1].url_image" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { error, log } from "../../utils/console";
import { useLangStore } from "../../stores/lang";

const langStore = useLangStore();
const newsInfos = ref([]);

const props = defineProps({
  title: Object,
  uri: String,
});

axios({
  method: "get",
  url: `${import.meta.env.VITE_API_BASE_URL}${props.uri}`,
})
  .then((response) => {
    //log('newInfos', response.data)
    newsInfos.value = response.data;
  })
  .catch((err) => {
    error("Error: ", err);
  });
</script>
