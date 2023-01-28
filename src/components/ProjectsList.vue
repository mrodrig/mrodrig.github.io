<template>
    <div id="projects">
        <LoadingSpinner :loading="loading" />

        <div v-show="projects.length">
            <ProjectHighlight v-for="project in projects" :project="project" :key="project.name" />
        </div>
        <!-- <div id="server" class="projects-group">
            <h2>Website/Server Development and Management</h2>
            <project v-for="serverProject in serverProjects" :key="serverProject.name" :project="serverProject" :type="'server'" />
        </div>

        <div id="courses" class="projects-group">
            <h2>Course Projects</h2>
            <project v-for="courseProject in courseProjects" :key="courseProject.name" :project="courseProject" :type="'course'" />
        </div>

        <div id="npm" class="projects-group">
            <h2>Node Modules</h2>
            <project v-for="npmProject in npmProjects" :key="npmProject.name" :project="npmProject" :type="'npm'" />
        </div> -->
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import { ProjectSchema, Project } from '@/models/project';
import ProjectHighlight from '@/components/ProjectHighlight.vue';
import Firebase from '@/services/firebase';
import Logging from '@/services/logging';
// import projects from '@/data/projects';

export default defineComponent({
    name: 'ProjectsView',
    components: {
        ProjectHighlight,
        LoadingSpinner,
    },
    data () {
        return {
            loading: true,
            projects: [] as Project[],
            error: false,
        };
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
            console.log('Documents', JSON.stringify(this.projects, null, 4));
        } catch (error) {
            this.error = true;
            Logging.error('Error getting projects', error);
        }
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
