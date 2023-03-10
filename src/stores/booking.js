import { defineStore } from "pinia";

export const useBookingStore = defineStore("Booking", {
  state: () => {
    return {
      id: 0,
    };
  },

  actions: {
    setId(bookingId) {
      this.id = bookingId;
    },
  },
});
