<template>
    <div class="my-auto flex flex-row relative font-title">
        <label for="locale"><img :src="'src/assets/icon-' + langStore.lang + '.jpg'" alt=""></label>
        <select v-model="langStore.lang" @change="setLang($event.target.value)"
                class="text-transparent h-full bg-transparent w-full absolute text-xl" id="locale">
            <option value="fr_FR" class="text-tertiary">FR<img src="src/assets/icon-fr_FR.jpg" alt=""></option>
            <option value="en_EN" class="text-tertiary">EN</option>
        </select>
    </div>
</template>

<script setup>
import { useLangStore } from '../../stores/lang';


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