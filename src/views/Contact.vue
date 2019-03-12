<template>
    <div id="contact">
        <div class="row">
            <p>
                Prefer to use your email client? Click to send an email:
                <a :href="mailTo" class="mailto" rel="noopener" v-on:click="trackClick('mailTo')">{{destinationEmailAddress}}</a>.
            </p>
        </div>

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
    </div>
</template>

<script>
export default {
    name: 'contact',
    props: {},
    data () {
        return {
            sendFromEmailAddress: 'contact@michaelrodrigues.com',
            name: '',
            replyTo: '',
            subject: '',
            body: '',
            destinationEmailAddress: 'rodrigues.mi@husky.neu.edu',
            username: 'api',
            keyp0: 'key-',
            keyp1: '90e27fb32160148dc1cc3890ef601355',
            api: 'api.mailgun.net/v3/michaelrodrigues.com/messages',
        };
    },
    computed: {
        from: function () {
            return (this.name || '') + ' <' + this.sendFromEmailAddress + '>';
        },
        destination: function () {
            return 'https://' + this.username + ':' + this.keyp0 + this.keyp1 + '@' + this.api;
        },
        mailTo: function () {
            return 'mailto: ' + this.destinationEmailAddress
                + '?subject=' + this.subject
                + '&body=' + this.body;
        }
    },
    methods: {
        trackClick: function (item) {
            this.$ga.event({
                eventCategory: 'contact',
                eventAction: 'click',
                eventLabel: item
            });
        }
    }
};
</script>

<style lang="less">
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
