<template>
  <div id="test">你好,{{content}}</div>
</template>

<script>
export default {
  data(){
    return {
      content:"忠岳"
    }
  }
}
</script>

<style>
  #test{
    font-size: 24px;
    color:blueviolet
  }
</style>