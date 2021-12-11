<template>
  <div class="test">
    <div>{{name | setName}}</div>
    <div>{{this.$tools.getListVal(arr,3)}}</div>
    <button @click="save">存储localStorage</button>
    <button @click="get">获取localStorage</button>
    <button @click="seek">检测localStorage</button>
    <button @click="remove">删除localStorage</button>
  </div>
</template>

<script>
import Storage from '@/utils/Storage'
export default {
  name: '',
  props: {},
  components: {},
  data () {
    return {
      name: '测试',
      arr: [
        { itemKey: 1, itemValue: 'test1' },
        { itemKey: 2, itemValue: 'test2' },
        { itemKey: 3, itemValue: 'test3' },
        { itemKey: 4, itemValue: 'test4' }
      ]
    }
  },
  created () {},
  mounted () {},
  methods: {
    save () {
      Storage.set('name', this.arr)
    },
    get () {
      const newArr = Storage.get('name')
      console.log(newArr)
    },
    seek () {
      const hasName = Storage.seek('name')
      console.log(hasName)
    },
    remove () {
      Storage.remove('name')
    }
  }
}
</script>

<style lang="scss" scoped>
.test {
  display: flex;
  flex-direction: column;
  width: 200px;
  button {
    margin: 10px;
  }
}
</style>
