<template>
    <div class="relative">
        <HeaderSection />

        <div v-if="heroBg"
        class="h-full w-full overflow-hidden scroll-smooth bg-tertiary/50"
        :style="{backgroundImage: 'url(' + heroBg + ')', backgroundBlendMode: 'overlay', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }">
        <Modal
            @close="modalToggle()"
            :modalActive="modalActive"
            :title="'Mot de passe modifié'">
            <PwdModifiedModal />
            <!-- TODO : Confirmation Modal -->
        </Modal>
        <div class="relative mt-12">
            <NavBar />
            <main class="h-full mx-[8.6vw] lg:my-[4.6vw] mt-20 mb-[4.6vw]
            bg-secondary">
            <div v-if="!userData" class="flex flex-col justify-center items-center gap-[1.2vw] p-4 md:p-8 lg:p-16">
              <p class="m-4 p-4">{{dico[langStore.lang].notLogged}}</p>
              <button
                type="button"
                v-on:click="goLogin"
                class="bg-accent flex justify-center items-center w-64 h-9 text-xl tracking-wider text-tertiary font-semibold font-content uppercase"
            >
              {{ dico[langStore.lang].alreadyregistered }}
            </button>
              <button
                  type="button"
                  v-on:click="goSignup"
                  class="bg-primary flex justify-center items-center w-64 h-9 text-base tracking-wider text-secondary font-semibold font-content uppercase"
              >
                {{ dico[langStore.lang].register }}
              </button>
            </div>
            <div v-else class="flex flex-col md:flex-row p-[2.6vw]">
                <div class="flex flex-col items-center">
                    <!-- <div class="w-[10.4vw] h-[10.4vw] rounded-[50%] border-4 border-accent bg-no-repeat bg-cover bg-center"
                        :style="{backgroundImage: 'url(' + 'http://127.0.0.1/img/green-rectangle-logo.jpg' + ')'}">
                    </div> -->
                    <div class="flex flex-col w-1/3 md:w-full items-center">
                        <img :src="iconURL + 'artichaut-mobile-logo.svg'" alt=""
                            class="w-full aspect-square rounded-[50%] border-4 border-accent
                                bg-primary bg-no-repeat bg-cover bg-center align-center py-3">
                        <div class="bg-primary font-title text-secondary text-center rounded
                                    mt-[0.8vw] h-full w-full p-2">
                            <span v-if="userData" class="m-auto py-2">{{ userData.pseudo }}</span>
                        </div>
                    </div>
                    
                    <div class="mt-[2.6vw] bg-primary text-tertiary font-content p-3 hidden md:flex flex-col gap-3 mb-[10vw]">
                        <button class="flex rounded h-full p-2  hover:bg-tertiary hover:text-white"
                                :class="activeSection === 'coordinates' ? 'bg-accent' : 'bg-white'"
                                @click="changeActive('coordinates')">
                            <span class="m-auto">Coordonées</span>
                        </button>
                        <button class="flex rounded h-full p-2 hover:bg-tertiary hover:text-white"
                                :class="activeSection === 'fidelity' ? 'bg-accent' : 'bg-white'"
                                @click="changeActive('fidelity')">
                            <span class="m-auto">Fidélité</span>
                        </button>
                        <button class="flex rounded h-full p-2 hover:bg-tertiary hover:text-white"
                                :class="activeSection === 'history' ? 'bg-accent' : 'bg-white'"
                                @click="changeActive('history')">
                            <span class="m-auto">Historique</span>
                        </button>
                        <button class="flex rounded h-full p-2 hover:bg-tertiary hover:text-white"
                                :class="activeSection === 'preferences' ? 'bg-accent' : 'bg-white'"
                                @click="changeActive('preferences')">
                            <span class="m-auto">Préférences</span>
                        </button>
                        <button class="bg-orange-700 flex rounded min-h-fit p-2 mt-6 text-white hover:bg-accent">
                            <span class="m-auto">Supprimer mon compte</span>
                        </button>
                    </div>
                </div>

                <div class="mt-[2.6vw] md:ml-[2.6vw] md:mt-0 bg-primary md:w-full p-5">
                    <div v-if="activeSection === 'coordinates'"
                        class="bg-secondary p-3">
                        
                        <h2 class="text-center font-title text-titleBase">Changement de mot de passe</h2>
                        
                        <form class="my-5 flex flex-col justify-center gap-10 font-content">
                            <div class="flex flex-col lg:flex-row justify-center gap-10">
                                <div class="flex flex-col w-fit self-center">
                                    <label for="password"
                                        class="text-center block mb-4 after:content-['*'] after:ml-1 after:text-red-600">
                                            Mot de passe
                                    </label>
                                    <input type="password"
                                        id="password"
                                        name="password"
                                        placeholder="***"
                                        v-model="data.password.val"
                                        class="border border-primary py-2 px-4 bg-secondary">
                                    <span class="font-content text-red-600 text-center">{{ data.password.err.display }}</span>
                                </div>

                                <div class="flex flex-col w-fit self-center">
                                    <label for="confirm"
                                        class="text-center block mb-4 after:content-['*'] after:ml-1 after:text-red-600">
                                            Confirmation
                                    </label>
                                    <input type="password"
                                        id="confirm"
                                        name="confirm"
                                        placeholder="***"
                                        v-model="data.confirm.val"
                                        @keypress.enter="changePwd"
                                        class="border border-primary py-2 px-4 bg-secondary">
                                    <span class="font-content text-red-600 text-center">{{ data.confirm.err.display }}</span>
                                </div>
                            </div>
                            

                            <div class="flex flex-col items-center gap-4">
                                <button
                                    type="button"
                                    @click="changePwd"
                                    class="bg-accent flex justify-center items-center w-64 h-9 text-xl tracking-wider
                                        text-tertiary font-semibold font-content uppercase"
                                >
                                {{ dico[langStore.lang].confirm }}

                                </button>
                            </div>    
                        </form>
                    </div>
                    <div v-else class="text-center bg-secondary font-content text-titleSmall w-fit m-auto p-5">
                        Fonctionnalité pas encore présente.
                    </div>
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
import Modal from '../components/Modal.vue';
import PwdModifiedModal from '../components/blocks/PwdModifiedModal.vue';
import NavBar from '../components/navigation/NavBar.vue';
import FooterSection from '../components/sections/FooterSection.vue';
import HeaderSection from '../components/sections/HeaderSection.vue';
import { useLangStore } from '../stores/lang';
import { i18n } from '../utils/i18n';
import router from "../router";

