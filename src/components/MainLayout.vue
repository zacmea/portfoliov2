<script>
import { router-view } from 'vue-router';
import { router-link } from 'vue-router';

import NavBar from 'src/components/NavBar.vue';

export default {
    name: 'MainLayout',
    components: {
        NavBar,
    },
};
</script>

<template>
    <div>
        <NavBar />
        <RouterView />
    </div>
</template>

<style>
</style>
