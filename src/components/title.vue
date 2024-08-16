<script lang="ts" setup>

const props = defineProps<{ title: string }>();

</script>

<template>
  <div class="h3 uppercase font-bold relative mb-3 mt-3 w-min">
    <div class="z-10 relative px-1 pr-1.5"
         v-text="props.title.replace(' ', '&nbsp;')"/>
    <div class="w-full h-[55%] absolute bg-[#d9d9d9] opacity-40 top-[55%] z-0"/>
  </div>
</template>

<style lang="scss">
</style>
