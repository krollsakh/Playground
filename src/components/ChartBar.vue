<script setup lang="ts">
import { use } from 'echarts/core'
import { BarChart } from 'echarts/charts'
import {
  TooltipComponent,
  LegendComponent,
  GridComponent
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

import VChart from 'vue-echarts'
import { ChartsOption } from 'components/models'

use([
  TooltipComponent,
  LegendComponent,
  GridComponent,
  BarChart,
  CanvasRenderer
])

const props = defineProps<{
  option: ChartsOption
}>()

console.log(props)

</script>

<template>
  <VChart
    :option="option"
    autoresize
  />
</template>
