<template>
    <div id="not-found">
        <h2>404 - Sorry, that page wasn't found.</h2>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Firebase from '@/services/firebase';
import { AnalyticsEvent } from '@/models/analyticsEvents';

export default defineComponent({
    name: 'NotFound',
    created () {
        // Log the route that the user tried to access
        Firebase.logEvent(AnalyticsEvent.NotFound, {
            route: this.$route.path,
        });
    },
});
</script>

<style lang="less">
#not-found {
    text-align: center;
}
</style>
