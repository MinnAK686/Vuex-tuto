import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

// Bootstrap
// import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

const app = createApp(App);

app.use(store);
app.mount("#app");
