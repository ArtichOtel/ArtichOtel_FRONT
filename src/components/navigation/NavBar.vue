<template>

    <nav class="px-[8.6vw] pt-[1.04vw] flex-row justify-between hidden lg:flex">
        <img :src="imgURL + 'green-rectangle-logo.jpg'">
        <div class="pl-[8.9vw] font-title text-secondary text-xl flex flex-row w-8/12 justify-between">
            <ul class="flex flex-row w-full h-full items-center justify-between">
                <NavLinks />
            </ul>
            <LangSelect />
        </div>
    </nav>

</template>

<script setup>

import { ref } from 'vue';
import LangSelect from './LangSelect.vue';
import NavLinks from './NavLinks.vue';

const imgURL = ref(import.meta.env.VITE_IMG_URL)

</script>