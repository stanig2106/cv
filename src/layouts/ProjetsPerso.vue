<script lang="ts" setup>
import Title from "../components/title.vue"
import Timeline from "../components/timeline.vue";
import TimelineItem from "../components/timeline-item.vue";
</script>
<template>
    <div class="mt-3">
        <Title title="Projets personnels"/>

        <Timeline>
            <TimelineItem>
                <template #date>
                    Août. 2024 <br>
                </template>

                <h4 class="leading-none">
          <span class="font-bold">
            Hackathon web3
            <a class="text-base font-bold text-muted"
               href="https://ethglobal.com/showcase/veripay-9dfo1"
               target="_blank">Superhack 2024</a>
          </span>
                </h4>
                <div class="text-justify">
                    Projet primé par le jury : développement d’un
                    marketplace décentralisé en Solidity, avec stockage
                    distribué via IPFS et synchronisation en temps réel via
                    GunJS
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
                <div class="text-justify mt-0.5">
                    Développement et déploiement d’une application mobile avec
                    infrastructure cloud et authentification sécurisée. Plus de
                    500 utilisateurs actifs.
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
                <div class="text-justify mt-0.5">
                    Conception et développement d’une solution domotique
                    complète, de l’architecture électronique à la mise en
                    production.
                </div>
            </TimelineItem>

        </Timeline>

    </div>
</template>
