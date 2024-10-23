<script lang="ts" setup>
import Title from "../components/title.vue"
import Timeline from "../components/timeline.vue";
import TimelineItem from "../components/timeline-item.vue";

</script>
<template>
  <div class="mt-2">
    <Title title="Academic Background"/>

    <Timeline>
      <TimelineItem>
        <template #date>
          Sept. 2023 <br>
          June 2026 <br>
        </template>

        <h4 class="leading-none">
          <span class="font-bold">
            Centrale Lille
          </span>
          <span class="text-base text-muted">
                - General Engineering Program
          </span>
        </h4>
        <div class="mt-0.5 text-justify">
          - General engineering education with a focus on innovation and project
          management
        </div>
      </TimelineItem>

      <TimelineItem>
        <template #date>
          Sept. 2020 <br>
          June 2023 <br>
        </template>

        <h4 class="leading-none">
          <span class="font-bold">
            Université Paris-Cité
          </span> <br>
          <span class="text-base text-muted">
                Double Bachelor's Degree in Mathematics and Computer Science
          </span>
        </h4>
        <div class="mt-0.5 text-justify">
          - Double degree with honors
        </div>
      </TimelineItem>

    </Timeline>

  </div>
</template>
