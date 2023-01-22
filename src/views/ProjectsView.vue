<template>
    <ProjectsList />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProjectsList from '@/components/ProjectsList.vue';

export default defineComponent({
    name: 'ProjectsView',
    components: {
        ProjectsList,
    },
});
</script>

<style lang="less">
    @import '@/less/constants.less';

    #projects {
        margin: 0 2em;

        .projects-group {
            padding-top: 1em;
        }
    }

    @media @upToNarrowQuery {

    }
</style>
