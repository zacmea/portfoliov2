<script>
import NavBar from "./components/NavBar.vue";
import HomeView from "./views/HomeView.vue";
// import ProjectsView from "./views/ProjectsView.vue";

// import style from './assets/style.css';

// import { RouterLink } from "vue-router";
import { RouterView } from "vue-router";
// import MainLayout from './components/MainLayout.vue'

export default {
    name: "App",
    components: {
        NavBar,
        // HomeView,
    },
};
</script>

<template>
    <div id="app">
        <NavBar />
        <main>
            <router-view />
        </main>
    </div>
</template>

<style>
main {
    padding-top: 3.5rem;
}
</style>
