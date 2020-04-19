<template>
  <div>
    {{ msg }}
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },

  computed: {
    msg: function () {
      return '当前状态值:' + this.$store.state.count
    }
  }
}
</script>
<style scoped></style>
