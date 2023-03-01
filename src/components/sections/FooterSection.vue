<template>
  <footer class="text-center md:text-left bg-primary text-secondary">
    <div
      class="py-8 px-8 md:py-[9vw] md:px-[8.6vw] flex flex-col md:justify-between md:flex-row gap-20"
    >
      <div v-if="loaded" class="flex flex-col gap-3">
        <h3
          class="uppercase font-semibold font-title mb-4 flex justify-center md:justify-start"
        >
          {{ footers[0].title[langStore.lang] }}
        </h3>

        <div
          class="flex items-center justify-center md:justify-start mb-4 cursor-pointer tracking-wider hover:invert"
          v-for="linkOne in links"
          :key="linkOne.title"
        >
          <a v-if="linkOne.footer_id === 1" :href="linkOne.url">
            <img
              class="inline invert"
              v-if="linkOne.icon"
              :src="apiIconURL + linkOne.icon + '.svg'"
              :alt="linkOne.text"
            />
            <span> {{ linkOne.text[langStore.lang] }} </span>
          </a>
        </div>
      </div>
      <!-- Footer 2 -->
      <div v-if="loaded" class="flex flex-col gap-3">
        <h3
          class="uppercase font-semibold font-title mb-4 flex justify-center md:justify-start"
        >
          {{ footers[1].title[langStore.lang] }}
        </h3>
        <div
          class="flex items-center justify-center md:justify-start mb-4 cursor-pointer tracking-wider hover:invert"
          v-for="linkTwo in links"
          :key="linkTwo.title"
        >
          <a v-if="linkTwo.footer_id === 2">
            <img
              class="inline invert"
              v-if="linkTwo.icon"
              :src="apiIconURL + linkTwo.icon + '.svg'"
              :alt="linkTwo.text"
            />
            <span>{{ linkTwo.text[langStore.lang] }} </span>
          </a>
        </div>
      </div>

      <div v-if="loaded" class="flex flex-col gap-6">
        <h3
          class="uppercase font-semibold font-title mb-4 flex justify-center md:justify-start"
        >
          {{ footers[2].title[langStore.lang] }}
        </h3>
        <div
          class="flex items-center justify-center md:justify-start mb-4 cursor-pointer tracking-wider hover:invert"
          v-for="linkThree in links"
          :key="linkThree.title"
        >
          <a v-if="linkThree.footer_id === 3">
            <img
              class="inline invert"
              v-if="linkThree.icon"
              :src="apiIconURL + linkThree.icon + '.svg'"
              :alt="linkThree.text"
            />
            <span>{{ linkThree.text[langStore.lang] }}</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<!-- <div
          class="flex items-center justify-center md:justify-start mb-4 cursor-pointer tracking-wider hover:invert"
          v-for="linkOne in footerDataOne"
          :key="linkOne.title"
        >
          <a :href="linkOne.url">
            <img
              class="inline invert"
              v-if="linkOne.icon"
              :src="apiIconURL + linkOne.icon + '.svg'"
              :alt="linkOne.text"
            />
            <span>{{ linkOne.text }}</span>
          </a>
        </div>
      </div> -->

<script>
export default {
  name: "FooterSection",
};
</script>
<script setup>
import axios from "axios";
import { ref } from "vue";
import { error, log } from "../../utils/console";
import { useLangStore } from "../../stores/lang";

const apiIconURL = ref(import.meta.env.VITE_ICON_URL);
const langStore = useLangStore();
const footers = ref([]);
const links = ref([]);

const loaded = ref(false);

const props = defineProps({
  title: Object,
  uri: String,
});

axios
  .get(`${import.meta.env.VITE_API_BASE_URL}${props.uri}`)
  .then((resp) => {
    console.log("footer : ---------> ", resp.data);
    footers.value = resp.data[0];
    links.value = resp.data[1];
  })
  .then(() => {
    loaded.value = true;
  })
  .catch((err) => {
    error(err);
  });
</script>
