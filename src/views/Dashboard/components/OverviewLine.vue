<template>
    <div class="line-container">
        <div class="header">
            <div class="left">
                <div class="title">Sales Trend</div>
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
        <div id="line" style="width: 100%;height:240px;"></div>
    </div>
</template>

<script>
    import {onMounted, onUnmounted, ref, watch} from 'vue';
    import * as echarts from 'echarts/core';
    import { LineChart } from 'echarts/charts';
    import circleIcon from '../assets/circle.png';
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
        LineChart,
        LabelLayout,
        UniversalTransition,
        CanvasRenderer
    ]);
    export default {
        name: "OverviewLine.vue",
        props: ['data'],
        setup(props) {
            const options = [
                {
                    value: '1',
                    label: 'Monthly',
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
                    grid: {
                        top: 32,
                        left: '15%'
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#f1f1f1'
                            }
                        },
                        axisLabel: {
                            color: '#333333',
                            fontFamily: 'DIN Round Pro',
                            lineHeight: 16
                        },
                        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
                    },
                    yAxis: {
                        type: 'value',
                        min: 0,
                        max: 12,
                        interval: 3,
                        axisLabel: {
                            formatter: function(value) {
                                return '{profile|' + value + 'K}'
                            },
                            rich: {
                                profile: {
                                    padding: [3, 10],
                                    color: '#333333',
                                    fontFamily: 'DIN Round Pro',
                                    lineHeight: 16
                                }
                            }
                        }
                    },
                    series: [
                        {
                            data: props.data,
                            type: 'line',
                            smooth: true,
                            symbol: `image://${circleIcon}`,
                            symbolSize: 10,
                            lineStyle: {
                                color: '#288E51',
                                width: 1,
                                cap: 'round'
                            },
                            areaStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    { offset: 0, color: "rgba(40, 142, 81, 0.28)" },
                                    { offset: 1, color: "rgba(40, 142, 81, 0.05)" }
                                ])
                            },
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
                myChart = echarts.init(document.getElementById('line'));
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
            });

            return { options, month };
        }
    }
</script>

<style lang="scss" scoped>
    .line-container {
        flex: 1;
        padding: 16px;
        margin-right: 24px;
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
            }

            .right {
                flex: 1;
            }
        }

    }
</style>