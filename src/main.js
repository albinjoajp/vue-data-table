import { createApp } from "vue";
import App from "./App.vue";
import DataTable from "data-table-v";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/main.css";

const app = createApp(App);
app.use(DataTable);

app.mount("#app");
