<template>
  <li>
    <a href="/#offers">{{ dico[langStore.lang].offers }}</a>
  </li>
  <li>
    <a href="/#rooms">{{ dico[langStore.lang].rooms }}</a>
  </li>
  <li>
    <a href="/#news">{{ dico[langStore.lang].news }}</a>
  </li>
  <li>
    <a href="/#login">{{ dico[langStore.lang].account }}</a>
  </li>
</template>

<script setup>
import { useLangStore } from "../../stores/lang";
import { i18n } from "../../utils/i18n";

const langStore = useLangStore();
const dico = i18n;
</script>
