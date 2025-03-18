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
    window.location.href = "/CV Stani GAM.pdf"

</script>

<template>
    <a download="CV Stani GAM.pdf" href="/CV Stani GAM.pdf">
        <button class="absolute top-0 left-0 m-4 hidden btn btn-info lg:block">
            Télécharger le cv
        </button>
    </a>

    <div class="relative flex h-full w-full items-stretch">
        <a download="CV Stani GAM.pdf" href="/CV Stani GAM.pdf">
            <button class="absolute m-4 btn btn-info btn-sm top-0 right-0 print:hidden
            lg:hidden">
                Télécharger le cv
            </button>
        </a>

        <Sidebar class="shrink-0 w-[31%]"/>

        <div class="w-full overflow-hidden p-4 px-5 text-black">
            <div class="mb-2 text-justify" style="text-indent: 2em;">
                Étudiant ingénieur à Centrale Lille, avec de
                solides expériences en développement full-stack et gestion
                d’infrastructures IT. Je développe actuellement un ERP SaaS dédié
                aux CFA. Je souhaite obtenir le Statut National
                Étudiant-Entrepreneur (SNEE) pour structurer
                et accélérer ce projet, en bénéficiant d’un accompagnement et
                d’un réseau d’experts.
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
  font-size: 10.5pt;
  line-height: 1.3;
  @apply flex flex-center;
}

body {
  // set size of a a4 page
  height: 297mm;
  width: 210mm;
  @apply m-4 shrink-0 bg-white;
}

#app {
  @apply h-full;
}

</style>
