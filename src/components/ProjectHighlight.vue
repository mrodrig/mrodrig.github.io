<template>
    <div class="project">
        <div class="headline">
            <div class="name">
                <a :href="project.url">{{project.name}}</a>
            </div>
            <div class="type">{{project.type}}</div>
            <div class="dates">
                <span>{{startDate}}</span>
                -
                <span>{{endDate}}</span>
            </div>
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
import { Project } from '@/models/project';

const props = defineProps<{
    project: Project,
}>();

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
</script>

<style lang="less">
    @import '@/less/constants.less';

    .project {
        margin-bottom: 1.4em;

        .headline {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: .5em;

            .name {
                a {
                    text-decoration: none;
                    color: @defaultTextColor;
                    font-weight: bold;
                    font-size: 1.3em;
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
        }
    }
</style>
