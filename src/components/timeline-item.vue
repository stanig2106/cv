<script lang="ts" setup>


</script>

<template>


  <div
      class="text-sm text-right absolute mt-2 right-[calc(100%-73px)] w-screen">
    <slot name="date"/>
  </div>
  <div class="bg-white border-sidebar border-[3px]
            h-[20px] w-[20px] absolute
            ml-[81.5px] rounded-full mt-[6px]"/>
  <div class="ml-[112px] pt-1 mb-2">
    <slot/>
  </div>

</template>
