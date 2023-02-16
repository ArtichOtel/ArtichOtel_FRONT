<template >
  <HeaderSection />
  <LoginForm @connectionStatus="(data) => sayHello(data)"/>
  <FooterSection />
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

function sayHello(data) {
  console.log("vous êtes connecté")
  console.group(data)
}

</script>