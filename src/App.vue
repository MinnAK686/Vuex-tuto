<template>
    <div>
        <AllTodo></AllTodo>
    </div>
</template>

<script>
import AllTodo from './components/AllTodo'
export default {
    name: "App",
    components: {
    AllTodo,},
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
