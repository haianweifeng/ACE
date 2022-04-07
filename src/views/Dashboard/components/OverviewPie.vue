<template>
    <div class="pie-container">
        <div class="header">
            <div class="left">
                <div class="title">SGD 12,500.00</div>
                <div class="sub-title">Expenses</div>
            </div>
            <div class="right">
                <el-select v-model="month" placeholder="Select" size="large">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                    />
                </el-select>
            </div>
        </div>
        <div id="pie" style="width: 100%;height:240px;"></div>
    </div>
</template>

<script>
    import {onMounted, onUnmounted, ref, watch} from 'vue';
    import * as echarts from 'echarts/core';
    import { PieChart } from 'echarts/charts';
    import {
        TitleComponent,
        TooltipComponent,
        LegendComponent,
        GridComponent,
        DatasetComponent,
        TransformComponent
    } from 'echarts/components';
    import { LabelLayout, UniversalTransition } from 'echarts/features';
    import { CanvasRenderer } from 'echarts/renderers';
    echarts.use([
        TitleComponent,
        TooltipComponent,
        LegendComponent,
        GridComponent,
        DatasetComponent,
        TransformComponent,
        PieChart,
        LabelLayout,
        UniversalTransition,
        CanvasRenderer
    ]);

    export default {
        name: "OverviewPie.vue",
        props: ['data'],
        setup(props) {
            const options = [
                {
                    value: '1',
                    label: 'Current Month',
                },
                {
                    value: '2',
                    label: 'Option2',
                },
            ];

            const month = ref('1');

            let myChart;

            const getOption = () => {
                return {
                    tooltip: {
                        trigger: 'item'
                    },
                    grid: {
                        top: 32,
                    },
                    legend: {
                        orient: 'vertical',
                        right: 'right',
                        top: '25%',
                        itemWidth: 8,
                        itemHeight: 8,
                        textStyle: {
                            color: '#333',
                            fontSize: 14,
                            lineHeight: 16,
                            padding: [0, 10]
                        }
                    },
                    series: [
                        {
                            name: 'Access From',
                            type: 'pie',
                            center: ['20%', '45%'],
                            radius: ['35%', '49%'],
                            avoidLabelOverlap: false,
                            label: {
                                show: false,
                                position: 'center'
                            },
                            labelLine: {
                                show: false
                            },
                            data: props.data
                        }
                    ]
                }
            };

            watch(props.data, () => {
                if (!myChart) return false;
                myChart.setOption(getOption());
            }, { deep: true });

            const draw = () => {
                // 绘制图表
                myChart = echarts.init(document.getElementById('pie'));
                myChart.setOption(getOption());
            };

            const handleSize = () => {
                myChart && myChart.dispose();
                draw();
            };

            onMounted(() => {
                draw();
                window.addEventListener('resize', handleSize);
            });

            onUnmounted(() => {
                window.removeEventListener('resize', handleSize);
                myChart && myChart.dispose();
            })

            return { options, month };
        }
    }
</script>

<style lang="scss" scoped>
    .pie-container {
        flex: 1;
        padding: 16px;
        background: #FFFFFF;
        border: 1px solid #F1F1F1;
        box-sizing: border-box;
        border-radius: 5px;

        .header {
            display: flex;
            .left {
                flex: 1;
                .title {
                    font-weight: 700;
                    line-height: 24px;
                    color: #333333;
                }

                .sub-title {
                    margin-top: 4px;
                    line-height: 16px;
                    color: #767676;
                }
            }

            .right {
                flex: 1;
            }
        }

    }
</style>