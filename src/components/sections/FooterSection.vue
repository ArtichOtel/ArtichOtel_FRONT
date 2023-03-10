<template>
  <footer
    v-if="footerStore.getLinks()"
    class="text-center md:text-left bg-primary text-secondary z-0"
  >
    <div
      class="py-8 px-8 md:py-[9vw] md:px-[8.6vw] flex flex-col md:justify-between md:flex-row gap-20"
    >
      <div
        class="flex flex-col"
        v-for="(footer, i) in footerStore.getCategory()"
        :key="i"
      >
        <h2
          class="uppercase font-semibold font-title text-titleSmall lg:text-titleBase mb-8 flex justify-center md:justify-start"
        >
          {{ footer.title[langStore.lang] }}
        </h2>
        <div v-for="(link, j) in footerStore.getLinks()" :key="j">
          <div
            class="flex items-center justify-center md:justify-start mb-8 cursor-pointer tracking-wider hover:invert"
            :class="[link.footer_id === i + 1 ? 'block' : 'hidden']"
            :key="link.title"
          >
            <a>
              <img
                class="inline invert mr-3"
                v-if="link.icon"
                :src="apiIconURL + link.icon + '.svg'"
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
import { ref } from "vue";
import { error, log } from "../../utils/console";
import { useLangStore } from "../../stores/lang";
import { useFooterStore } from "../../stores/sections";

const apiIconURL = ref(import.meta.env.VITE_API_ICON_URL);
const langStore = useLangStore();
const footerStore = useFooterStore();

const props = defineProps({
  title: Object,
  uri: String,
});
</script>
