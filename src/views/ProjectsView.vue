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

<script lang="ts">
import project from '@/components/Project.vue';
// import Firebase from '@/services/firebase';
// import { FirestoreCollection } from '@/models/firestoreCollections';
import projects from '@/data/projects';

export default {
    name: 'ProjectsView',
    components: {
        project,
    },
    data () {
        return {
            projects: [],
            error: false,
            npmProjects: projects.npmProjects,
            serverProjects: projects.serverProjects,
            courseProjects: projects.courseProjects,
        };
    },
    async created () {
        try {
            // const docs = await Firebase.getDocsFromCollection(FirestoreCollection.Projects);
            // this.projects = docs;
            // console.log('Documents', JSON.stringify(docs, null, 4));
        } catch (error) {
            // this.error = true;
            console.error('Error getting projects', error);
        }
    },
};
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
