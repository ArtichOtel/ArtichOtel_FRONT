<template>
  <header class="fixed w-full z-50" v-if="contactStore.rawVal">
    <div
      class="relative w-full flex flex-wrap items-center justify-between py-1 bg-primary text-secondary shadow-lg navbar navbar-expand-lg"
    >
      <div
        class="w-full flex flex-wrap items-center justify-between px-6"
      >
        <!-- Logo -->
        <div class="svg-secondary">
          <RouterLink :to="'/'">
            <img :src="iconURL + 'artichaut-mobile-logo.svg'" alt="">
          </RouterLink>
        </div>

        <div class="hidden md:flex flex-row pl-[6vw] items-center gap-5">
          <img :src="iconURL + 'location-pin.svg'" alt="" class="svg-secondary">
          <span class="font-content">{{ contactStore.rawVal[1].text[langStore.lang] }}</span>
        </div>

        <div
          class="flex-grow items-center"
          id="navbarSupportedContent1"
        >
          <!-- Left links -->
          <!-- <img src="https://picsum.photos/80/80" alt="" /> -->
        </div>
        <!-- Collapsible wrapper -->

        <!-- Right elements -->
        <div class="flex items-center relative gap-2 lg:gap-10">
          <div class="hidden lg:flex gap-5">
            <a class="font-content" href="contact:info@hotelartichaut.fr">
              <img :src="iconURL + contactStore.rawVal[2].icon + '.svg'" alt="logo-email-artichotel" class="float-left mr-3 svg-secondary"/>
              <span> {{ contactStore.rawVal[2].text[langStore.lang] }}</span>
            </a>
          </div>
          <div class="flex gap-5">
            <a class="font-content" href="tel:+33475000000">
              <img :src="iconURL + contactStore.rawVal[0].icon + '.svg'" alt="logo-telephone-artichotel" class="float-left mr-3 svg-secondary"/>
              <span>{{ contactStore.rawVal[0].text[langStore.lang] }}</span>
            </a>
          </div>
          <LangSelect class="w-10 hidden lg:flex"/>
          <button class="flex lg:hidden" @click="toggleBurgerMenu">
            <img :src="iconURL + 'burger-menu.svg'" alt="" class="h-10"
            style="filter: invert(90%) sepia(1%) saturate(6429%) hue-rotate(346deg) brightness(113%) contrast(101%);">
          </button>
        </div>
        <!-- Right elements -->
      </div>
      <div class="w-full relative lg:hidden" :class="{ hidden: hiddenMenu }">
        <ul class="absolute bg-primary text-secondary px-12 py-5 right-0 flex flex-col rounded-bl-2xl">
          <NavLinks />
          <LangSelect class="w-8"/>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import router from '../../router';
import { useContactStore } from '../../stores/contact';
import { useLangStore } from '../../stores/lang';
import LangSelect from '../navigation/LangSelect.vue';
import NavLinks from '../navigation/NavLinks.vue';
import { RouterLink } from "vue-router";

const langStore = useLangStore()
const contactStore = useContactStore()
const iconURL = ref(import.meta.env.VITE_API_ICON_URL)
const hiddenMenu = ref(true)
const currentPage = ref(router.currentRoute)

function toggleBurgerMenu() {
  hiddenMenu.value = !hiddenMenu.value
}

</script>

<style scoped></style>
