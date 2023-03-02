<template>
  <footer class="text-center md:text-left bg-primary text-secondary">
    <div
      class="py-8 px-8 md:py-[9vw] md:px-[8.6vw] flex flex-col md:justify-between md:flex-row gap-20"
    >
      <div
        v-if="loaded"
        class="flex flex-col"
        v-for="(footer, index) in footers"
      >
        <h2
          class="uppercase font-semibold font-title text-titleSmall lg:text-titleBase mb-8 flex justify-center md:justify-start"
        >
          {{ footer.title[langStore.lang] }}
        </h2>
        <div v-for="link in links">
          <div
            class="flex items-center justify-center md:justify-start mb-8 cursor-pointer tracking-wider hover:invert"
            :class="[link.footer_id === index + 1 ? 'block' : 'hidden']"
            :key="link.title"
          >
            <a>
              <img
                class="inline invert"
                v-if="link.icon"
                :src="apiIconURL + link.icon + '.svg'"
                :alt="link.text"
              />
              <span>{{ link.text[langStore.lang] }} </span>
            </a>
          </div>
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
