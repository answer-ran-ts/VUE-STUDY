<template>
  <div class="login">
    <el-button type="primary" size="mini">登录</el-button>
    <div class="login-test">测试</div>
  </div>
</template>

<script>
import Storage from '@/utils/storage'
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
          Storage.set('case-comunity')
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
.login-test {
  color: $panGreen;
  font-weight: 700;
}
</style>
