import { createApp } from "vue";
import { createPinia } from "pinia";
import "jquery/src/jquery";
import "semantic-ui-css/semantic.css";
import "semantic-ui-css/semantic.js";
import App from "./App.vue";
import router from "@/router";
import i18n from "@/i18n/index";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(i18n);
app.use(pinia);

app.mount("#app");
