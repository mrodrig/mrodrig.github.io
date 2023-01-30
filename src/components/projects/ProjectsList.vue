<template>
    <div id="projects">
        <LoadingSpinner :loading="loading" />

        <div class="controls">
            <div class="sort-controls">
                <div v-if="sortAscending" v-on:click="toggleSort">
                    <span>Oldest First</span>
                    <SortAscendingIcon />
                </div>

                <div v-else v-on:click="toggleSort">
                    <span>Newest First</span>
                    <SortDescendingIcon />
                </div>
            </div>
        </div>

        <div v-show="projects.length">
            <ProjectHighlight v-for="project in sortedProjects" :project="project" :key="project.name" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SortDescendingIcon from 'vue-material-design-icons/SortDescending.vue';
import SortAscendingIcon from 'vue-material-design-icons/SortAscending.vue';
import LoadingSpinner from '@/components/utility/LoadingSpinner.vue';
import { ProjectSchema, Project } from '@/models/project';
import ProjectHighlight from '@/components/projects/ProjectHighlight.vue';
import Firebase from '@/services/firebase';
import Logging from '@/services/logging';

export default defineComponent({
    name: 'ProjectsView',
    components: {
        ProjectHighlight,
        LoadingSpinner,
        SortDescendingIcon,
        SortAscendingIcon,
    },
    data () {
        return {
            loading: true,
            sortAscending: true,
            projects: [] as Project[],
            error: false,
        };
    },
    computed: {
        sortedProjects () {
            return this.sortAscending ? this.projects : [...this.projects].reverse();
        },
    },
    async created () {
        try {
            const docs = await Firebase.getProjects();
            docs.forEach((doc) => {
                try {
                    const project = ProjectSchema.parse(doc);
                    this.projects.push(project);
                } catch (error) {
                    Logging.error('Unable to parse project into schema', { doc, error });
                }
            });
            this.loading = false;
        } catch (error) {
            this.error = true;
            Logging.error('Error getting projects', error);
        }
    },
    methods: {
        toggleSort () {
            this.sortAscending = !this.sortAscending;
        },
    },
});
</script>

<style lang="less">
    @import '@/less/constants.less';

    #projects {
        margin: 0 2em;
        padding-top: 1em;

        .projects-group {
            padding-top: 1em;
        }

        .controls {
            display: flex;
            flex-direction: row-reverse;
            margin: 0.5em 0;

            .sort-controls {
                div {
                    display: flex;
                    cursor: pointer;
                    user-select: none;

                    span {
                        margin: 0 0.5em;
                    }
                }
            }
        }
    }

    @media @upToNarrowQuery {

    }
</style>
