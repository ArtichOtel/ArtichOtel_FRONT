<template>
  <section
    class="relative h-screen flex justify-center items-center flex-col gap-10"
  >
    <h1
      class="text-7xl font-title text-secondary bg-primary rounded-lg py-5 px-12"
    >
      La page n'a pas était trouvé
    </h1>
    <RouterLink
      to="/"
      class="bg-accent rounded-lg py-2 px-12 text-2xl text-secondary font-content underline hover:text-tertiary"
      >Retour à l'accueil</RouterLink
    >
  </section>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>

<script setup>
import { RouterLink } from "vue-router";
</script>
