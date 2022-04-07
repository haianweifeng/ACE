export default {
    state: {
        tabList: [],
    },
    getters: {
    },
    mutations: {
        delTagsItem(state, data) {
            state
                .tabList
                .splice(data.index, 1);
        },
        setTagsItem(state, data) {
            state
                .tabList
                .push(data)
        },
    },
    actions: {
    }
}