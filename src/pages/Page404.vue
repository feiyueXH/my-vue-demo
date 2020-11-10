<template>
  <h1>404</h1>
</template>
<script>
export default {
  name: 'Page404',
  mounted() {
    if (!this.$store.state.isLogin) {
      this.$router.replace({ path: '/login' })
      return
    }
    if (!this.$store.state.initedApp) {
      this.$router.replace({ path: '/init' })
    }
  }
}
</script>
