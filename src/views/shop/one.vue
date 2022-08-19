<template>
  <div>
      <h1>主要内容</h1>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
console.log(route.params.id)
</script>

<style lang="scss" scoped>

</style>