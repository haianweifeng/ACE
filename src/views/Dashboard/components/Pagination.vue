<template>
    <el-pagination
            v-model:currentPage="currentPage"
            v-model:page-size="pageSize"
            :page-sizes="pageSizesArr"
            layout="slot"
            :total="total"
    >
        <div class="pagination-info">
            <div class="left">
                <span>Show</span>
                <el-select :model-value="pageSize" @change="handleSizeChange"  class="size-select" placeholder="Select">
                    <el-option
                        v-for="item in pageSizes"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    />
                </el-select>
                <span>items per page [Total {{ total }} items]</span>
            </div>
            <div class="right">
                <span>Page</span>
                <el-select :model-value="currentPage" @change="handleCurrentChange"  class="size-select" placeholder="Select">
                    <el-option
                        v-for="item in pages"
                        :key="item"
                        :label="item"
                        :value="item"
                    />
                </el-select>
                <span>Out of {{total}}</span>
                <div class="arrow-section">
                    <el-icon
                        @click="handlePrev"
                        :class="{'arrow-left': true, 'disabled-arrow': currentPage === 1 }"
                    >
                        <arrow-left-bold />
                    </el-icon>
                    <el-icon
                        @click="handleNext"
                        :class="{'arrow-right': true, 'disabled-arrow': currentPage === pages }">
                        <arrow-right-bold />
                    </el-icon>
                </div>
            </div>
        </div>
    </el-pagination>
</template>

<script>
    import { toRefs, computed, watch } from "vue";
    export default {
        name: "Pagination.vue",
        props: {
            total: {
                type: Number,
            },
            currentPage: {
                type: Number
            },
            pageSize: {
                type: Number
            },
            pageSizes: {
                type: Array,
                default() {
                    return [
                        { label: '10', value: 10 },
                        { label: '20', value: 20 },
                        { label: '30', value: 30 },
                        { label: '40', value: 40 }
                    ]
                }
            }
        },
        setup(props, { emit }) {
            const { total, currentPage, pageSize, pageSizes } = toRefs(props);

            const pages = computed(() => {
                const value = Math.ceil(total.value / pageSize.value);
                return value;
            });

            const pageSizesArr = computed(() => {
                return pageSizes.value.map((item) => item.value);
            });

            watch(pageSize, () => {
                if (currentPage.value > pages.value) {
                    emit('update:currentPage', 1);
                }
            });

            const handleSizeChange = (val) => {
                emit('update:pageSize', val);
            };

            const handleCurrentChange = (val) => {
                emit('update:currentPage', val);
            };

            const handlePrev = () => {
                if (currentPage.value === 1) return;
                currentPage.value -= 1;
                emit('update:currentPage', currentPage.value - 1);
            };

            const handleNext = () => {
                if (currentPage.value === pages.value) return;
                currentPage.value += 1;
                emit('update:currentPage', currentPage.value + 1);
            };
            return {
                total,
                currentPage,
                pageSize,
                pageSizes,
                pageSizesArr,
                pages,
                handleSizeChange,
                handleCurrentChange,
                handlePrev,
                handleNext
            }
        }
    }
</script>

<style lang="scss" scoped>
.pagination-info {
    width: 100%;
    color: #767676;
    display: flex;
    line-height: 16px;
    .left, .right {
        flex: 1;
        display: flex;
        align-items: center;
    }

    .size-select {
        margin-left: 8px;
        margin-right: 8px;
    }

    .right {
        justify-content: flex-end;

        .arrow-section {
            margin-left: 25px;

            .arrow-left, .arrow-right {
                cursor: pointer;
                color: #767676;
            }

            .arrow-left {
                margin-right: 48px;
            }

            .disabled-arrow {
                color: #d4d4d4;
                cursor: not-allowed;
                /*pointer-events: none;*/
            }
        }
    }
}
</style>
<style>
    .size-select .el-input {
        width: 67px!important;
    }
</style>