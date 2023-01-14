<template>
    <div id="not-found">
        <h2>404 - Sorry, that page wasn't found. ☹️</h2>
    </div>
</template>

<script lang="ts">
export default {
    name: 'not-found',
    created () {
        // Log the route that the user tried to access
        // TODO(mrodrig): re-enable this
        // this.$ga.event({
        //     eventCategory: 'navigation',
        //     eventAction: 'not-found',
        //     eventLabel: this.$route.path
        // });
    },
};
</script>

<style lang="less">
#not-found {
    text-align: center;
}
</style>
