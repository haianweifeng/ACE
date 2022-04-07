<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes"
                 text-color="#767676" active-text-color="#2873E7" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template #title>
                            <i :class="item.icon"></i>
                            <span>{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template #title>{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}</el-menu-item>
                            </el-submenu>
                            <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <img :src="item.icon" alt="" class="img-icon">
                        <template #title><span class="menu-title">{{ item.title }}</span></template>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import { computed } from "vue";
    import { useStore } from "vuex";
    import { useRoute } from "vue-router";
    export default {
        name: "Sidebar.vue",
        setup() {
            const route = useRoute();
            const onRoutes = computed(() => {
                return route.path;
            });
            const store = useStore();
            const items = computed(() => store.state.menu.menuList);
            return {
                items,
                onRoutes
            };
        },
    };
</script>

<style lang="scss" scoped>
    .sidebar {
        display: block;
        position: absolute;
        left: 0;
        top: 56px;
        bottom: 0;
        overflow-y: scroll;
        .img-icon {
            width: 20px;
            height: 20px;
            padding-right: 20px;
        }
        .menu-title {
            font-weight: bold;
        }
    }
    .sidebar::-webkit-scrollbar {
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse) {
        width: 257px;
    }
    .sidebar > ul {
        height: 100%;
    }
</style>