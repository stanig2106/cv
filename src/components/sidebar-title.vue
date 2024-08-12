<script lang="ts" setup>

const props = defineProps<{ title: string }>();

</script>

<template>
  <div class="h3 font-bold relative w-min mb-2">
    <div class="z-10 relative px-1 pr-1.5 one-line" v-text="props.title"/>
    <div class="w-full h-[45%] absolute bg-[#edf2fa] opacity-40 top-[55%] z-0"/>
  </div>
</template>

<style lang="scss">
</style>
