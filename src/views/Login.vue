<template>
  <div>
    欢迎来到登录页面
    <button @click="addCount">叠加值</button>  
    <button @click="linkToIndex">进入主页</button>  
  </div>
</template>
<script>
export default {
  data(){
    return {
      
    }
  },

  methods:{
    linkToIndex(){
      this.$router.push({path:'/index'});
    },

    addCount(){
      this.$store.commit('changeCount');
    }
  }
}
</script>
<style scoped>

</style>