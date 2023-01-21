<template>
    <div v-if="loading" class="center">
        <p>Please wait, loading...</p>
        <img id="loading" src="@/assets/spinner-icon.gif" alt="Loading icon">
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LoadingSpinner',
    props: {
        loading: {
            type: Boolean,
            default: () => false,
        },
    },
});
</script>

<style lang="less" scoped>
    @import '@/less/constants.less';

    .center {
        text-align: center;

        #loading {
            height: 4em;
            width: 4em;
        }
    }
</style>
