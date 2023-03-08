<template >
  <HeaderSection />
  <main class="w-full overflow-hidden">
    <div class="relative h-full mt-12 bg-primary/40 py-8 px-8 md:py-[4vw] md:px-[8.6vw]">

      <div class="flex flex-col justify-center items-center bg-secondary">
        <h2 class="font-title text-titleBase md:text-titleMed mt-[4vw] mb-[2vw]">Réservation</h2>

        <form class="mb-[2vw] tracking-wider">

          <div class="h-96 mb-16 bg-red-200 flex justify-center items-center">
            présentation de la chambre
          </div>

<!--  optional services      -->
          <div class="mb-16" >
            <h3 class="font-title text-titleBase mb-4">Sélectionnez des options</h3>
            <ul>
              <li v-for="option in options" v-bind:key="option.id">
                <label class="flex flex-row mb-2">
                  <input
                    type="checkbox"
                    :value="option.id"
                    class="mr-4"
                />
                  <span>{{option.name[langStore.lang]}}</span>
                  <span class="flex-1 border-b border-b-primary h-0 mt-4 mx-1"></span>

                  <span class="">{{option.u_price}} €</span>

                </label>
              </li>
            </ul>

          </div>

<!--  total        -->
          <div class="mb-16" >
            <h3 class="font-title text-titleBase mb-4">Prix du séjour</h3>
            <p>
              {{totalPrice}} €
            </p>
          </div>


          <div class="flex flex-col items-center gap-4">
            <button type="button" v-on:click="checkout"
                    class="bg-accent flex justify-center items-center w-64 h-9 text-xl tracking-wider text-tertiary font-semibold font-content uppercase"
            >Réserver</button>

            <button type="button" v-on:click="cancel"
                    class="bg-red-200 flex justify-center items-center w-64 h-9 text-xl tracking-wider text-tertiary font-semibold font-content uppercase"
            >Annuler</button>
          </div>
        </form>

      </div>


    </div>

  </main>
  <FooterSection v-if="sections.length" :title="sections[7].title" :uri="sections[7].uri" />
</template>

<script>
export default {
  name: "SignUpView"
}
</script>

<script setup>

import HeaderSection from "../components/sections/HeaderSection.vue";
import FooterSection from "../components/sections/FooterSection.vue";
import router from "../router";
import {useQueryDatesStore} from "../stores/queryDates";
import {computed, ref, toRaw} from "vue";
import { i18n } from "../utils/i18n";
import { useLangStore } from "../stores/lang";
import {error, log} from "../utils/console";
import axios from "axios";

// check if booking can be performed
const queryDates = useQueryDatesStore()
// TODO : change queryDates with validDates
if (!queryDates.end.date || !queryDates.start.date) {
  router.back()
}


const props = defineProps({
  sections: Array
})

const langStore = useLangStore()
const dico = i18n

const options = ref()
const totalPrice= ref(0)


axios
    .get(`${import.meta.env.VITE_API_BASE_URL}/optional-services`)
    .then((resp) => {
      //log(resp.data)
      options.value = toRaw(resp.data.map(i => i))
    })
    .catch(err => {
      error(err)
})

function cancel() {
  router.push("/selection")
}
function checkout() {
  router.push("/booking")
}

</script>


<!--

                    v-on:input="checkboxVal = $event.target.value"



-->