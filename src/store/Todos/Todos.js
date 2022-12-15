import axios from "axios";

export default {
    state: {
        myTodos: [],
    },
    getters: {
        getMyTodos(state) {
            return state.myTodos;
        },
    },
    mutations: {
        setTodos(state, todos) {
            state.myTodos = todos;
        },
    },
    actions: {
        async getTodos(context) {
            let res = await axios.get(
                "https://jsonplaceholder.typicode.com/todos",
            );
            let todos = res.data;
            context.commit("setTodos", todos);
        },
    },
};
