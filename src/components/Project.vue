<template>
    <div class="project">
        <div v-if="project">
            <h3 class="project-title" :class="{nonNpm: !isNpmProject}">
                <a :href="project.url" target="_blank" rel="noopener" v-on:click="trackClick(project.name)">
                    {{project.name}}
                    <open-in-new-icon class="icon open-icon" />
                </a>
            </h3>
            <div v-if="project.startDate" class="project-dates">
                (<span v-if="project.startDate">{{project.startDate}}</span>
                -
                <span>{{project.endDate || 'Present'}}</span>)
            </div>
            <div class="project-badges">
                <img v-if="isNpmProject" class="badge" :src="versionBadgeUrl" alt="Version number indicator">
                <img v-if="isNpmProject" class="badge" :src="githubStarsBadgeUrl" alt="Github stars indicator">
                <img v-if="isNpmProject" class="badge" :src="downloadsPerMonthBadgeUrl" alt="Downloads per month indicator">
            </div>
        </div>
        <p v-if="descriptionType === 'string'">
            {{project.description}}
        </p>
        <ul v-else-if="descriptionType === 'object'">
            <li v-for="descriptionItem in project.description" :key="descriptionItem">
                {{descriptionItem}}
            </li>
        </ul>
    </div>
</template>

<script>
import OpenInNewIcon from 'vue-material-design-icons/OpenInNew.vue';

export default {
    name: 'project',
    components: {
        OpenInNewIcon
    },
    props: {
        project: {
            type: Object,
            default: () => {}
        },
        type: {
            type: String,
            default: () => ''
        }
    },
    computed: {
        isNpmProject: function () {
            return this.type === 'npm';
        },
        downloadsPerMonthBadgeUrl: function() {
            return 'https://img.shields.io/npm/dm/' + this.project.name + '.svg';
        },
        versionBadgeUrl: function () {
            return 'https://img.shields.io/npm/v/' + this.project.name + '.svg';
        },
        githubStarsBadgeUrl: function () {
            return 'https://img.shields.io/github/stars/mrodrig/' + this.project.name + '.svg?style=flat';
        },
        descriptionType: function () {
            return typeof this.project.description;
        }
    },
    methods: {
        trackClick: function (projectName) {
            this.$ga.event({
                eventCategory: 'projects',
                eventAction: 'click',
                eventLabel: projectName
            });
        }
    }
};
</script>

<style lang="less">
    .project {
        .project-title {
            * {
                vertical-align: top;
            }

            a {
                color: black;
                text-decoration: none;
                transition: .3s;

                &:hover {
                    color: @lightblue;
                }
            }
        }
        .project-badges {
            .badge {
                vertical-align: middle;
                padding-right: .3em;
            }
        }

    }

    @media @upToNarrowQuery {
        .project {
            .project-title {
                min-width: 100%;
            }

            .project-dates {
                display: block;
                min-width: 100%;
            }

            .project-badges {
                display: block;
                min-width: 100%;
            }
        }
    }

    @media @extraNarrowAndUpQuery {
        .project {
            .project-title {
                display: inline-block;
                min-width: 15em;

                &.nonNpm {
                    min-width: 28em;
                }
            }

            .project-dates {
                display: inline-block;
                min-width: 15em;
            }

            .project-badges {
                display: inline-block;
            }
        }
    }
</style>
