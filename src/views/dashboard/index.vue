<template>
  <div class="dashboard-container">
    <h1>vuex存储数据</h1>
    <div class="dashboard-text">
      <div>token:{{token}}</div>
      <div>name: {{ name }}</div>
      <div>device: {{ device }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters(['name', 'token', 'device'])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
