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
                    Present<br>
                    Jan. 2025 <br>
                </template>

                <h4 class="leading-none">
          <span class="font-bold">
            Développeur full stack
          </span>
                    <span class="text-base text-muted">
                chez <a class="font-bold"
                        href="https://campus-prive.com/"
                        target="_blank">Campus privé</a>
              </span>
                </h4>
                <div class="mt-0.5 text-justify">
                    - Développement d’un CMS moderne pour la gestion des
                    apprenants, des entreprises et des contrats.
                </div>
            </TimelineItem>

            <TimelineItem>
                <template #date>
                    Déc. 2024<br>
                    Oct. 2024 <br>
                </template>

                <h4 class="leading-none">
          <span class="font-bold">
            Développeur web
          </span>
                    <span class="text-base text-muted">
                chez <a class="font-bold"
                        href="https://www.linkedin.com/company/taftavie"
                        target="_blank">Taftavie</a>
              </span>
                </h4>
                <div class="mt-0.5 text-justify">
                    - Développement de l'application mobile
                </div>
            </TimelineItem>


            <TimelineItem>
                <template #date>
                    Avril 2025 <br>
                    Avril 2024 <br>
                </template>

                <h4 class="leading-none">
          <span class="font-bold">
            Trésorier
          </span>
                    <span class="text-base text-muted">
                du <span class="font-bold">BDE de Centrale Lille</span>
              </span>
                </h4>
                <div class="mt-0.5 text-justify">
                    - Membre du bureau, en charge de la gestion des ressources
                    financières
                    de l'association (120 000 €/an)
                </div>
            </TimelineItem>


            <TimelineItem>
                <template #date>
                    Fev. 2024 <br>
                    Janv. 2024 <br>
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
                <div class="mt-0.5 text-justify">
                    - Stage de découverte de l’informatique industrielle <br>
                    - Résolution d'un problème complexe en matière de vision
                    industrielle
                </div>
            </TimelineItem>

            <TimelineItem>
                <template #date>
                    Déc. 2023 <br>
                    Juil. 2021 <br>
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
                <div class="mt-0.5 text-justify">
                    - Développement de solutions personnalisées pour l'industrie
                    4.0
                    (mobile et web) <br>
                    - Mise en place d'une stratégie CI/CD <br>
                </div>
            </TimelineItem>

        </Timeline>

    </div>
</template>
