<template>
    <div class="search-container">
        <div class="form-item">
            <el-input
                v-model="search"
                size="large"
                placeholder="Search"
                prefix-icon="Search"
                :input-style="{ width: '328px' }"
            />
        </div>
        <div class="form-item">
            <el-button size="large">
                <img :src="filterIcon" alt="filter">
                <span class="btn-text">Filter</span>
            </el-button>
        </div>
        <div class="form-item">
            <el-dropdown>
                <el-button size="large">
                    All Time<el-icon class="el-icon--right"><arrow-down /></el-icon>
                </el-button>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>Action 1</el-dropdown-item>
                        <el-dropdown-item>Action 2</el-dropdown-item>
                        <el-dropdown-item>Action 3</el-dropdown-item>
                        <el-dropdown-item>Action 4</el-dropdown-item>
                        <el-dropdown-item>Action 5</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
        <el-button size="large">
            <img :src="plusIcon" alt="plus">
        </el-button>
    </div>
</template>

<script>
    import { ref } from "vue";
    import plusIcon from "../assets/bluePlus.png";
    import filterIcon from "../assets/filter.png";
    export default {
        name: "SearchForm.vue",
        setup() {
            const search = ref('');
            return { search, plusIcon, filterIcon };
        }
    }
</script>

<style lang="scss" scoped>
.search-container {
    display: flex;
    align-items: center;

    .form-item {
        margin-right: 8px;
    }

    .btn-text {
        line-height: 16px;
        color: #333333;
        padding-left: 8px;
    }
}
</style>