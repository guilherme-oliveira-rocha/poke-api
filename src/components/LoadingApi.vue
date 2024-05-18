<script setup lang="ts">
</script>
<template>
<div class="absolute w-full h-full z-20 transform -translate-x-1/2 top-0 left-1/2 bg-black bg-opacity-60">
    <div class="absolute inset-0 mx-auto my-auto flex flex-col items-center justify-center">
      <div
        class="inline-block h-20 w-20 animate-spin rounded-full border-8 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
        role="status">
      </div>
      <span class="font-mono text-white text-3xl font-semibold mt-3">
        Loading...
      </span>
    </div>
  </div>
</template>
<style scoped>
</style>
