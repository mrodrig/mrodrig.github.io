<template>
    <div id="resume" class="center">
        <div id="download">
            <div class="download-link">
                <a :href="resumeSource" target="_blank" rel="noopener" v-on:click="trackClick('resume')"><arrow-down-bold-box /> Résumé</a>
            </div>
            <!-- <div class="download-link">
                <a :href="cvSource" target="_blank" rel="noopener" v-on:click="trackClick('cv')"><arrow-down-bold-box /> Curriculum Vitae (CV)</a>
            </div> -->
        </div>
        <pdf-viewer :src="resumeSource" />
    </div>
</template>

<script lang="ts">
import ArrowDownBoldBox from 'vue-material-design-icons/ArrowDownBoldBox.vue';
import PdfViewer from '../components/PdfViewer.vue';

export default {
    name: 'resume-view',
    components: {
        ArrowDownBoldBox,
        PdfViewer,
    },
    data () {
        return {
            resumeSource: 'pdf/resume.pdf',
            cvSource: 'pdf/cv.pdf',
        };
    },
    methods: {
        trackClick: function (downloadType: string) {
            console.log(downloadType);
            // TODO(mrodrig): enable again
            // this.$ga.event({
            //     eventCategory: 'resume',
            //     eventAction: 'download',
            //     eventLabel: downloadType,
            // });
        },

    },
};
</script>

<style lang="less">
    @import "../less/constants.less";

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
