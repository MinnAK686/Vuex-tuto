<template>
    <div>
        <h1 class="text-center text-primary my-4">Todos</h1>
        <div class="container">
            <div class="row">
                <div class="col-md-4" v-for="todo in getMyTodos" :key="todo.id">
                    <div
                        class="card text-bg-primary mb-3"
                        style="max-width: 18rem"
                    >
                        <!-- <div class="card-header"></div> -->
                        <div class="card-body">
                            <h5 class="card-title">Todo</h5>
                            <p class="card-text">
                                {{ todo.title }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    computed: { ...mapGetters(["getMyTodos"]) },
    methods: { ...mapActions(["getTodos"]) },
    mounted() {
        this.getTodos();
    },
};
</script>

<style></style>
