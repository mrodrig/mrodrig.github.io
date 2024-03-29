/* eslint-disable */
import Vue from 'vue';
import VueRouter, { Route } from 'vue-router';

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter;
    $route: Route;
  }
}
