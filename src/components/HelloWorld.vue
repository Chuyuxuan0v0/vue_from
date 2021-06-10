<template>
  <div class="hello">
  
    {{msg}}
  </div>
</template>

<script>
export default {   //暴露当前组件对象
  name: 'HelloWorld',
  data(){
    return {
      msg:"选择左边的项目开始"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
