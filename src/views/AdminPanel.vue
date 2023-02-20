<template>
  <main v-if="isAdmin" class="bg-secondary text-tertiary h-screen">
    <h1>Admin Panel</h1>
    <SelectionSelector
        @clickOnBtn="(index) => setCurrentSection(index)" :list-of-sections="listOfSections"
    />
    <div v-if="currentSection" >
      {{currentSection}}
    </div>
    <component v-if="currentIndex" :is="listOfSections[currentIndex].comp" />
  </main>
</template>

<script>
export default {
  name: "AdminPanel"
}
</script>

<script setup>
import SelectionSelector from "../components/admin/SelectionSelector.vue";
import HeroEditor from "../components/admin/HeroEditor.vue";
import {ref} from "vue";
import axios from "axios";
import router from "../router";

const listOfSections = ref([
  {name:"Header", comp:null},
  {name:"Hero", comp:HeroEditor},
  {name:"Offres", comp:null},
  {name:"Services", comp:null},
  {name:"Actualités", comp:null},
  {name:"Vidéo", comp:null},
  {name:"Footer", comp:null},

])

const currentIndex = ref(null)
const currentSection = ref({})

const isAdmin = ref(false)

function setCurrentSection(index) {
  //console.log(index)
  currentIndex.value = index
  currentSection.value = listOfSections.value[index]
}

// check if user is admin by its token : any method on api/user need admin token
axios.get(`${import.meta.env.VITE_API_BASE_URL}/user`, {
  headers: {
    'Authorization': `Bearer ${window.sessionStorage.getItem('token')}`
  }
})
    .then((response) => {
      //console.log(response.data)

      if (response.status === 200) {
        isAdmin.value = true
      } else {
        router.push("/")
      }
    })
    .catch(err => {
      console.log(err)
      router.push("/")
    })


</script>