<template>
    <div class="dashboard-container">
        <div class="item-section">
            <div class="header">Overview</div>
            <div class="overview-card">
                <OverviewCard v-for="item in overViews" :key="item.id" :data="item" />
            </div>
            <div class="overview-chart">
                <OverviewBar :data="barData" />
                <OverviewLine :data="lineData" />
                <OverviewPie :data="pieData" />
            </div>
        </div>
        <div class="item-section">
            <div class="header">
                Transactions
                <SearchForm />
            </div>
            <div class="table-section">
                <TransactionTable :data="transactionTable" />
            </div>
        </div>
        <div class="item-section">
            <div class="header">
                Business Contacts
                <SearchForm />
            </div>
            <div class="table-section">
                <BusinessTable :data="businessTable" />
            </div>
        </div>
    </div>
</template>

<script>
    import { useStore } from "vuex";
    import OverviewCard from "./components/OverviewCard.vue";
    import OverviewBar from "./components/OverviewBar.vue";
    import OverviewPie from "./components/OverviewPie.vue";
    import OverviewLine from "./components/OverviewLine.vue";
    import TransactionTable from "./components/TransactionTable.vue";
    import BusinessTable from "./components/BusinessTable.vue";
    import Pagination from "./components/Pagination.vue";
    import SearchForm from "./components/SearchForm.vue";
    import { computed } from "vue";

    export default {
        name: "Dashboard.vue",
        components: {
            OverviewCard,
            OverviewBar,
            OverviewPie,
            OverviewLine,
            TransactionTable,
            BusinessTable,
            Pagination,
            SearchForm
        },
        setup() {
            const store = useStore();
            const overViews = computed(() => {
               return store.state.dashboard.overviews.map((item) => item);
            });
            const barData = computed(() => {
                return store.state.dashboard.bar;
            });
            const lineData = computed(() => {
                return store.state.dashboard.line;
            });
            const pieData = computed(() => {
                return store.state.dashboard.pie;
            });
            const transactionTable = computed(() => {
                return store.state.dashboard.transactionTable;
            });
            const businessTable = computed(() => {
                return store.state.dashboard.businessTable;
            });
            return {
                overViews,
                barData,
                lineData,
                pieData,
                transactionTable,
                businessTable
            };
        }
    }
</script>

<style lang="scss" scoped>
.dashboard-container {
    padding: 24px 38px 24px 40px;
    .item-section {
        margin-bottom: 32px;
        .header {
            color: #000;
            font-weight: 700;
            font-size: 18px;
            line-height: 24px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .overview-card {
            display: flex;
            margin-top: 16px;
            margin-bottom: 16px;
        }

        .overview-chart {
            display: flex;
        }

        .table-section {
            margin-top: 18px;
        }
    }
}
</style>