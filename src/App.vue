<script lang="ts" setup>
import Sidebar from "./layouts/Sidebar.vue";
import ExperiencesPro from "./layouts/ExperiencesPro.vue";
import ProjetsPerso from "./layouts/ProjetsPerso.vue";
import Formations from "./layouts/Formations.vue";

function isMobile(): boolean {
  // @ts-ignore
  const userAgent = navigator.userAgent || navigator["vendor"] || window["opera"] || "";
  return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
}

if (window.innerWidth < 768 || isMobile())
  window.location.href = "/CV Stani Gam.pdf"

</script>

<template>
  <a download="CV Stani Gam.pdf" href="/CV Stani Gam.pdf">
    <button class="hidden absolute top-0 left-0 m-4 btn btn-info lg:block">
      Download CV
    </button>
  </a>

  <div class="flex items-stretch w-full h-full relative">
    <a download="CV Stani Gam.pdf" href="/CV Stani Gam.pdf">
      <button class="absolute m-4 btn btn-info btn-sm top-0 right-0 print:hidden
            lg:hidden">
        Download CV
      </button>
    </a>

    <Sidebar class="w-[31%] shrink-0"/>

    <div class="text-black w-full p-4 px-6 overflow-x-hidden">
      <div class="mt-1 text-justify">
        Engineering student with extensive experience in web development. I am
        seeking short-term freelance assignments in web development alongside my
        studies to continue refining my technical skills while contributing to
        diverse and innovative projects.
      </div>

      <ExperiencesPro/>
      <Formations/>
      <ProjetsPerso/>
    </div>

  </div>

</template>

<style lang="scss">
@media print {
  @page {
    size: A4;
  }

  body {
    height: 100vh !important;
    width: 100vw !important;
    margin: 0 !important;
  }

  html {
    @apply block !important;
  }
}

:root, [data-theme] {
  color: black !important;
}

html {
  font-family: Helvetica, sans-serif;
  font-size: 12pt;
  line-height: 1.3;
  @apply flex flex-center;
}

body {
  // set size of a a4 page
  height: 297mm;
  width: 210mm;
  @apply bg-white m-4 shrink-0;
}

#app {
  @apply h-full;
}

</style>
