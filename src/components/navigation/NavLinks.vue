<template>
  <li class="hover:text-tertiary">
    <RouterLink :to="'/#offers'">{{ dico[langStore.lang].offers }}</RouterLink>
  </li>
  <li class="hover:text-tertiary">
    <RouterLink :to="'/#rooms'">{{ dico[langStore.lang].rooms }}</RouterLink>
  </li>
  <li class="hover:text-tertiary">
    <RouterLink :to="'/#news'">{{ dico[langStore.lang].news }}</RouterLink>
  </li>
  <li class="hover:text-tertiary">
    <RouterLink :to="'/profile'">{{ dico[langStore.lang].account }}</RouterLink>
  </li>
</template>

<script setup>
import { useLangStore } from "../../stores/lang";
import { i18n } from "../../utils/i18n";
import { RouterLink } from "vue-router";

const langStore = useLangStore();
const dico = i18n;
</script>
