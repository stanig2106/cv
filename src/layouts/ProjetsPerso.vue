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
          (1 semaine)
        </template>

        <h4 class="leading-none">
          <span class="font-bold">
            Hackathon
            <a class="font-bold text-base text-muted"
               href="https://ethglobal.com/showcase/veripay-9dfo1"
               target="_blank">Superhack 2024</a>
          </span>
        </h4>
        <div class="mt-0.5">
          - Développement d’une SAAS (Software as a Service) en utilisant
          des technologies décentralisées <br>
          - Projet récompensé par 2 prix
        </div>
      </TimelineItem>

      <TimelineItem>
        <template #date>
          Déc. 2023 <br>
          Mars 2024 <br>
          (3 mois)
        </template>

        <h4 class="leading-none">
          <span class="font-bold">
            Application Centrale Lille
          </span>
        </h4>
        <div class="mt-0.5">
          - Développement d’une application IOS et Android
          utilisée par plus de 500 étudiants
        </div>
      </TimelineItem>

      <TimelineItem>
        <template #date>
          Été 2023 <br>
          et 2024 <br>
          (5 mois)
        </template>

        <h4 class="leading-none">
          <span class="font-bold">
            Projet domotique
          </span>
        </h4>
        <div class="mt-0.5">
          - Développement d'une solution domotique "from scratch" pour la
          gestion à distance des équipements de ma maison,
          en utilisant un réseau d'une vingtaine de microcontrôleurs
          interconnectés.<br>
          - Serveur web hébergé sur un Raspberry Pi
        </div>
      </TimelineItem>

      <TimelineItem>
        <template #date>
          Été 2022 <br>
        </template>

        <h4 class="leading-none">
          <span class="font-bold">
            Pentest
          </span>
        </h4>
        <div class="mt-0.5">
          - Réalisation de captures the flag sur HackTheBox et VulnHub.
          CTFs orientés réseau et décompilation
        </div>
      </TimelineItem>


    </Timeline>

  </div>
</template>
