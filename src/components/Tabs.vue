<template>
    <div class="tabs-container" v-if="isShow">
        <el-tabs
            closable
            v-model="activeName"
            type="border-card"
            class="custom-tabs"
            @tab-remove="removeTab"
            @tab-click="handleClick"
        >
            <el-tab-pane
                v-for="item in tabList"
                :key="item.name"
                :label="item.title"
                :name="item.name"
            />
        </el-tabs>
    </div>
</template>

<script>
    import { useStore } from "vuex";
    import { computed, watch, ref } from "vue";
    import { onBeforeRouteUpdate, useRoute, useRouter } from "vue-router";

    export default {
        name: "Tabs.vue",
        setup() {
            const route = useRoute();
            const router = useRouter();

            const store = useStore();
            const tabList = computed(() => store.state.tab.tabList);
            const isShow = computed(() => tabList.value.length > 0);

            const activeName = ref(route.fullPath.substring(1));

            // 设置标签
            const setTags = (route) => {
                const isExist = tabList.value.some((item) => {
                    return item.path === route.fullPath;
                });
                if (!isExist) {
                    if (tabList.value.length >= 8) {
                        store.commit("delTagsItem", { index: 0 });
                    }
                    store.commit("setTagsItem", {
                        name: route.name,
                        title: route.meta.title,
                        path: route.fullPath,
                    });
                }
            };
            setTags(route);

            onBeforeRouteUpdate((to) => {
                activeName.value = to.fullPath.substring(1);
                setTags(to);
            });

            const removeTab = (targetName) => {
                const index = tabList.value.findIndex((item) => item.name === targetName);
                const delItem = tabList.value[index];
                store.commit("delTagsItem", { index });
                const item = tabList.value[index]
                    ? tabList.value[index]
                    : tabList.value[index - 1];
                if (item) {
                    delItem.path === route.fullPath && router.push(item.path);
                } else {
                    router.push("/");
                }
            };

            const handleClick = (tab, event) => {
                const item = tabList.value.find((item) => item.name === tab.props.name);
                if (item) {
                    router.push(item.path);
                } else {
                    router.push("/");
                }
            };

            return {
                isShow,
                tabList,
                activeName,
                removeTab,
                handleClick
            };
        },
    }
</script>

<style lang="scss" scoped>
.tabs-container {
    position: relative;
    height: 48px;
    overflow: hidden;
    background: #fff;
}
</style>
<style>
    .custom-tabs.el-tabs--border-card>.el-tabs__header {
        height: 48px;
        background-color: #fff;
    }
    .custom-tabs.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
        background-color: #f1f1f1;
    }
    .custom-tabs.el-tabs--border-card .el-tabs__item {
        height: 48px;
        line-height: 48px;
        font-weight: 700;
        color: #767676!important;
    }

    .custom-tabs.el-tabs--border-card .el-tabs__item.is-active {
        color: #2873E7!important;
    }
    .custom-tabs .is-icon-close {
        top: 3px;
    }
    .custom-tabs.el-tabs--border-card {
        border-left: 0px;
    }
</style>