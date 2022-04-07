<template>
    <el-table
            :data="tableData"
            style="width: 100%"
            :header-row-class-name="rowClassName"
    >
        <el-table-column label="Ref No." prop="refNo" width="140" />
        <el-table-column label="Type" prop="type" width="180" />
        <el-table-column label="Business Contact" prop="contact" width="240" />
        <el-table-column label="Date" prop="date" width="140" />
        <el-table-column label="Amount" prop="amount" width="180" />
        <el-table-column label="Status">
            <template #default="scope">
                <div class="status-section">
                    <div>
                        <div :class="{
                    'status-tag': true,
                    overdue: scope.row.status === 'Overdue',
                    paid: scope.row.status === 'Paid',
                    unPaid: scope.row.status === 'Unpaid'
                }"
                             v-if="scope.row.status"
                        >
                            {{ scope.row.status }}
                        </div>
                        <span v-else>-</span>
                    </div>
                    <div class="operation">
                        <el-dropdown>
                            <span class="circle-ul">
                                <span class="circle" />
                                <span class="circle" />
                                <span class="circle" />
                            </span>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item>Action 1</el-dropdown-item>
                                    <el-dropdown-item>Action 2</el-dropdown-item>
                                    <el-dropdown-item>Action 3</el-dropdown-item>
                                    <el-dropdown-item disabled>Action 4</el-dropdown-item>
                                    <el-dropdown-item divided>Action 5</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </div>
                </div>
            </template>
        </el-table-column>
    </el-table>
    <div class="pagination-section">
        <Pagination :total="total" v-model:currentPage="currentPage" v-model:pageSize="pageSize" />
    </div>
</template>

<script>
    import { ref, computed, watch } from "vue";
    import Pagination from "./Pagination.vue";
    export default {
        name: "TransactionTable.vue",
        components: {
            Pagination
        },
        props: ['data'],
        setup(props) {
            const currentPage = ref(1);
            const pageSize = ref(10);
            const list = ref(props.data);

            watch(() => {
                props.data
            }, (newVal, oldVal) => {
                list.value = newVal;
            }, { deep: true });

            const total = computed(() => {
                return list.value.length;
            });

            const tableData = computed(() => {
                const start = (currentPage.value - 1) * pageSize.value;
                const end = currentPage.value * pageSize.value;
                return list.value.slice(start, Math.min(end, total.value));
            });

            const rowClassName = () => {
                return 'row-class';
            };

            return {
                currentPage,
                pageSize,
                tableData,
                total,
                rowClassName
            };
        }
    }
</script>

<style lang="scss" scoped>
    .status-tag {
        display: inline-block;
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
        border-radius: 10px;
        padding: 2px 10px;
    }
    .overdue {
        color: #EB5757;
        background: rgba(235, 87, 87, 0.15);
    }
    .paid {
        color: #288E51;
        background: rgba(40, 142, 81, 0.15);
    }
    .unPaid {
        color: #E99773;
        background: rgba(222, 165, 18, 0.15);
    }

    .status-section {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .operation {
            display: flex;
            align-items: center;
            cursor: pointer;
            .circle-ul {
                .circle {
                    width: 3px;
                    height: 3px;
                    border-radius: 50%;
                    background: #767676;
                    margin-bottom: 2px;
                    display: block;
                }
            }
        }

    }

    .pagination-section {
        margin-top: 18px;
    }
</style>
<style>
    .el-table {
        border-radius: 5px;
    }
    .el-table .cell {
        color: #333;
        line-height: 16px;
        padding: 8px 20px;
    }
    .el-table .row-class th {
        color: #333;
        font-weight: 700;
        line-height: 16px;
        background: #F1F1F1;
        /*box-shadow: 0px 1px 2px rgba(51, 51, 51, 0.1);*/
    }
    .el-table .el-table__body td.el-table__cell {
        border-right: 1px solid #f1f1f1;
    }
</style>