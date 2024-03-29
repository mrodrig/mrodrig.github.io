<template>
    <div id="footer">
        <div id="copyright">
            <span>
                &copy; 2014 - {{currentYear}} Michael Rodrigues.
            </span>
            <span>
                All Rights Reserved.
            </span>
        </div>
        <div id="identities">
            <a :href="githubUrl" target="_blank" rel="noopener" v-on:click="trackClick('github')">
                <github-circle class="icon" :size="iconSize" />
            </a>
            <a :href="linkedInUrl" target="_blank" rel="noopener" v-on:click="trackClick('linkedIn')">
                <linkedin class="icon" :size="iconSize" />
            </a>
            <a :href="emailUrl" v-on:click="trackClick('email')">
                <email class="icon" :size="iconSize" />
            </a>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GithubCircle from 'vue-material-design-icons/Github.vue';
import Linkedin from 'vue-material-design-icons/Linkedin.vue';
import Email from 'vue-material-design-icons/Email.vue';
import Firebase from '@/services/firebase';
import { AnalyticsEvent } from '@/models/analyticsEvents';

export default defineComponent({
    name: 'PageFooter',
    components: {
        GithubCircle,
        Linkedin,
        Email,
    },
    data () {
        return {
            githubUrl: 'https://github.com/mrodrig',
            linkedInUrl: 'https://www.linkedin.com/in/rodriguesmichael',
            emailUrl: 'mailto:rodrigues.mi@northeastern.edu',
            currentYear: (new Date()).getFullYear(),
            iconSize: 36,
        };
    },
    methods: {
        trackClick: function (iconType: string) {
            Firebase.logEvent(AnalyticsEvent.Click, {
                component: 'footer',
                target: iconType,
            });
        },
    },
});
</script>

<style lang="less">
    @import '@/less/constants.less';

    #footer {
        margin-top: 2em;
        text-align: center;

        #identities {
            padding-top: 1em;

            a {
                color: black;
                padding: .4em;

                .icon {
                    opacity: 0.5;
                    transition: 0.4s;
                }

                &:hover {
                    .icon {
                        opacity: 1;
                    }
                }
            }
        }
    }

    @media @upToNarrowQuery {
        #footer {
            #copyright {
                span {
                    display: block;
                }
            }
        }
    }
</style>
