<template>
  <div class="login">
    <div class="login-test">测试</div>
    <svg-icon icon-class="dashboard" />
  </div>
</template>

<script>
import storage from '@/utils/storage'
export default {
  name: 'Login',
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
.login{
  margin: 0;
  padding: 0;
  &-test{
    color: red;
    font-size: 16px;
  }
}
</style>
