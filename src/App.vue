<template>
  <div>
      <p>{{msg}}</p>
      <p>{{num}}</p>
      <button @click="addMsg">加++</button>
      <router-link to="/home">go to home</router-link>
      <router-link to="/type/123">go to type</router-link>
      <router-link to="/user">go to user</router-link>
      <router-link to="/shop/666">go to shop</router-link>
      <button @click="goHome">去首页</button>
      <router-view name="shopTop"></router-view>
      <router-view></router-view>
      <router-view name="shopFooter"></router-view>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router';
  const msg = 10
  const num = ref(1)
  const router = useRouter()
  function addMsg() {
    num.value++
  }
  function goHome() {
    router.push('/home/styleOne')
  }
</script>

<style>

</style>
