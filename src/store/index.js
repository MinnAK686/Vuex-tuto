import { createStore } from "vuex";
import Todos from "./Todos/Todos";

let store = createStore({
    modules: { Todos },
});

export default store;
