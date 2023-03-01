<template>

    <nav class="px-[8.6vw] pt-[1.04vw] flex flex-row">
        <img :src="imgURL + 'green-rectangle-logo.jpg'">
        <div class="pl-[8.13vw] font-title text-secondary text-2xl flex flex-row w-full justify-between">
            <button>Offres</button>
            <button>Chambres</button>
            <button>Actualités</button>
            <button>Mon compte</button>
            <button>
                Lang: {{ langStore.lang }}
                <select v-model="langStore.lang" @change="setLang($event.target.value.toString())" style="color: black;">
                    <option value="fr_FR">FR</option>
                    <option value="en_EN">EN</option>
                </select>
            </button>
        </div>
    </nav>

</template>

<script setup>

import { ref } from 'vue';
import { useLangStore } from '../stores/lang';
import { log } from '../utils/console';

const imgURL = ref(import.meta.env.VITE_IMG_URL)
const langStore = useLangStore()
const currentLang = ref(langStore.lang)

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