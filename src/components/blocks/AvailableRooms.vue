<template>
  <Modal
    @close="modalClose()"
    :modalActive="modalActive"
    :title="'Chambre standard'"
  >
    <RoomPresentation />
  </Modal>
  <div class="flex flex-col mt-5 static">
    <div class="flex md:h-full h-[50rem]">
      <div
        class="flex flex-col bg-secondary shadow-lg bg-secondary md:flex-row w-full"
      >
        <img
          class="h-2/4 w-full object-cover md:h-auto md:w-1/2"
          :src="'/images/room-preview.png'"
          alt="Room preview"
        />
        <div
          class="flex flex-col items-center justify-center md:w-full p-6 md:gap-8 md:gap-2 mx-auto"
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
              class="w-2/5 h-2 bg-primary mx-auto rounded-lg appearance-none cursor-pointer"
            />
            <p class="text-center text-titleSmall" id="totalPrice">
              {{ totalPrice }} €
            </p>
          </div>

          <div class="flex flex-col md:justify-center items-center mt-5 w-full">
            <button
              type="button"
              class="w-3/5 h-15 text-xl tracking-wider text-tertiary font-semibold font-content uppercase text-titleSmall bg-accent px-6 pt-2.5 pb-2 leading-normal shadow-[0_4px_9px_-4px_#3b71ca]  bg-[length:1000px] bg-left hover:bg-center transition-all duration-300
            bg-gradient-to-r from-transparent via-[rgba(255,255,254,0.001)] via-[rgba(255,255,254,0.01)] via-[rgba(255,255,254,0.01)] via-white/50 to-transparent"
              @click="initiateBooking()"
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

<script setup>
/* eslint-disable no-unused-vars */
import { ref } from "vue";
import axios from "axios";
import router from "../../router";

import { i18n } from "../../utils/i18n";
import { error, log } from "../../utils/console";

import Modal from "../Modal.vue";
import RoomPresentation from "./RoomPresentation.vue";

import { useLangStore } from "../../stores/lang";
import { useQueryDatesStore } from "../../stores/queryDates";
import { useBookingStore } from "../../stores/booking";
import { useRoomSelectionStore } from "../../stores/roomSelection";


const modalActive = ref(false);

const dico = i18n;
const props = defineProps({
  availability: null,
});

const langStore = useLangStore();
const queryDate = useQueryDatesStore();
const roomSelection = useRoomSelectionStore();
const bookingStore = useBookingStore();

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

const checkIfLogged = () => {
  return !!window.sessionStorage.getItem("token");
};

function initiateBooking() {
  if (checkIfLogged()) {
    //router.push("/checkout")
    const updateRoomSelectionStore = new Promise((resolve, reject) => {
      resolve(
        roomSelection.set({
          nightPrice: props.availability.price,
          type: props.availability.type,
          description: props.availability.description,
          nOfPers: nbrPers.value,
          startDate: queryDate.start.iso,
          endDate: queryDate.end.iso,
          nOfNights: queryDate.nOfNights,
          roomId: props.availability.room_id,
        })
      );
    });

    updateRoomSelectionStore
      .then(() => {
        console.log("ici : updateeee !");

        const payload = {
          begin_date: roomSelection.val.startDate,
          end_date: roomSelection.val.endDate,
          room_id: roomSelection.val.roomId,
          customer_id: window.sessionStorage.getItem("customer"),
          status: "pending",
          nbrs_people: nbrPers.value,
        };

        return axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/booking`,
          payload,
          {
            headers: {
              Authorization: `Bearer ${window.sessionStorage.getItem("token")}`,
            },
          }
        );
      })
      .then((resp) => {
        console.log(resp);
        bookingStore.setId(resp.data.id);
      })
      .then(() => router.push("/booking"))

      .catch((err) => error(err));
  } else {
    router.push("/login");
  }
}
</script>
