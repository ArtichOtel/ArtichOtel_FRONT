<template >
  <HeaderSection />
  <main class="h-full w-full overflow-hidden">
    <LoginForm @connectionStatus="(data) => {sayHello(data)}"/>
  </main>
  <FooterSection v-if="sections.length"  :title="sections[7].title" :uri="sections[7].uri" />
</template>


<script setup>

import HeaderSection from "../components/sections/HeaderSection.vue";
import FooterSection from "../components/sections/FooterSection.vue";
import LoginForm from "../components/forms/LoginForm.vue";
import router from "../router";

const props = defineProps({
  sections: Array
})

const emit = defineEmits(
    {'login': {},
      'isAdmin':{}
    }
)

function sayHello(data) {
  console.log("vous êtes connecté")
  //console.group(data)

  if (data.token) {
    emit('login')
  }

  if (data.role.toString() === "admin") {
    emit('isAdmin')
    console.log("redirect to admin panel")
    router.push("/admin")
  } else {
    router.back();
  }
}



</script>