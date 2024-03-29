<template>
    <div id="resume" class="center" v-if="src">
        <div v-for="page in numPages" :id="page" :key="page">
            <pdf :page="page" :src="pdfData" :scale="scale" :resize="true" class="inline page">
                <template v-slot:loading>
                    <LoadingSpinner :loading="true" />
                </template>
            </pdf>
            <div v-if="numPages > 1" class="center">
                {{page}} of {{numPages}}
            </div>
        </div>
    </div>
</template>

<script>
import LoadingSpinner from '@/components/utility/LoadingSpinner.vue';
import { defineComponent } from 'vue';
import pdf from 'pdfvuer';

export default defineComponent({
    name: 'PdfViewer',
    components: {
        pdf,
        LoadingSpinner,
    },
    props: {
        src: {
            type: String,
            default: () => '',
        },
    },
    data () {
        return {
            numPages: 1,
            pdfData: null,
            scale: 'page-width',
        };
    },
    watch: {
        src: function () {
            this.load();
        },
    },
    created () {
        this.load();
    },
    methods: {
        load: function () {
            if (this.src) {
                return this.getPdf();
            }
        },
        getPdf: function () {
            this.pdfData = pdf.createLoadingTask(this.src);
            this.pdfData.then(pdf => {
                this.numPages = pdf.numPages;
            });
        },
    },
});
</script>

<style lang="less" scoped>
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
