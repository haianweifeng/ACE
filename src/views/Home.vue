<template>
    <div class="container">
        <Header />
        <Sidebar />
        <div class="content-box">
            <Tabs />
            <div class="content">
                <router-view v-slot="{ Component }">
                    <transition name="move" mode="out-in">
                        <keep-alive :include="tabList">
                            <component :is="Component" />
                        </keep-alive>
                    </transition>
                </router-view>
            </div>
        </div>
    </div>
</template>
<script>
    import { computed } from "vue";
    import { useStore } from "vuex";
    import Header from "../components/Header.vue";
    import Sidebar from "../components/Sidebar.vue";
    import Tabs from '../components/Tabs.vue';
    export default {
        components: {
            Header,
            Sidebar,
            Tabs
        },
        setup() {
            const store = useStore();
            const tabList = computed(() =>
                store.state.tab.tabList.map((item) => item.name)
            );
            return {
                tabList
            };
        },
    };
</script>
<style lang="scss" scoped>
    .content-box {
        position: absolute;
        left: 257px;
        right: 0;
        top: 56px;
        bottom: 0;
        -webkit-transition: left .3s ease-in-out;
        transition: left .3s ease-in-out;
        background: #e5e5e5;

        .content {
            height: calc(100% - 48px);
            overflow-y: scroll;
            box-sizing: border-box;
        }
    }
</style>
