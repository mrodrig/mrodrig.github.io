<template>
    <div id="app">
        <tagline />
        <navigation-header />
        <router-view />
        <page-footer />
    </div>
</template>

<script lang="ts">
import tagline from './components/Tagline.vue';
import navigationHeader from './components/NavigationHeader.vue';
import pageFooter from './components/PageFooter.vue';

export default {
    name: 'app',
    components: {
        tagline,
        navigationHeader,
        pageFooter,
    },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}
</style>
