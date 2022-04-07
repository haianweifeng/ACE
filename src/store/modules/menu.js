const base = '/src/assets';
export default {
    state: {
        menuList: [
            {
                icon: `${base}/home.png`,
                index: "/dashboard",
                title: "Home",
            },
            {
                icon: `${base}/sales.png`,
                index: "/sales",
                title: "Sales",
            },
            {
                icon: `${base}/purchases.png`,
                index: "/purchases",
                title: "Purchases",
            },
            {
                icon: `${base}/credit.png`,
                index: "/credit",
                title: "Credit & Debit Note",
            },
            {
                icon: `${base}/products.png`,
                index: "/products",
                title: "Products & Services",
            },
            {
                icon: `${base}/business.png`,
                index: "/business",
                title: "Business Contacts",
            },
            {
                icon: `${base}/group.png`,
                index: "/cash",
                title: "Cash & Bank",
            },
            {
                icon: `${base}/hr.png`,
                index: "/hr",
                title: "HR & Payroll",
            },
            {
                icon: `${base}/reports.png`,
                index: "/reports",
                title: "All Reports",
            },
            {
                icon: `${base}/settings.png`,
                index: "/settings",
                title: "Settings",
            },
            {
                icon: `${base}/contact.png`,
                index: "/contact",
                title: "Contact Us",
            },
        ],
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    }
}