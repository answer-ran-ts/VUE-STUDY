<template>
  <div class="test">
    <button @click="loginAdmin">登陆</button>
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

</style>
