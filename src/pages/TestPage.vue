<script setup lang="ts">
import { DatasetComponentOption } from 'echarts/types/dist/echarts'
import ChartBar from 'src/components/ChartBar.vue'
import { ref } from 'vue'

const dataset = ref<DatasetComponentOption>()
const isLoading = ref(false)

const loadData = () => {
  isLoading.value = true
  setTimeout(() => {
    const datasetSrc = {
      dimensions: ['month', 'Нач.остаток', 'Новые', 'Закрытые', 'Кон.остаток'],
      source: [
        { month: 'yan 2023', 'Нач.остаток': 13.3, Новые: 85.8, Закрытые: 93.7, 'Кон.остаток': 112.5 },
        { month: 'фев 2023', 'Нач.остаток': 43.3, Новые: 85.8, Закрытые: 93.7, 'Кон.остаток': 112.5 },
        { month: 'март 2023', 'Нач.остаток': 43.3, Новые: 85.8, Закрытые: 93.7, 'Кон.остаток': 112.5 },
        { month: 'апр 2023', 'Нач.остаток': 43.3, Новые: 85.8, Закрытые: 93.7, 'Кон.остаток': 112.5 }
      ]
    }
    dataset.value = datasetSrc
    isLoading.value = false
  }, 1000)
}
const loadData2 = () => {
  isLoading.value = true
  setTimeout(() => {
    const datasetSrc = {
      dimensions: ['month', 'Нач.остаток', 'Новые', 'Закрытые', 'Кон.остаток'],
      source: [
        { month: 'yan 2023', 'Нач.остаток': 130.3, Новые: 85.8, Закрытые: 93.7, 'Кон.остаток': 112.5 },
        { month: 'фев 2023', 'Нач.остаток': 423.3, Новые: 85.8, Закрытые: 93.7, 'Кон.остаток': 112.5 },
        { month: 'март 2023', 'Нач.остаток': 43.3, Новые: 85.8, Закрытые: 93.7, 'Кон.остаток': 112.5 },
        { month: 'апр 2023', 'Нач.остаток': 43.3, Новые: 85.8, Закрытые: 93.7, 'Кон.остаток': 112.5 },
        { month: 'yan 2024', 'Нач.остаток': 130.3, Новые: 85.8, Закрытые: 93.7, 'Кон.остаток': 112.5 },
        { month: 'фев 2025', 'Нач.остаток': 423.3, Новые: 85.8, Закрытые: 93.7, 'Кон.остаток': 112.5 },
        { month: 'март 2026', 'Нач.остаток': 43.3, Новые: 85.8, Закрытые: 93.7, 'Кон.остаток': 112.5 },
        { month: 'апр 2027', 'Нач.остаток': 43.3, Новые: 85.8, Закрытые: 93.7, 'Кон.остаток': 112.5 }
      ]
    }
    isLoading.value = false
    dataset.value = datasetSrc
  }, 1000)
}
</script>

<template>
  <div style="height: fit-content;">
    <h3>1</h3>
    <ChartBar
      :dataset="dataset"
      :loading="isLoading"
      class="chart"
     />
    <q-btn
      color="white"
      text-color="black"
      label="Go"
      @click="loadData"
    />
    <q-btn
      color="white"
      text-color="black"
      label="Go 2"
      @click="loadData2"
    />
    <h3>2</h3>
  </div>
</template>

<style scoped>
.chart {
  height: 500px;
}
</style>
