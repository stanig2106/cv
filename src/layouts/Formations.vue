<script lang="ts" setup>
import Title from "../components/title.vue"
import Timeline from "../components/timeline.vue";
import TimelineItem from "../components/timeline-item.vue";

</script>
<template>
  <div class="mt-2">
    <Title title="Formations Académiques"/>

    <Timeline>
      <TimelineItem>
        <template #date>
          Sept. 2023 <br>
          Juin 2026 <br>
        </template>

        <h4 class="leading-none">
          <span class="font-bold">
            Centrale Lille
          </span>
          <span class="text-base text-muted">
                - Cursus d'ingénieur généraliste
          </span>
        </h4>
        <div class="mt-0.5 text-justify">
          - Formation d'ingénieur généraliste avec un focus sur
            l'innovation, et la gestion de projets
        </div>
      </TimelineItem>

      <TimelineItem>
        <template #date>
          Sept. 2020 <br>
          Juin 2023 <br>
        </template>

        <h4 class="leading-none">
          <span class="font-bold">
            Université Paris-Cité
          </span> <br>
          <span class="text-base text-muted">
                Double licence en mathématiques et informatique
          </span>
        </h4>
        <div class="mt-0.5 text-justify">
          - Double diplôme avec mention Bien
        </div>
      </TimelineItem>

    </Timeline>

  </div>
</template>
