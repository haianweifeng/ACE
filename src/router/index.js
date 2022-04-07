import {createRouter, createWebHashHistory} from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    {
        path: "/",
        redirect: "/dashboard"
    },
    {
        path: "/",
        name: "Home",
        component: Home,
        children: [
            {
                path: "/dashboard",
                name: "dashboard",
                meta: {
                    title: 'Home'
                },
                component: () => import ( /* webpackChunkName: "dashboard" */ "../views/Dashboard/Dashboard.vue")
            },
            {
                path: "/sales",
                name: "sales",
                meta: {
                    title: 'Sales'
                },
                component: () => import ( /* webpackChunkName: "dashboard" */ "../views/Sales.vue")
            },
            {
                path: "/purchases",
                name: "purchases",
                meta: {
                    title: 'Purchases'
                },
                component: () => import ( /* webpackChunkName: "dashboard" */ "../views/Purchases.vue")
            },
            {
                path: "/credit",
                name: "credit",
                meta: {
                    title: 'Credit'
                },
                component: () => import ( /* webpackChunkName: "dashboard" */ "../views/Credit.vue")
            },
            {
                path: "/products",
                name: "products",
                meta: {
                    title: 'Products'
                },
                component: () => import ( /* webpackChunkName: "dashboard" */ "../views/Products.vue")
            },
            {
                path: "/business",
                name: "business",
                meta: {
                    title: 'Business'
                },
                component: () => import ( /* webpackChunkName: "dashboard" */ "../views/Business.vue")
            },
            {
                path: "/cash",
                name: "cash",
                meta: {
                    title: 'Cash'
                },
                component: () => import ( /* webpackChunkName: "dashboard" */ "../views/Cash.vue")
            },
            {
                path: "/hr",
                name: "hr",
                meta: {
                    title: 'HR'
                },
                component: () => import ( /* webpackChunkName: "dashboard" */ "../views/HR.vue")
            },
            {
                path: "/reports",
                name: 'reports',
                meta: {
                    title: 'Reports'
                },
                component: () => import ( /* webpackChunkName: "dashboard" */ "../views/Reports.vue")
            },
            {
                path: "/settings",
                name: 'settings',
                meta: {
                    title: 'Settings'
                },
                component: () => import ( /* webpackChunkName: "dashboard" */ "../views/Settings.vue")
            },
            {
                path: "/contact",
                name: 'contact',
                meta: {
                    title: 'Contact'
                },
                component: () => import ( /* webpackChunkName: "dashboard" */ "../views/Contact.vue")
            },
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
