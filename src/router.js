import VueRouter from "vue-router";
import IndexPage from "@/pages/IndexPage.vue";
import TodoInfoPage from "@/pages/TodoInfoPage.vue";

const routes = [
    {
        name: 'home',
        path: '/',
        component: IndexPage,
    },
    {
        name: 'todoInfo',
        path: '/todo-info/:id',
        component: TodoInfoPage,
    },
]

export const router = new VueRouter({
    mode: 'history',
    routes,
})