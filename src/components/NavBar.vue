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
            <div class="ml-8 my-auto flex flex-row">
                <label for="locale"><img :src="'src/assets/icon-' + langStore.lang + '.jpg'" alt=""></label>
                <select v-model="langStore.lang" @change="setLang($event.target.value)"
                        class="text-tertiary w-4" id="locale">
                    <option value="fr_FR">FR<img src="src/assets/icon-fr_FR.jpg" alt=""></option>
                    <option value="en_EN">EN</option>
                </select>
            </div>
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