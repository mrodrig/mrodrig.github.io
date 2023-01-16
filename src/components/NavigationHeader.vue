<template>
    <div id="nav">
        <ul id="navbar" :class="{expanded: navBarExpanded}">
            <li class="nav-toggle" v-on:click="toggleNavBar">
                <menu-icon />
            </li>

            <li v-for="route in routes" :key="route.to" v-on:click="trackClick(route.to)">
                <router-link :to="route.to">{{route.name}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import Firebase, { AnalyticsEvent } from '@/services/firebase';
import { defineComponent } from 'vue';
import MenuIcon from 'vue-material-design-icons/Menu.vue';

export default defineComponent({
    name: 'navigation-header',
    components: {
        MenuIcon,
    },
    data () {
        return {
            navBarExpanded: false,
            routes: [
                { name: 'Home', to: '/' },
                { name: 'Résumé', to: '/resume' },
                { name: 'Projects', to: '/projects' },
                { name: 'Photography', to: '/photography' },
                { name: 'Contact', to: '/contact' },
            ],
        };
    },
    methods: {
        toggleNavBar: function () {
            this.navBarExpanded = !this.navBarExpanded;

            Firebase.logEvent(AnalyticsEvent.Click, {
                component: 'navigation-header',
                action: this.navBarExpanded ? 'collapse' : 'expand',
            });
        },
        trackClick: function (route: string) {
            // Close mobile the nav bar if it is expanded and the user changes pages
            if (this.navBarExpanded) {
                this.navBarExpanded = false;
            }

            Firebase.logEvent(AnalyticsEvent.Click, {
                component: 'navigation-header',
                route,
            });
        },
    },
});
</script>

<style lang="less">
    @import '@/less/constants.less';

    #nav {
        padding: 0;
        text-align: center;

        #navbar {
            padding: 1em 0 1em 0;
            list-style-type: none;
            margin: 0;
            overflow: hidden;
            background-color: @backgroundgray;

            li {
                /*display: inline-block;*/
                padding: .6em;
                padding-left: 1.1em;
                padding-right: 1.1em;
                color: @lightgray;

                * {
                    vertical-align: middle
                }

                a {
                    font-weight: bold;
                    color: @lightgray;
                    text-decoration: none;
                    padding: 1em;

                    &:visited {
                        color: @lightgray;
                    }

                    &:hover {
                        color: @white;
                    }

                    &.router-link-exact-active {
                        color: @lightblue;
                    }
                }

                &.nav-toggle {
                    cursor: pointer;
                    position: absolute;
                    left: 0;
                }
            }
        }

        &:after {
            content: '';
            display: block;
            width: 100%;
            height: 0.75em;
            background-color: @lightblue;
        }
    }

    @media @upToNarrowQuery {
        #nav {
            #navbar {
                min-height: 3em;

                &.expanded {
                    li {
                        display: block;
                    }
                }

                li {
                    display: none;

                    &.nav-toggle {
                        display: block;
                    }
                }
            }
        }
    }

    @media @narrowAndUpQuery {
        #nav {
            #navbar {
                &.expanded {
                    li {
                        display: inline-block;
                    }
                }

                li {
                    display: inline-block;

                    &.nav-toggle {
                        display: none;
                    }
                }
            }
        }
    }
</style>
