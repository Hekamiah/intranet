import { createApp } from "vue";
import { createPinia } from "pinia";
import "semantic-ui-css/semantic.css";
import App from "./App.vue";
import router from "@/router";
import i18n from "@/i18n/index";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(i18n);
app.use(pinia);

app.mount("#app");
