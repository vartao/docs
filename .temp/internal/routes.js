/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "D:\\CoderLife\\StudyNotes\\docs\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-4a244471",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-4a244471").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-72db4227",
    path: "/blog/backend/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-72db4227").then(next)
    },
  },
  {
    path: "/blog/backend/index.html",
    redirect: "/blog/backend/"
  },
  {
    name: "v-f48866b2",
    path: "/blog/basic/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-f48866b2").then(next)
    },
  },
  {
    path: "/blog/basic/index.html",
    redirect: "/blog/basic/"
  },
  {
    name: "v-414ff98c",
    path: "/blog/basic/network/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-414ff98c").then(next)
    },
  },
  {
    path: "/blog/basic/network/index.html",
    redirect: "/blog/basic/network/"
  },
  {
    name: "v-632e0f64",
    path: "/blog/backend/java.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-632e0f64").then(next)
    },
  },
  {
    name: "v-b5d025b2",
    path: "/blog/fontend/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-b5d025b2").then(next)
    },
  },
  {
    path: "/blog/fontend/index.html",
    redirect: "/blog/fontend/"
  },
  {
    name: "v-5f2d7a78",
    path: "/blog/fontend/html.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-5f2d7a78").then(next)
    },
  },
  {
    name: "v-3f42e2c4",
    path: "/blog/fontend/javascript.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-3f42e2c4").then(next)
    },
  },
  {
    name: "v-444f7dd2",
    path: "/my/my.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-444f7dd2").then(next)
    },
  },
  {
    path: '*',
    component: GlobalLayout
  }
]