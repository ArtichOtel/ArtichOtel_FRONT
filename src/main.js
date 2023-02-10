import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import "./assets/iconsax.css";
import "tw-elements";

const app = createApp(App);

app.use(router);

app.mount("#app");
