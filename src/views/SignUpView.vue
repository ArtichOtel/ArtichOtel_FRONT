<template >
  <HeaderSection />
  <main class="h-full w-full overflow-hidden">
    <SignUpForm @connectionStatus="(data) => {sayHello(data)}"/>
  </main>
  <FooterSection v-if="sections.length"  :title="sections[7].title" :uri="sections[7].uri" />
</template>

<script>
export default {
  name: "SignUpView"
}
</script>

<script setup>

import HeaderSection from "../components/sections/HeaderSection.vue";
import FooterSection from "../components/sections/FooterSection.vue";
import SignUpForm from "../components/forms/SignUpForm.vue";
import router from "../router";

const props = defineProps({
  sections: Array
})




</script>