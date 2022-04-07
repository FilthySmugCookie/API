import { createInertiaApp, Link, Head } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";
import { createApp, h } from "vue";
import Layout from "./Shared/Layout";

createInertiaApp({
    resolve: (name) => {
        let page = require(`./Pages/${name}`).default;
        if (page.layout === undefined) {
            page.layout = Layout;
        }
        return page;
    },

    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .component("Link", Link) // Za link tova stava no ne hybavo vinagi da se pravi
            .component("Head", Head) // Globally register head
            .mount(el);
    },

    //title: (title) => "Terminal Illness - ${title}", // dobavqsh nachaloto na title kum vsqka stranica
});

InertiaProgress.init({
    color: "green",
    showSpinner: "true",
});
