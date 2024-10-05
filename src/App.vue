<script lang="ts" setup>
import Sidebar from "./layouts/Sidebar.vue";
import ExperiencesPro from "./layouts/ExperiencesPro.vue";
import ProjetsPerso from "./layouts/ProjetsPerso.vue";
import Formations from "./layouts/Formations.vue";

</script>

<template>
  <a download="CV Stani Gam.pdf" href="/CV Stani Gam.pdf">
    <button class="hidden absolute top-0 left-0 m-4 btn btn-info lg:block">
      Télécharger le cv
    </button>
  </a>

  <div class="flex items-stretch w-full h-full relative">
    <a download="CV Stani Gam.pdf" href="/CV Stani Gam.pdf">
      <button class="absolute m-4 btn btn-info btn-sm top-0 right-0 print:hidden
            lg:hidden">
        Télécharger le cv
      </button>
    </a>

    <Sidebar class="w-[31%] shrink-0"/>

    <div class="text-black w-full p-4 px-6 overflow-x-hidden">
      <div class="mt-1 text-justify">
        <!--        Ingénieur en formation avec de riches expériences professionnelles et-->
        <!--        des compétences dans de nombreux domaines de l’informatique. Mon-->
        <!--        objectif est de me spécialiser en cybersécurité. Cette ambition me-->
        <!--        pousse à rechercher un contrat de professionnalisation dans ce domaine-->
        <!--        pour la période de septembre 2025 à juin 2026.-->
        Ingénieur en formation avec de nombreuse experiences en développement
        web. Je cherche, en parallèle de mes études, des missions de freelance
        de courte durée dans le domaine du développement web pour continuer à
        affiner mes compétences techniques tout en contribuant à des projets
        variés et innovants.

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
