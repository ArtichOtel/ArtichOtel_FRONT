import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import "./assets/iconsax.css";
import "tw-elements";
import { createPinia } from "pinia";
import { i18n } from "./utils/i18n";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(i18n);

app.mount("#app");
