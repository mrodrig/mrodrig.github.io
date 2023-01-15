<template>
    <div id="not-found">
        <h2>404 - Sorry, that page wasn't found. ☹️</h2>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'not-found',
    created () {
        // Log the route that the user tried to access
        // this.$gtag.event('not-found', {
        //     event_category: 'navigation',
        //     event_label: this.$route.path,
        //     value: this.$route.path,
        // });
    },
});
</script>

<style lang="less">
#not-found {
    text-align: center;
}
</style>
