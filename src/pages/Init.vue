<template>
  <div></div>
</template>
<script>
import { getAccessMenuList } from '../mock/menus'
import components from '../router/routerComponents.js'
export default {
  async mounted() {
    if (!this.$store.state.isLogin) {
      this.$router.push({ path: '/login' })
      return
    }
    if (!this.$store.state.initedApp) {
      const loading = this.$loading({
        lock: true,
        text: '初始化中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      const menus = await getAccessMenuList() // 模拟从后端获取
      var routers = [...menus]
      for (const router of routers) {
        const component = components[router.component]
        router.component = component
      }
      this.$router.addRoutes(routers)
      this.$store.dispatch('setAccessMenuList', menus).then(() => {
        loading.close()
        this.$router.replace({
          path: '/'
        })
      })
    } else {
      this.$router.replace({
        path: '/'
      })
    }
  }
}
</script>
