<script lang="ts" setup>

const props = defineProps<{ title: string }>();

</script>

<template>
  <div class="relative mt-3 mb-3 w-min font-bold uppercase h3">
    <div class="relative z-10 px-1 pr-1.5"
         v-text="props.title.replace(' ', '&nbsp;')"/>
    <div class="w-full h-[55%] absolute bg-[#d9d9d9] opacity-40 top-[55%] z-0"/>
  </div>
</template>

<style lang="scss">
</style>
