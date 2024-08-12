<script lang="ts" setup>
import Title from "../components/title.vue"
import Timeline from "../components/timeline.vue";
import TimelineItem from "../components/timeline-item.vue";

</script>
<template>
  <div class="mt-2">
    <Title title="Expériences professionnelles"/>


    <Timeline>
      <TimelineItem>
        <template #date>
          Avril 2024 <br>
          Avril 2025 <br>
          (1 an)
        </template>

        <h4 class="leading-none">
          <span class="font-bold">
            Trésorier
          </span>
          <span class="text-base text-muted">
                du <span class="font-bold">BDE de Centrale Lille</span>
              </span>
        </h4>
        <div class="mt-0.5">
          - Gestion des ressources financières de l'association (120 000
          €/an) <br>
          - Membre du bureau d'une équipe de 24 personnes
        </div>
      </TimelineItem>

      <TimelineItem>
        <template #date>
          Janv. 2024 <br>
          Janv. 2025 <br>
          (1 an)
        </template>

        <h4 class="leading-none">
          <span class="font-bold">
            Directeur métier informatique <br>
          </span>
          <span class="text-base text-muted">
                chez <a class="font-bold"
                        href="https://www.centralelilleprojets.fr/"
                        target="_blank">Centrale Lille Projets</a>
              </span>
        </h4>
        <div class="mt-0.5">
          - Encadrement des missions informatiques de la <br>
          <a class="underline cursor-help"
             href="https://junior-entreprises.com/"
             target="_blank">
            Junior Entreprise
          </a>
          de Centrale Lille
        </div>
      </TimelineItem>


      <TimelineItem>
        <template #date>
          Janv. 2024 <br>
          Fev. 2024 <br>
          (1 mois)
        </template>

        <h4 class="leading-none">
          <span class="font-bold">
            Technicien informatique industrielle
          </span> <br>
          <span class="text-base text-muted">
                chez <a class="font-bold" href="https://fr.hexcel.com/"
                        target="_blank">Hexcel</a> (Les Avenières)
              </span>
        </h4>
        <div class="mt-0.5">
          - Stage de découverte de l’informatique industrielle <br>
          - Résolution d'un problème ouvert depuis 1 an <br>
          - Projet de vision industrielle
        </div>
      </TimelineItem>

      <TimelineItem>
        <template #date>
          Juil. 2021 <br>
          Déc. 2024 <br>
          (2 ans 6 mois)
        </template>

        <h4 class="leading-none">
          <span class="font-bold">
            Développeur full stack
          </span> <br>
          <span class="text-base text-muted">
                chez <a class="font-bold" href="https://dakatech.fr/"
                        target="_blank">Dakatech</a> (Lyon)
              </span>
        </h4>
        <div class="mt-0.5">
          - Développement de solutions personnalisées pour l'industrie 4.0
          (mobile et web) <br>
          - Mise en place d'une stratégie CI/CD <br>
        </div>
      </TimelineItem>

    </Timeline>

  </div>
</template>
