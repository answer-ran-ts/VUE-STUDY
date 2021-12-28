<template>
  <div class="test">
    <button>登陆</button>
    <svg-icon icon-class="dashboard" />
  </div>
</template>

<script>
import storage from '@/utils/storage'
export default {
  name: '',
  props: {},
  components: {},
  data () {
    return {}
  },
  created () {},
  mounted () {},
  methods: {
    loginAdmin () {
      this.$http
        .getAuthCode({
          account: 'shequguanfang',
          password: 'OOoo0000'
        })
        .then((res) => {
          storage.set('case-comunity')
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
