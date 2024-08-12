<script lang="ts" setup>
import linkedin from "../../assets/linkedin.webp";
import github from "../../assets/github.webp";
import SidebarTitle from "../../components/sidebar-title.vue";
</script>
<template>
  <div>
    <sidebar-title title="Informations"/>
    <div>
      Permis B, véhiculé
    </div>
    <div>
      <a class="underline" href="tel:+33781387107" target="_blank">+33 7 81 38
        71 07</a>
    </div>
    <div>
      <a class="underline" href="mailto:stanig2106@gmail.com" target="_blank">
        stanig2106@gmail.com
      </a>
    </div>
    <div class="mt-0.5">
      <a class="flex items-center gap-2"
         href="https://www.linkedin.com/in/stani-gam" target="_blank">
        <img :src="linkedin" alt="LinkedIn" class="w-5 h-5 inline-block">
        <div class="underline">
          Stani Gam
        </div>

      </a>
    </div>
    <div class="mt-0.5">
      <a class="flex items-center gap-2"
         href="https://github.com/stanig2106" target="_blank">
        <img :src="github" alt="GitHub" class="w-5 h-5 inline-block">
        <div class="underline">
          stanig2106
        </div>
      </a>
    </div>
  </div>
</template>
