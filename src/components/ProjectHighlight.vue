<template>
    <div class="project">
        <div class="headline">
            <div class="name">
                <a :href="project.url" target="_blank" rel="noopener">
                    {{project.packageName || project.name}}
                    <OpenInNewIcon />
                </a>
            </div>
            <div class="type">{{project.type}}</div>
            <div class="dates">
                <span>{{startDate}}</span>
                -
                <span>{{endDate}}</span>
            </div>
        </div>

        <div v-if="showGithubBadges || showNpmBadges" class="badges">
            <img v-if="showNpmBadges" class="badge" :src="versionBadgeUrl" alt="Version number indicator">
            <img v-if="showNpmBadges" class="badge" :src="downloadsPerMonthBadgeUrl" alt="Downloads per month indicator">
            <img v-if="showGithubBadges" class="badge" :src="githubStarsBadgeUrl" alt="Github stars indicator">
        </div>

        <div class="description">
            <div v-if="(typeof project.description === 'string')">{{project.description}}</div>
            <div v-if="isDescriptionArray">
                <ul>
                    <li v-for="descriptionItem in project.description" :key="descriptionItem">{{descriptionItem}}</li>
                </ul>
            </div>
            <div v-else />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import OpenInNewIcon from 'vue-material-design-icons/OpenInNew.vue';
import { Project, ProjectTypeEnum } from '@/models/project';

interface Props {
    project: Project;
}

const props = defineProps<Props>();

function convertDate (date: Date) {
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    return `${month}, ${year}`;
}

const startDate = computed(() => {
    return convertDate(props.project.startDate);
});

const endDate = computed(() => {
    if (props.project.endDate) {
        return convertDate(props.project.endDate);
    }
    return 'Present';
});

const isDescriptionArray = computed(() => {
    return Array.isArray(props.project.description);
});

const showGithubBadges = computed(() => {
    return props.project.type === ProjectTypeEnum.Enum.NPM ||
        props.project.type === ProjectTypeEnum.Enum.Scripting;
});

const showNpmBadges = computed(() => {
    return props.project.type === ProjectTypeEnum.Enum.NPM;
});

const downloadsPerMonthBadgeUrl = computed(() => {
    return `https://img.shields.io/npm/dm/${props.project.packageName ?? props.project.name}.svg`;
});

const versionBadgeUrl = computed(() => {
    return `https://img.shields.io/npm/v/${props.project.packageName ?? props.project.name}.svg`;
});

const githubStarsBadgeUrl = computed(() => {
    return `https://img.shields.io/github/stars/mrodrig/${props.project.repoSlug ?? props.project.name}.svg?style=flat`;
});
</script>

<style lang="less">
    @import '@/less/constants.less';

    .project {
        margin-bottom: 1.4em;

        .headline {
            display: flex;
            align-items: flex-end;
            flex-wrap: wrap;
            gap: .5em;

            .name {
                a {
                    text-decoration: none;
                    color: @defaultTextColor;
                    font-weight: bold;
                    font-size: 1.35em;
                    text-decoration: none;
                    transition: .3s;

                    &:hover {
                        color: @lightblue;
                    }
                }
            }

            .type {
                color: #909eac;
                font-weight: bold;
                font-style: italic;
            }

            .type, .dates {
                padding-bottom: .15em;
            }
        }

        .badges {
            display: flex;
            gap: .4em;
        }
    }
</style>
