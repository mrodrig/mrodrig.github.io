<template>
    <div id="contact">
        <div class="row">
            <p>
                Click to send an email:
                <a :href="mailTo" class="mailto" rel="noopener" v-on:click="trackClick('mailTo')">{{destinationEmailAddress}}</a>.
            </p>
        </div>

        <!--
        <form :action="destination" method="post">
            <div>
                <input id="from" v-model="from" type="hidden" hidden name="from">
                <input id="to" v-model="destinationEmailAddress" type="hidden" hidden name="to">
            </div>
            <div class="row">
                <input id="name" v-model="name" type="text" name="name" placeholder="Name" required>
            </div>
            <div class="row">
                <input id="reply-to" v-model="replyTo" type="email" name="h:Reply-To" placeholder="Email" required>
            </div>
            <div class="row">
                <input id="subject" v-model="subject" type="text" name="subject" placeholder="Subject" autocomplete="off" required>
            </div>
            <div class="row">
                <textarea id="message" v-model="body" name="text" placeholder="Message" rows="5" required />
            </div>
            <div id="button-wrap">
                <input type="submit" class="button" value="Send Message" v-on:click="trackClick('sendButton')">
            </div>
        </form>
        -->
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Firebase from '@/services/firebase';
import { AnalyticsEvent } from '@/models/analyticsEvents';

export default defineComponent({
    name: 'ContactView',
    data () {
        return {
            destinationEmailAddress: 'rodrigues.mi@northeastern.edu',
        };
    },
    computed: {
        mailTo: function (): string {
            return `mailto:${this.destinationEmailAddress}`;
        },
    },
    methods: {
        trackClick: function (item: string) {
            Firebase.logEvent(AnalyticsEvent.Click, {
                component: 'contact',
                item,
            });
        },
    },
});
</script>

<style lang="less">
    @import '@/less/constants.less';

    #contact {
        padding: 2em 0;

        .row {
            text-align: center;

            .mailto {
                text-decoration: none;
                color: @lightblue;
            }

            input:not([type=submit]), textarea {
                margin-bottom: .5em;
                padding: .375rem .75rem;
                width: 50%;
                font-size: 1rem;
                min-height: 2em;
                color: @darkgray;
                background-color: @white;
                border: 1px solid @lightgray;
                border-radius: .25rem;
                transition: .15s ease;
                overflow: visible;

                &:focus {
                    outline: none;
                    border:1px solid @lightblue;
                    box-shadow: 0 0 .63em @lightgray;
                }
            }
        }

        #button-wrap {
            width: 100%;
            text-align: center;

            input[type=submit] {
                color: @white;
                background-color: @darkgray;
                border-radius: .4em;
                border: 0;
                cursor: pointer;
                height: 4em;
                width: 9em;
                text-align: center;
                font-weight: bold;
                font-size: .9em;
                transition: 0.3s;

                &:hover {
                    background-color: black;
                }
            }
        }

    }

    @media @upToNarrowQuery {
        #contact {
            .row {
                input:not([type=submit]), textarea {
                    width: 70%;
                }
            }
        }
    }
</style>
