<script lang="ts" setup>
import pp from "../assets/pp.webp";
import Informations from "./sidebar/Informations.vue";
import Formations from "./sidebar/Formations.vue";
import Competences from "./sidebar/Competences.vue";
import Langues from "./sidebar/Langues.vue";
import Interets from "./sidebar/Interets.vue";

</script>

<template>
  <div class="bg-sidebar flex flex-col pl-4 pr-3 p-2 text-white border-r-4 border-sidebar">
    <img :src="pp" alt="profile" class="px-12 self-center mt-1">

    <div class="flex flex-col gap-3 mt-2">
      <Informations/>
      <Formations/>
      <Competences/>
      <Langues/>
      <Interets/>
    </div>
  </div>
</template>
