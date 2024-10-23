<script lang="ts" setup>
import Title from "../components/title.vue"
import Timeline from "../components/timeline.vue";
import TimelineItem from "../components/timeline-item.vue";

</script>
<template>
  <div class="mt-2">
    <Title title="Professional Experiences"/>


    <Timeline>
      <TimelineItem>
        <template #date>
          Oct. 2024 <br>
          Now<br>
        </template>

        <h4 class="leading-none">
          <span class="font-bold">
            Web Developer
          </span>
          <span class="text-base text-muted">
                at <a class="font-bold"
                      href="https://www.linkedin.com/company/taftavie"
                      target="_blank">Taftavie</a>
              </span>
        </h4>
        <div class="mt-0.5 text-justify">
          - Mobile application development
        </div>
      </TimelineItem>


      <TimelineItem>
        <template #date>
          April 2024 <br>
          April 2025 <br>
        </template>

        <h4 class="leading-none">
          <span class="font-bold">
            Treasurer
          </span>
          <span class="text-base text-muted">
                of <span class="font-bold">Centrale Lille Student Union</span>
              </span>
        </h4>
        <div class="mt-0.5 text-justify">
          - Member of the executive board, responsible for managing the
          association's financial resources (€120,000/year)
        </div>
      </TimelineItem>

      <TimelineItem>
        <template #date>
          Jan. 2024 <br>
          Jan. 2025 <br>
        </template>

        <h4 class="leading-none">
          <span class="font-bold">
            IT Director
          </span> <br>
          <span class="text-base text-muted">
                at <a class="font-bold"
                      href="https://www.centralelilleprojets.fr/"
                      target="_blank">Centrale Lille Projets</a>
              </span>
        </h4>
        <div class="mt-0.5 text-justify">
          - Supervision of IT missions for <br>
          <a class="underline cursor-help"
             href="https://junior-entreprises.com/"
             target="_blank">
            Junior Enterprise</a>
          of Centrale Lille
        </div>
      </TimelineItem>


      <TimelineItem>
        <template #date>
          Jan. 2024 <br>
          Feb. 2024 <br>
        </template>

        <h4 class="leading-none">
          <span class="font-bold">
            Industrial IT Technician
          </span> <br>
          <span class="text-base text-muted">
                at <a class="font-bold" href="https://fr.hexcel.com/"
                      target="_blank">Hexcel</a> (Les Avenières)
              </span>
        </h4>
        <div class="mt-0.5 text-justify">
          - Introduction to industrial IT through an internship <br>
          - Solving a complex issue in industrial vision systems
        </div>
      </TimelineItem>

      <TimelineItem>
        <template #date>
          July 2021 <br>
          Dec. 2023 <br>
        </template>

        <h4 class="leading-none">
          <span class="font-bold">
            Full Stack Developer
          </span> <br>
          <span class="text-base text-muted">
                at <a class="font-bold" href="https://dakatech.fr/"
                      target="_blank">Dakatech</a> (Lyon)
              </span>
        </h4>
        <div class="mt-0.5 text-justify">
          - Development of customized solutions for Industry 4.0 (mobile and
          web) <br>
          - Implementation of a CI/CD strategy <br>
        </div>
      </TimelineItem>

    </Timeline>

  </div>
</template>
