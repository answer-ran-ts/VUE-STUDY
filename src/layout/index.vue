<template>
  <div :class="classObj" class="app-wrapper">
    <Sidebar class="sidebar-container" />
    <div class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <Navbar />
      </div>
      <AppMain />
    </div>
  </div>
</template>

<script>
import { Sidebar, Navbar, AppMain } from './components'
import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: '',
  props: {},
  components: {
    Sidebar,
    Navbar,
    AppMain
  },
  mixins: [ResizeMixin],
  computed: {
    sidebar () {
      return this.$store.state.app.sidebar
    },
    fixedHeader () {
      return this.$store.state.settings.fixedHeader
    },
    classObj () {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation
      }
    }
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.scss';

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  background: red;
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}
</style>
