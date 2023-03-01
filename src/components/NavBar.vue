<template>

    <nav class="px-[8.6vw] pt-[1.04vw] flex flex-row">
        <img :src="imgURL + 'green-rectangle-logo.jpg'">
        <div class="pl-[8.9vw] font-title text-secondary text-2xl flex flex-row w-full justify-between">
            <ul class="flex flex-row w-full h-full items-center justify-between">
                <li><a href="#offers">Offres</a></li>
                <li><a href="#">Chambres</a></li>
                <li><a href="#">Actualités</a></li>
                <li><a href="#">Mon compte</a></li>
            </ul>
            <select v-model="langStore.lang" @change="setLang($event.target.value)"
                    class="ml-8 text-tertiary h-1/2 my-auto">
                <option value="fr_FR" style="background-image: url('/src/assets/artichaut.svg');"></option>
                <option value="en_EN">EN</option>
            </select>
        </div>
    </nav>

</template>

<script setup>

import { ref } from 'vue';
import { useLangStore } from '../stores/lang';
import { log } from '../utils/console';

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