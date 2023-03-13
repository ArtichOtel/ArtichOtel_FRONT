<template>
    <div class="relative">
        <HeaderSection />

        <div v-if="heroBg"
        class="h-full w-full overflow-hidden scroll-smooth bg-tertiary/50"
        :style="{backgroundImage: 'url(' + heroBg + ')', backgroundBlendMode: 'overlay', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }">

        <div class="relative mt-12">
            <NavBar />
            <main class="h-full w+full mx-[8.6vw] my-[4.6vw]
            bg-secondary">
            <div class="flex flex-row p-[2.6vw]">
                <div class="flex flex-col items-center">
                    <!-- <div class="w-[10.4vw] h-[10.4vw] rounded-[50%] border-4 border-accent bg-no-repeat bg-cover bg-center"
                        :style="{backgroundImage: 'url(' + 'http://127.0.0.1/img/green-rectangle-logo.jpg' + ')'}">
                    </div> -->
                    <img :src="iconURL + 'artichaut-mobile-logo.svg'" alt=""
                        class="w-[10.4vw] h-[10.4vw] rounded-[50%] border-4 border-accent
                                bg-primary bg-no-repeat bg-cover bg-center align-center py-3">
                    <div class="bg-primary font-title text-secondary text-center rounded
                                mt-[0.8vw] h-[2.6vw] flex px-2">
                        <span class="m-auto">{{ userData.pseudo }}</span>
                    </div>
                    <div class="mt-[2.6vw] bg-primary text-tertiary font-content p-[0.8vw] flex flex-col gap-[0.8vw] mb-[10vw]">
                        <button class="bg-white flex rounded h-[2.6vw] px-2">
                            <span class="m-auto">Coordonées</span>
                        </button>
                        <button class="bg-white flex rounded h-[2.6vw] px-2">
                            <span class="m-auto">Fidélité</span>
                        </button>
                        <button class="bg-white flex rounded h-[2.6vw] px-2">
                            <span class="m-auto">Historique</span>
                        </button>
                        <button class="bg-white flex rounded h-[2.6vw] px-2">
                            <span class="m-auto">Préférences</span>
                        </button>
                        <button class="bg-orange-700 flex rounded h-[2.6vw] px-2 mt-[2.6vw] text-white">
                            <span class="m-auto">Supprimer mon compte</span>
                        </button>
                    </div>
                </div>
                <div class="ml-[2.6vw] bg-primary w-full">
                    
                </div>
            </div>
        </main>
    </div>
</div>

<FooterSection />
</div>

</template>

<script setup>

import axios from 'axios';
import { ref } from 'vue';
import NavBar from '../components/navigation/NavBar.vue';
import FooterSection from '../components/sections/FooterSection.vue';
import HeaderSection from '../components/sections/HeaderSection.vue';
import { useLangStore } from '../stores/lang';
import { i18n } from '../utils/i18n';

const langStore = useLangStore();
const dico = i18n;
const heroBg = ref();
const userData = ref();
const iconURL = ref(import.meta.env.VITE_API_ICON_URL)

axios.get(`${import.meta.env.VITE_API_BASE_URL}/hero`)
.then((res) => {
    heroBg.value = res.data[0][0].url_image
})
.catch((err) => {
    console.log(err)
})

axios.get(`${import.meta.env.VITE_API_BASE_URL}/user/${window.sessionStorage.getItem('id')}`, {
    headers: {
        'Authorization': `Bearer ${window.sessionStorage.getItem('token')}`
    }
})
    .then((res) => {
        userData.value = res.data
    })


</script>