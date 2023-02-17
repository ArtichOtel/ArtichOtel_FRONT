<template>
  <footer class="text-center lg:text-left bg-gray-100 text-gray-600 p-10">
    <div class="mx-6 py-10 text-center md:text-center">
      <div class="flex flex-col md:justify-between md:flex-row gap-20">
        <div v-if="footerDataOne" class="flex flex-col gap-3">
          <h3
            class="uppercase font-semibold mb-4 flex justify-center md:justify-start"
          >
            Hôtel L'Artichaut
          </h3>
          <p class="mb-4" v-for="footerOne in footerDataOne">
            <a :href="footerOne.url" class="text-gray-600">
              {{ footerOne.title }}
            </a>
          </p>
        </div>
        <div v-if="footerDataTwo" class="flex flex-col gap-3">
          <h3
            class="uppercase font-semibold mb-4 flex justify-center md:justify-start"
          >
            Useful links
          </h3>
          <p class="mb-4" v-for="footerTwo in footerDataTwo">
            <a :href="footerTwo.url" class="text-gray-600">{{
              footerTwo.title
            }}</a>
          </p>
        </div>
        <div v-if="footerDataThree" class="flex flex-col gap-5">
          <h3
            class="uppercase font-semibold mb-4 flex justify-center md:justify-start text-center"
          >
            Contact
          </h3>
          <p
            class="flex items-center justify-center md:justify-start mb-4"
            v-for="footerThree in footerDataThree"
          >
            <img :src="footerThree.icon" :alt="footerThree.text" />
            {{ footerThree.title }}
          </p>
        </div>
      </div>
    </div>
    <div class="text-center p-6 bg-gray-200">
      <span>© 2021 Copyright:</span>
      <a
        class="text-gray-600 font-semibold"
        href="https://tailwind-elements.com/"
        >Tailwind Elements</a
      >
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",
};
</script>
<script setup>
import axios from "axios";
import { ref } from "vue";

let footerDataOne = ref([]);
let footerDataTwo = ref([]);
let footerDataThree = ref([]);

const props = defineProps({
  title: String,
  uri: String,
});

axios.get(`${import.meta.env.VITE_API_BASE_URL}${props.uri}`).then((resp) => {
  // footerDataOne.value = resp.data;
  // console.log("footer : ", resp.data);

  resp.data.forEach((element) => {
    if (element.footers_id === 1) {
      footerDataOne.value.push(element);
      // console.log("footer 1 : ", element);
    }
    if (element.footers_id === 2) {
      footerDataTwo.value.push(element);
      // console.log("footer 2 : ", element);
    }
    if (element.footers_id === 3) {
      footerDataThree.value.push(element);
      // console.log("footer 3 : ", element);
    }
  });
});

console.log("footer1 : ", footerDataOne.value);
</script>
<style scoped></style>
