<template>
    <div id="tagline">
        <h1><a href="#" v-on:click="trackEvent(click)" v-on:mouseover="trackEvent(hover)">Michael Rodrigues</a></h1>
        <p id="secondary">Lead Mobile Architect, Web Applications Developer, and Cybersecurity Professional</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Firebase, { AnalyticsEvent } from '@/services/firebase';

export default defineComponent({
    name: 'tagline-header',
    data () {
        return {
            click: AnalyticsEvent.Click,
            hover: AnalyticsEvent.Hover,
        };
    },
    methods: {
        trackEvent: function (event: AnalyticsEvent) {
            Firebase.logEvent(event, {
                component: 'tagline',
                target: 'name',
            });
        },
    },
});
</script>

<style lang="less">
    @import '@/less/constants.less';

    #tagline {
    text-align: center;
    background-color: #f4f4f4;

    h1 {
        padding-top: 1em;
        margin-top: 0;
        margin-bottom: 0;

        a {
            color: black;
            transition: 0.3s;
            text-decoration: none;

            &:hover {
                color: @lightblue;
            }
        }
    }

    p {
        margin-top: 0;
        margin-bottom: 0;
        padding-bottom: 2em;
    }
}

    @media @upToNarrowQuery {
        #tagline {
            #secondary {
                margin: 0 2em;
            }
        }
    }
</style>
