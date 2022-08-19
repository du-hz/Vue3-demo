<template>
  <div>
    type
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      name: '杜宏征'
    }
  },  
  mounted() {
    console.log(this.$route.params.id);
    console.log(this.id)
  },
  // 比较特殊，是在路由守卫创建之前调用所以获取不到this，其他都可以直接获取this
  beforeRouteEnter(to, from, next) { 
    console.log('路由进入组件之前')
    // console.log('直接调用', this.name);  // 报错
    next((vm) => {
      console.log('放行后', vm.name)
      // console.log('放行后this', this.name);  // 报错
    })
  },
  beforeRouteUpdate() {
    console.log('路由更新组件之前')
  },
  beforeRouteLeave() {
    console.log('路由离开组件之前')
  }
}
</script>

<!-- <script setup>
  import { useRoute } from 'vue-router'
  console.log(useRoute().params.id)

  // "vue/setup-compiler-macros": true,  // .eslintrc.js 解决vue3中使用defineProps报错问题
  const props = defineProps({
    id: String
  })
  console.log(props.id)
</script> -->