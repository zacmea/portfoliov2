<script>
import NavBar from "./components/NavBar.vue";
import HomeView from "./views/HomeView.vue";

import { RouterView } from "vue-router";

export default {
    name: "App",
    components: {
        NavBar,
        HomeView,
    },
};
</script>

<template>
    <div id="app">
        <NavBar />
        <main>
            <!-- the v-slot catches whatever component would normally show for router-view -->
            <router-view v-slot="{ Component }">
                <!-- if there's no component, show HomeView instead -->
                <component :is="Component || 'HomeView'" />
            </router-view>
        </main>
    </div>
</template>

<style>
main {
    padding-top: 3.5rem;
}
</style>
