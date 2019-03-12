<template>
    <div id="resume" class="center">
        <div v-for="page in numPages" :id="page" :key="page">
            <pdf :page="page" :src="pdfData" :scale="scale" :resize="true" class="inline page">
                <template slot="loading">
                    <div class="center">
                        <p>Please wait, loading...</p>
                        <img id="loading" src="../assets/spinner-icon.gif" alt="Loading icon">
                    </div>
                </template>
            </pdf>
            <div v-if="numPages > 1" class="center">
                {{page}} of {{numPages}}
            </div>
        </div>
    </div>
</template>

<script>
import pdf from 'pdfvuer';
// Symbol iterator polyfill for IE 11
import 'core-js/fn/symbol/iterator.js';

export default {
    name: 'resume',
    components: {
        pdf
    },
    props: {
        src: {
            type: String,
            default: () => ''
        }
    },
    data () {
        return {
            numPages: 1,
            pdfData: undefined,
            scale: 'page-width'
        };
    },
    watch: {
        src: function () {
            this.load();
        }
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
            let self = this;
            self.pdfData = pdf.createLoadingTask(this.src);
            self.pdfData.then(pdf => {
                self.numPages = pdf.numPages;
            });
        }
    }
};
</script>

<style lang="less">
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
