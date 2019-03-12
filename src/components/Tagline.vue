<template>
    <div id="tagline">
        <h1><a href="#" v-on:click="trackEvent('click')" v-on:mouseover="trackEvent('hover')">Michael Rodrigues</a></h1>
        <p id="secondary">Senior Web Applications Developer and Cybersecurity Professional</p>
    </div>
</template>

<script>
export default {
    name: 'tagline',
    props: {},
    methods: {
        trackEvent: function (event) {
            this.$ga.event({
                eventCategory: 'tagline',
                eventAction: event,
                eventLabel: 'name'
            });
        }
    }
};
</script>

<style lang="less">
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