const langStore = useLangStore();
const dico = i18n;
const heroBg = ref();
const userData = ref();
const iconURL = ref(import.meta.env.VITE_API_ICON_URL)
const pwdREGEX = /^(?=.{8,})(?=.*[?!@#$%^&*=|£²³`"'ø§€])/
const modalActive = ref(false)

const data = ref({
    password: {
        val: null,
        err: {
            ifEmpty: "Veuillez entrer un mot de passe",
            ifBad: "Le mot de passe doit contenir 8 caractères dont au moins 1 spécial",
            display: null,
        },
    },
    confirm: {
        val: null,
        err: {
            ifEmpty: "Veuillez entrer un mot de passe",
            ifBad: "La confirmation ne corresponds pas au mot de passe",
            display: null
        }
    }
})

let activeSection = ref('coordinates')


// ===== FUNCTIONS ===== //

const changeActive = (value) => {
    activeSection.value = value
}

const modalToggle = () => {
    modalActive.value = !modalActive.value
}

/**
 * Checks the form's inputs
 * 
 * For eache element stored in const data:
 * if value === null : display the empty error
 * else: check condition of the value to be good
 * if yes : increments nbValidatedInputs
 * else: display the bad error
 * 
 * Checks if nbValidatedInputs is equals to lenght of const data.values
 * 
 * @return void
 */
const checkInputs = function () {
    let nbValidatedInputs = 0

    for (const [key, element] of Object.entries(data.value)) {
        element.err.display = null // resetting err display
        // checking errors
        if (element.val !== null) {
            switch (key) {

                case 'password':
                    if (!element.val.match(pwdREGEX)) {
                        element.err.display = element.err.ifBad
                    } else { nbValidatedInputs++ }
                    break;

                case 'confirm':
                    if (element.val !== data.value.password.val) {
                        element.err.display = element.err.ifBad
                    } else { nbValidatedInputs++ }
                    break;
                
                default:
                    break;
            }
        } else { element.err.display = element.err.ifEmpty } // display empty error msg
    }

    return nbValidatedInputs === Object.keys(data.value).length
}

    // ===== AXIOS REQUESTS ===== //

/** 
 * Change the User's password
 * 
 * Checks the form's input stored in const 'data' in checkInputs func,
 * PUT api.artichotel.fr/api/user/{id} :
 * Authorization: Bearer with user's token in sessionStorage
 * body: json with 'password' key and its value from input 'password' stored in data
 * 
 * Open a modal of confirmation and reset the input values
 * 
 * @return void
*/
const changePwd = function () {
    console.log("changing pwd")
    if (checkInputs()) { // checking inputs
        console.log("checkInputs passed")
        const bodyJSON = {
            password: data.value.password.val
        }
        axios.put(`${import.meta.env.VITE_API_BASE_URL}/user/${window.sessionStorage.getItem('user')}`,bodyJSON , {
            headers: {
                'Authorization': `Bearer ${window.sessionStorage.getItem('token')}`
            }
        })
        .then((res) => {
            // Resetting input values
            for (const [key, element] of Object.entries(data.value)) {
                element.val = null
            }
            modalToggle() // Open the confirmation modal
        })
        .catch((e) => {
            console.log("changePwd error:", e)
        })
    }
}

const deleteAccount = function () { // TODO : Add to the delete btn
    axios.delete(`${import.meta.env.VITE_API_BASE_URL}/user/${window.sessionStorage.getItem('user')}`, {
        headers: {
            'Authorization': `Bearer ${window.sessionStorage.getItem('token')}`
        }
    })
    .then((res) => {
        // TODO : Modal de suppression + retour à HomePage
    })
}

/**
 * Gets the Hero url image
 * 
 * Store it in const heroBG
 * 
 * @return void
 */
axios.get(`${import.meta.env.VITE_API_BASE_URL}/hero`)
.then((res) => {
    heroBg.value = res.data[0][0].url_image
})
.catch((err) => {
    console.log(err)
})

if (window.sessionStorage.getItem('user')) {
  /**
   * Gets the user's datas from DB's table 'Users'
   * Stores it in const userData
   *
   * GET api.artichotel.fr/api/user/{id}
   * Authorization: Bearer with user's token in sessionStorage
   *
   * @return void
   */
  axios.get(`${import.meta.env.VITE_API_BASE_URL}/user/${window.sessionStorage.getItem('user')}`, {
    headers: {
      'Authorization': `Bearer ${window.sessionStorage.getItem('token')}`
    }
  })
      .then((res) => {
        userData.value = res.data
      })
      .catch((e) => {
        console.log("User Datas error:", e)
      })
}

const goSignup = function () {
  router.push("/signup");
};
const goLogin = function () {
  router.push("/login");
};

</script>