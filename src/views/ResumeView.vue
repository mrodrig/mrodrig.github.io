<template>
    <div id="resume" class="center">
        <div id="download">

            <div class="download-link">
                <span v-show="resumeError" class="error">Sorry! I'm having difficulty accessing my resume at this time. Please try again soon.</span>
                <a v-show="!resumeError" :href="resumeUrl" target="_blank" rel="noopener" v-on:click="trackClick('resume')"><arrow-down-bold-box /> Résumé</a>
            </div>

            <div v-if="showCV" class="download-link">
                <a v-show="!cvError" :href="cvUrl" target="_blank" rel="noopener" v-on:click="trackClick('cv')"><arrow-down-bold-box /> Curriculum Vitae (CV)</a>
            </div>

        </div>

        <pdf-viewer v-show="!resumeError" :src="resumeUrl" />

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ArrowDownBoldBox from 'vue-material-design-icons/ArrowDownBoldBox.vue';
import PdfViewer from '@/components/PdfViewer.vue';
import Firebase from '@/services/firebase';
import Logging from '@/services/logging';
import { AnalyticsEvent } from '@/models/analyticsEvents';

export default defineComponent({
    name: 'ResumeView',
    components: {
        ArrowDownBoldBox,
        PdfViewer,
    },
    data () {
        return {
            resumeUrl: '',
            resumeError: false,
            showCV: false, // TODO(mrodrig): Convert to use remote config - https://firebase.google.com/docs/remote-config/get-started?platform=web
            cvUrl: '',
            cvError: false,
        };
    },
    async created () {
        try {
            this.resumeUrl = await Firebase.getResumeUrl();
        } catch (error) {
            Logging.error('Unable to get resume URL', error);
            this.resumeError = true;
        }

        if (this.showCV) {
            try {
                this.cvUrl = await Firebase.getCiriculumVitaeUrl();
            } catch (error) {
                Logging.error('Unable to get CV URL', error);
                this.cvError = true;
            }
        }
    },
    methods: {
        trackClick: function (downloadType: string) {
            Firebase.logEvent(AnalyticsEvent.Download, {
                component: 'resume',
                downloadType,
            });
        },

    },
});
</script>

<style lang="less">
    @import '@/less/constants.less';

    #resume {
        padding-top: 1em;

        #download {
            .download-link {
                padding: .5em;

                * {
                    vertical-align: bottom;
                }
            }

            a {
                color: @darkgray;
                text-decoration: none;
                transition: .3s;
                width: 3em;

                &:hover {
                    color: @lightblue;
                }
            }
        }

        .inline {
            display: inline-block;
        }
    }

    .center {
        text-align: center;

        #loading {
            height: 4em;
            width: 4em;
        }
    }

    @media @upToNarrowQuery {
        #resume {
            .page {
                width: 100%;
            }
        }
    }

    @media @narrowAndUpQuery {
        #resume {
            .page {
                width: 90%;
            }
        }
    }

    @media @mediumAndUpQuery {
        #resume {
            .page {
                width: 70%;
            }
        }
    }

    @media @largeAndUpQuery {
        #resume {
            .page {
                width: 60%;
            }
        }
    }
</style>
