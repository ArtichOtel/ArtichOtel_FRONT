<template>
  <Modal @close="modalClose()" :modalActive="modalActive">
    <RoomPresentation @close="modalClose()" />
  </Modal>
  <div class="flex flex-col mt-5 h-full">
    <div class="flex md:h-full h-[50rem]">
      <div
        class="flex flex-col bg-secondary shadow-lg bg-secondary md:flex-row w-full"
      >
        <img
          class="h-2/4 w-full object-cover md:h-auto md:w-1/2"
          src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
          alt=""
        />
        <div
          class="flex flex-col items-center md:w-full p-6 md:gap-8 md:gap-2 mt-2 mb-2"
        >
          <h2 class="font-title text-titleSmall font-bold">
            {{ availability.title[langStore.lang] }}
          </h2>

          <div>
            <p
              class="font-content text-titleBase font-bold flex"
              id="pricePerson"
            >
              {{ availability.price }}€
              <span class="text-titleSmall font-content flex items-center"
                >&nbsp;{{ dico[langStore.lang].night_people }}</span
              >
            </p>
          </div>

          <div class="flex flex-col items-center w-full mt-5 gap-5">
            <h2 class="block mb-2 text-sm font-title text-titleSmall">
              {{ dico[langStore.lang].numbersPeople }}
              <span id="rangeValue" class="font-bold">{{ nbrPers }}</span>
            </h2>
            <input
              id="range"
              type="range"
              min="1"
              max="3"
              value="1"
              @change="setTotalPrice($event.target.value)"
              class="w-2/5 h-2 bg-secondary mx-auto rounded-lg appearance-none cursor-pointer dark:bg-primary"
            />
            <p class="text-center text-titleSmall" id="totalPrice">
              {{ totalPrice }} €
            </p>
          </div>

          <div
            class="flex flex-col md:justify-center items-center mt-5 w-full h-2/5"
          >
            <button
              type="button"
              class="w-3/5 h-15 text-xl tracking-wider text-tertiary font-semibold font-content uppercase text-titleSmall bg-accent px-6 pt-2.5 pb-2 leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              @click="getBooking()"
            >
              {{ dico[langStore.lang].book }}
            </button>

            <button @click="modalOpen()" class="mx-auto mt-5 underline">
              {{ dico[langStore.lang].details }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bookingSearch",
};
</script>
<script setup>
import { ref } from "vue";
import { useLangStore } from "../../stores/lang";
import { useQueryDatesStore } from "../../stores/queryDates";
import { i18n } from "../../utils/i18n";
import Modal from "../Modal.vue";
import RoomPresentation from "./RoomPresentation.vue";

const modalActive = ref(false);

const dico = i18n;
const props = defineProps({
  availability: null,
});

const langStore = useLangStore();
const queryDate = useQueryDatesStore();
const totalPrice = ref(props.availability.price * queryDate.nOfNights);
const nbrPers = ref(1);

// Set le prix & calcul
const setTotalPrice = (range) => {
  totalPrice.value = range * props.availability.price * queryDate.nOfNights;
  nbrPers.value = range;
};

const modalClose = () => {
  modalActive.value = false;
};
const modalOpen = () => {
  modalActive.value = true;
};
</script>
