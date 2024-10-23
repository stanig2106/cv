<script lang="ts" setup>
import Title from "../components/title.vue"
import Timeline from "../components/timeline.vue";
import TimelineItem from "../components/timeline-item.vue";

</script>
<template>
  <div>
    <Title title="Personal Projects"/>

    <Timeline>
      <TimelineItem>
        <template #date>
          Aug. 2024 <br>
        </template>

        <h4 class="leading-none">
          <span class="font-bold">
            Web3 Hackathon
            <a class="font-bold text-base text-muted"
               href="https://ethglobal.com/showcase/veripay-9dfo1"
               target="_blank">Superhack 2024</a>
          </span>
        </h4>
        <div class="text-justify">
          - Project awarded by the jury
        </div>
      </TimelineItem>

      <TimelineItem>
        <template #date>
          Dec. 2023 <br>
          March 2024 <br>
        </template>

        <h4 class="leading-none">
          <span class="font-bold">
            Centrale Lille App
          </span>
        </h4>
        <div class="mt-0.5 text-justify">
          - Development of a mobile application used by more than 500 students
        </div>
      </TimelineItem>

      <TimelineItem>
        <template #date>
          Summer 2023 <br>
          and 2024 <br>
        </template>

        <h4 class="leading-none">
          <span class="font-bold">
            Home Automation Project
          </span>
        </h4>
        <div class="mt-0.5 text-justify">
          - Creation of a home automation solution from scratch
        </div>
      </TimelineItem>

    </Timeline>

  </div>
</template>
