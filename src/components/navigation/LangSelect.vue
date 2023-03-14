<template>
    <div class="my-auto flex flex-row relative font-title">
        <label for="locale"><img :src="'/src/assets/icon-' + langStore.lang + '.jpg'" alt=""></label>
        <select v-model="langStore.lang"
                @change="langStore.setLanguage($event.target.value)"
                class="text-transparent h-full bg-transparent w-full absolute text-xl" id="locale">
            <option value="fr_FR" class="text-tertiary">FR</option>
            <option value="en_EN" class="text-tertiary">EN</option>
        </select>
    </div>
</template>

<script setup>
import { useLangStore } from '../../stores/lang';

const langStore = useLangStore()


</script>