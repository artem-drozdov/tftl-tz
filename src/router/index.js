import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../views/MainPage.vue";

Vue.use(VueRouter);

let firstLoadPage = true;
const routes = [
    {
        path: "/",
        name: "home",
        component: MainPage,
    },
    {
        path: "/about",
        name: "about",
        component: () => import("../views/AboutPage.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    if (firstLoadPage) {
        firstLoadPage = false;
        return next();
    }

    const appNode = document.getElementById("app");

    appNode.classList.add("animate-route");

    setTimeout(() => {
        next();
    }, 1000);

    setTimeout(() => {
        appNode.classList.remove("animate-route");
    }, 1500);
});

export default router;
