<template>
  <div class="page-container">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },

  mounted () {
    this.$router.replace({ path: 'login' })
  }
}
</script>
<style scoped>
.page-container {
  background-color: #eeeeee;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
</style>
