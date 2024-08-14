<script lang="ts" setup>
import Title from "../components/title.vue"
import Timeline from "../components/timeline.vue";
import TimelineItem from "../components/timeline-item.vue";

</script>
<template>
  <div>
    <Title title="Projets personnels"/>

    <Timeline>
      <TimelineItem>
        <template #date>
          Août. 2024 <br>
        </template>

        <h4 class="leading-none">
          <span class="font-bold">
            Hackathon
            <a class="font-bold text-base text-muted"
               href="https://ethglobal.com/showcase/veripay-9dfo1"
               target="_blank">Superhack 2024</a>
          </span>
        </h4>
        <div class="text-justify">
          - Développement d’un SAAS (Software as a Service) en utilisant
          des technologies décentralisées
<!--          - Projet récompensé par 2 prix -->
        </div>
      </TimelineItem>

      <TimelineItem>
        <template #date>
          Déc. 2023 <br>
          Mars 2024 <br>
        </template>

        <h4 class="leading-none">
          <span class="font-bold">
            Application Centrale Lille
          </span>
        </h4>
        <div class="mt-0.5 text-justify">
          - Développement d’une application mobile
          utilisée par plus de 500 étudiants
        </div>
      </TimelineItem>

      <TimelineItem>
        <template #date>
          Été 2023 <br>
          et 2024 <br>
        </template>

        <h4 class="leading-none">
          <span class="font-bold">
            Projet domotique
          </span>
        </h4>
        <div class="mt-0.5 text-justify">
          - Création d'une solution domotique "from scratch"
        </div>
      </TimelineItem>

    </Timeline>

  </div>
</template>
