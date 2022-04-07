<template>
    <div class="overview-container">
        <div class="dollar-icon">
            <img :src="icon" alt="dollar-icon">
        </div>
        <div class="desc">
            <div class="total">{{ total }}</div>
            <div class="extra">
                <div class="name">{{ name }}</div>
                <div class="overdue" v-if="overdue">{{ overdue }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import { toRefs } from "vue";
    export default {
        name: "OverviewCard.vue",
        props: ['data'],
        setup(props) {
            const { icon, total, name, overdue } = toRefs(props.data);
            return {
                icon,
                total,
                name,
                overdue
            }
        }
    }
</script>

<style lang="scss" scoped>
    .overview-container {
        flex: 1;
        padding: 16px 18px;
        margin-right: 24px;
        display: flex;
        align-items: center;
        background: #FFFFFF;
        box-sizing: border-box;
        border-radius: 5px;
        border: 1px solid #F1F1F1;

        &:last-child {
            margin-right: 0px;
        }

        .dollar-icon {
            img {
                width: 19px;
                height: 23px;
            }
        }

        .desc {
            padding-left: 17px;
            .total {
                color: #333;
                font-weight: 700;
                font-size: 16px;
                line-height: 24px;
            }

            .extra {
                margin-top: 4px;
                display: flex;
                align-items: center;
                .name {
                    color: #767676;
                    font-weight: 400;
                    line-height: 16px;
                }
                .overdue {
                    font-weight: 700;
                    line-height: 16px;
                    color: #EB5757;
                    margin-left: 6px;
                    padding: 4px 12px;
                    background: rgba(235, 87, 87, 0.05);
                    border-radius: 10px;
                }
            }
        }
    }
</style>