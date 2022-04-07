<template>
    <div class="bar-container">
        <div class="title">Profit & Loss</div>
        <div id="bar" style="width: 100%;height:240px;"></div>
    </div>
</template>

<script>
    import { onMounted, onUnmounted, watch } from 'vue';
    import * as echarts from 'echarts/core';
    import { BarChart } from 'echarts/charts';
    import {
        TitleComponent,
        TooltipComponent,
        GridComponent,
        DatasetComponent,
        TransformComponent
    } from 'echarts/components';
    import { LabelLayout, UniversalTransition } from 'echarts/features';
    import { CanvasRenderer } from 'echarts/renderers';

    echarts.use([
        TitleComponent,
        TooltipComponent,
        GridComponent,
        DatasetComponent,
        TransformComponent,
        BarChart,
        LabelLayout,
        UniversalTransition,
        CanvasRenderer
    ]);
    export default {
        name: "OverviewBar.vue",
        props: ['data'],
        setup(props) {
            let myChart;
            const getOption = () => {
                return {
                    grid: {
                        top: 62,
                        left: '15%'
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    xAxis: {
                        type: 'category',
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
                        min: -12,
                        max: 12,
                        interval: 6,
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
                            data: (props.data || []).map((d) => {
                                return Object.assign({}, {
                                    value: d,
                                    itemStyle: {
                                        color: d >=0 ? '#288E51' : '#EB5757',
                                        borderRadius: 2
                                    }
                                })
                            }),
                            type: 'bar'
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
                myChart = echarts.init(document.getElementById('bar'));
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
        }
    }
</script>

<style lang="scss" scoped>
.bar-container {
    flex: 1;
    padding: 16px;
    margin-right: 24px;
    background: #FFFFFF;
    border: 1px solid #F1F1F1;
    box-sizing: border-box;
    border-radius: 5px;

    .title {
        font-weight: 700;
        line-height: 16px;
        color: #333333;
    }
}
</style>