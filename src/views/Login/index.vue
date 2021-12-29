<template>
  <div class="login">
    <div class="login--bg">
      <div class="login--commit">
        <van-button @click="handleLogin" type="primary" size="small">登录</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  props: {},
  components: {},
  data () {
    return {
      loading: false,
      loginForm: {
        phoneNum: '13412341234',
        userName: ''
      }
    }
  },
  created () {},
  mounted () {},
  methods: {
    handleLogin () {
      this.loading = true
      this.$store
        .dispatch('login', this.loginForm)
        .then(() => {
          this.$router.push({ path: this.redirect || '/' })
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  &--bg {
    width: 100%;
    height: 100vh;
    background: #fff;
  }
}
</style>
