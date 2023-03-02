<template>

    <nav class="px-[8.6vw] pt-[1.04vw] flex-row justify-between hidden lg:flex">
        <img :src="imgURL + 'green-rectangle-logo.jpg'">
        <div class="pl-[8.9vw] font-title text-secondary text-xl flex flex-row w-8/12 justify-between">
            <ul class="flex flex-row w-full h-full items-center justify-between">
                <li><a href="#offers">Offres</a></li>
                <li><a href="#">Chambres</a></li>
                <li><a href="#">Actualités</a></li>
                <li><a href="#">Mon compte</a></li>
            </ul>
            <div class="ml-[4vw] my-auto flex flex-row relative">
                <label for="locale"><img :src="'src/assets/icon-' + langStore.lang + '.jpg'" alt=""></label>
                <select v-model="langStore.lang" @change="setLang($event.target.value)"
                        class="text-transparent h-full bg-transparent w-full absolute" id="locale">
                    <option value="fr_FR" class="text-tertiary">FR<img src="src/assets/icon-fr_FR.jpg" alt=""></option>
                    <option value="en_EN" class="text-tertiary">EN</option>
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