<script lang="ts" setup>


</script>

<template>


  <div
      class="text-sm text-right absolute mt-4 right-[calc(100%-63px)] w-screen">
    <slot name="date"/>
  </div>
  <div class="bg-white border-sidebar border-[3px]
            h-[20px] w-[20px] absolute
            ml-[71.5px] rounded-full mt-[6px]"/>
  <div class="pt-2 ml-[102px] mb-1.5">
    <slot/>
  </div>

</template>
