<template>

    <nav class="px-[8.6vw] pt-[1.04vw] flex flex-row">
        <img :src="imgURL + 'green-rectangle-logo.jpg'">
        <div class="pl-[8.13vw] font-title text-secondary text-2xl flex flex-row w-full justify-between">
            <button>Offres</button>
            <button>Chambres</button>
            <button>Actualités</button>
            <button>Mon compte</button>
            <button>
                Lang: {{ lang }}
                <select v-model="lang" style="color: black;">
                    <option value="fr_FR">FR</option>
                    <option value="en_EN">EN</option>
                </select>
            </button>
        </div>
    </nav>

</template>

<script setup>

import { ref } from 'vue';

const imgURL = ref(import.meta.env.VITE_IMG_URL)
let lang = ref('fr_FR')

</script>