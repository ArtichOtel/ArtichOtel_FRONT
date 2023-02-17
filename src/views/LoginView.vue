<template >
  <main v-if="sections.length" class="h-full w-full overflow-hidden">
    <HeaderSection :title="sections[0].title" :uri="sections[0].uri" />
    <LoginForm @connectionStatus="(data) => {sayHello(data)}"/>
    <FooterSection :title="sections[7].title" :uri="sections[7].uri" />
  </main>
</template>

<script>
export default {
  name: "LoginView"
}
</script>

<script setup>

import HeaderSection from "../components/sections/HeaderSection.vue";
import FooterSection from "../components/sections/FooterSection.vue";
import LoginForm from "../components/forms/LoginForm.vue";
import router from "../router";

const props = defineProps({
  sections: Array
})

const emit = defineEmits(
    {'login': {}}
)

function sayHello(data) {
  console.log("vous êtes connecté")
  //console.group(data)

  if (data.token) {
    emit('login')
  }

/*  if (data.role === "admin") {
    console.log("redirect to admin panel")
    router.push("/admin")
  }*/

  router.push("/")
}



</script>