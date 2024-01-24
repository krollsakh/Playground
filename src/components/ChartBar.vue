<script setup lang="ts">
import { use } from 'echarts/core'
import { BarChart } from 'echarts/charts'
import {
  TooltipComponent,
  LegendComponent,
  DatasetComponent,
  GridComponent
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'
import type { DatasetComponentOption } from 'echarts/components'

use([
  TooltipComponent,
  LegendComponent,
  DatasetComponent,
  GridComponent,
  BarChart,
  CanvasRenderer
])

import VChart from 'vue-echarts'
import { computed } from 'vue'
import { ECBasicOption } from 'echarts/types/dist/shared'

export interface Props {
  dataset?: DatasetComponentOption
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  dataset: undefined,
  loading: false
})

const option = computed<ECBasicOption>(() => {
  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '1%',
      right: '1%',
      bottom: '1%',
      containLabel: true
    },
    dataset: props.dataset,
    xAxis: {
      type: 'category'
    },
    yAxis: {
      type: 'value'
    },
    series: props.dataset?.dimensions?.slice(1).map(() => {
      return {
        type: 'bar',
        stack: 'total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        barWidth: '90%'
      }
    })
  }
})

const loadingOptions = {
  text: 'Загрузка',
  // color: '#c23531',
  textColor: '#000',
  maskColor: 'rgba(255, 255, 255, 0.8)',
  zlevel: 0,

  // Font size. Available since `v4.8.0`.
  fontSize: 14,
  // Show an animated "spinner" or not. Available since `v4.8.0`.
  showSpinner: true,
  // Radius of the "spinner". Available since `v4.8.0`.
  spinnerRadius: 10,
  // Line width of the "spinner". Available since `v4.8.0`.
  lineWidth: 3,
  // Font thick weight. Available since `v5.0.1`.
  fontWeight: 'normal',
  // Font style. Available since `v5.0.1`.
  fontStyle: 'normal',
  // Font family. Available since `v5.0.1`.
  fontFamily: 'sans-serif'
}
</script>

<template>
  <VChart
    :option="option"
    :loading="loading"
    :loading-options="loadingOptions"
    autoresize
  />
</template>
