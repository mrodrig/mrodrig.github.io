<template>
    <div id="projects">
        <div id="server" class="projects-group">
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
        </div>
    </div>
</template>

<script>
import project from '../components/Project.vue';
import projects from '../data/projects.js';

export default {
    name: 'contact',
    components: {
        project
    },
    data () {
        return {
            npmProjects: projects.npmProjects,
            serverProjects: projects.serverProjects,
            courseProjects: projects.courseProjects
        };
    }
};
</script>

<style lang="less">
    #projects {
        margin: 0 2em;

        .projects-group {
            padding-top: 1em;
        }
    }

    @media @upToNarrowQuery {

    }
</style>
