<template >
  <main v-if="sections.length" class="h-full w-full overflow-hidden">
    <HeaderSection :title="sections[0].title" :uri="sections[0].uri" />
    <SignUpForm @connectionStatus="(data) => {sayHello(data)}"/>
    <FooterSection :title="sections[7].title" :uri="sections[7].uri" />
  </main>
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