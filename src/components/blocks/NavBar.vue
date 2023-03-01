<template>

    <nav class="px-[8.6vw] pt-[1.04vw] flex flex-row">
        <img :src="imgURL + 'green-rectangle-logo.jpg'">
        <div class="pl-[8.13vw] font-title text-secondary text-2xl flex flex-row w-full justify-between">
            <ul class="flex flex-row w-full h-full items-center justify-between">
            <li>Offres</li>
            <li>Chambres</li>
            <li>Actualités</li>
            <li>Mon compte</li>
        </ul>
        <select v-model="langStore.lang" @change="setLang($event.target.value)"
                class="ml-8 text-tertiary h-1/2 my-auto">
            <option value="fr_FR">FR</option>
            <option value="en_EN">EN</option>
        </select>
        </div>
    </nav>

</template>

<script setup>

import { ref } from 'vue';
import { useLangStore } from '../../stores/lang';
import { log } from '../../utils/console';

const imgURL = ref(import.meta.env.VITE_IMG_URL)
const langStore = useLangStore()

function setLang(selectedLang) {

    switch (selectedLang) {

        case 'fr_FR':
            langStore.setToFrench()
            break;

        case 'en_EN':
            langStore.setToEnglish()
            break;

        default:
            langStore.setToFrench()
            break;
    }
}

</script>