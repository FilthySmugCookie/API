import { createInertiaApp, Link } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";
import { createApp, h } from "vue";
import Layout from "./Shared/Layout";

createInertiaApp({
    //KUREC
    resolve: async (name) => {
        let page = (await import(`./Pages/${name}`)).default;
        page.layout ??= Layout;
        return page;
    },

    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .component("Link", Link) // Za link tova stava no ne hybavo vinagi da se pravi
            .mount(el);
    },
});

InertiaProgress.init({
    color: "green",
    showSpinner: "true",
});
