import { createStore } from 'vuex';
import dashboard from './modules/dashboard';
import menu from './modules/menu';
import tab from './modules/tab';

const store = createStore({
    state() {
        return {}
    },
    modules: {
        dashboard,
        menu,
        tab
    },
    mutations: {
    }
});

export default store;
