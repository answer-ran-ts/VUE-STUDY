<template>
  <div v-if="isSeriesEmpty">暂无数据</div>
  <chart-pie v-else v-bind="$props" />
</template>

<script>
import { isEmpty } from 'lodash'
import ChartPie from './EchartsPie.vue'
export default {
  name: 'EchartPie',
  components: { ChartPie },
  props: ChartPie.props,
  computed: {
    // 针对饼图数据是不是无效的判断
    isSeriesEmpty () {
      return (
        isEmpty(this.seriesData) || this.seriesData.every((item) => !item.value)
      )
    }
  }
}
</script>
