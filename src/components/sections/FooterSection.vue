<template>
  <footer class="text-center md:text-left bg-primary text-secondary">
    <div class="px-16 py-20 flex flex-col md:justify-between md:flex-row gap-20">

      <div v-if="loaded" class="flex flex-col gap-3">
        <h3 class="uppercase font-semibold mb-4 flex justify-center md:justify-start" >
          {{footerDataOne[0].title}}
        </h3>
        <div class="flex items-center justify-center md:justify-start mb-4 cursor-pointer hover:invert"
             v-for="linkOne in footerDataOne" :key="linkOne.title">
          <a :href="linkOne.url" >
            <img class="inline invert" v-if="linkOne.icon"
                 :src="apiIconURL + linkOne.icon + '.svg'"
                 :alt="linkOne.text"/>
            <span>{{ linkOne.text }}</span>
          </a>
        </div>
      </div>

      <div v-if="loaded" class="flex flex-col gap-3">
        <h3 class="uppercase font-semibold mb-4 flex justify-center md:justify-start" >
          {{footerDataTwo[0].title}}
        </h3>
        <div class="flex items-center justify-center md:justify-start mb-4 cursor-pointer hover:invert"
             v-for="linkTwo in footerDataTwo" :key="linkTwo.title">
          <a :href="linkTwo.url" >
            <img class="inline invert" v-if="linkTwo.icon"
                 :src="apiIconURL + linkTwo.icon + '.svg'"
                 :alt="linkTwo.text"/>
            <span>{{ linkTwo.text }}</span>
          </a>
        </div>
      </div>

      <div v-if="loaded" class="flex flex-col gap-6">
        <h3 class="uppercase font-semibold mb-4 flex justify-center md:justify-start " >
          {{footerDataThree[0].title}}
        </h3>
        <div class="flex items-center justify-center md:justify-start mb-4 cursor-pointer hover:invert"
           v-for="link in footerDataThree" :key="link.title">
          <img class="inline invert" v-if="link.icon"
               :src="apiIconURL + link.icon + '.svg'"
               :alt="link.text"/>
          <span>{{ link.text }}</span>
        </div>
      </div>

    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",
};
</script>
<script setup>
import axios from "axios";
import { ref } from "vue";
import {error, log} from "../../utils/console";

const apiIconURL = ref(import.meta.env.VITE_ICON_URL)
const footerDataOne = ref([]);
const footerDataTwo = ref([]);
const footerDataThree = ref([]);
const loaded = ref(false);

const props = defineProps({
  title: String,
  uri: String,
});

axios.get(`${import.meta.env.VITE_API_BASE_URL}${props.uri}`)
    .then((resp) => {
      // footerDataOne.value = resp.data;
      log("footer : ", resp.data);

      resp.data.forEach((element) => {
        if (element.footers_id === 1) {
          footerDataOne.value.push(element);
          // console.log("footer 1 : ", element);
        }
        if (element.footers_id === 2) {
          footerDataTwo.value.push(element);
          // console.log("footer 2 : ", element);
        }
        if (element.footers_id === 3) {
          footerDataThree.value.push(element);
          // console.log("footer 3 : ", element);
        }
      });

    })
    .then(() => {
      loaded.value = true;
    })
    .catch(err => {
      error(err)
    })

</script>
