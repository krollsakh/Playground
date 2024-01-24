import type { ComposeOption } from 'echarts/core'
import type { BarSeriesOption } from 'echarts/charts'
import type {
  TooltipComponentOption,
  LegendComponentOption,
  GridComponentOption
} from 'echarts/components'

export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export type ChartsOption = ComposeOption<
| TooltipComponentOption
| LegendComponentOption
| GridComponentOption
| BarSeriesOption
>
