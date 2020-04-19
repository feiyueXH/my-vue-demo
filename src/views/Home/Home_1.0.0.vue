<template>
  <div class="home-container">{{ newMsg }}</div>
</template>
<script>
export default {
  data () {
    return {
      msg: '欢迎使用药快销!',
      downCount: 3
    }
  },
  computed: {
    newMsg () {
      return this.msg + this.downCount + '秒后进入登录页'
    }
  },
  mounted () {
    const self = this
    function downCountFunc () {
      if (self.downCount > 0) {
        self.downCount--
        setTimeout(downCountFunc, 1000)
      } else {
        self.$router.replace({ path: '/login' })
        // alert("开始跳转登录页");
      }
    }
    downCountFunc()
  },

  methods: {}
}
</script>
<style scoped>
.home-container {
  background: #ffffff;
  display: inline;
}
</style>
