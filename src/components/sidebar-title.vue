<script lang="ts" setup>

const props = defineProps<{ title: string }>();

</script>

<template>
  <div class="relative mb-2 w-min font-bold h3">
    <div class="relative z-10 px-1 pr-1.5 one-line" v-text="props.title"/>
    <div class="w-full h-[45%] absolute bg-[#edf2fa] opacity-40 top-[55%] z-0"/>
  </div>
</template>

<style lang="scss">
</style>
