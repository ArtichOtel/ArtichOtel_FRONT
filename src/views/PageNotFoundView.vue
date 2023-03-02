<template>
  <HeaderSection />
  <main v-if="sections.length" class="h-full w-full overflow-hidden">
    <PageNotFound />
  </main>
</template>

<script>
export default {
  name: "PageNotFoundView",
};
</script>

<script setup>
import HeaderSection from "../components/sections/HeaderSection.vue";
import PageNotFound from "../components/PageNotFound.vue";
import router from "../router";

const props = defineProps({
  sections: Array,
});
</script>
