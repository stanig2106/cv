<script lang="ts" setup>
import Title from "../components/title.vue"
import Timeline from "../components/timeline.vue";
import TimelineItem from "../components/timeline-item.vue";
</script>
<template>
    <div class="mt-3">
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
                <div class="text-justify mt-0.5">
                    Développement et déploiement d’un CMS pour la gestion des
                    contrats et des entreprises, avec une infrastructure
                    scalable basée sur Docker et CI/CD, optimisant
                    l’automatisation des déploiements et la gestion des
                    environnements.
                </div>
            </TimelineItem>

            <TimelineItem>
                <template #date>
                    Déc. 2024<br>
                    Oct. 2024 <br>
                </template>

                <h4 class="leading-none">
                  <span class="font-bold">
                    Développeur front end
                  </span>
                    <span class="text-base text-muted">
                    chez <a class="font-bold"
                            href="https://www.linkedin.com/company/taftavie"
                            target="_blank">Taftavie</a>
                  </span>
                </h4>
                <div class="text-justify mt-0.5">
                    Développement d’une application mobile en React, avec
                    intégration d’API et optimisation des performances.
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
                <div class="text-justify mt-0.5">
                    Membre du bureau, en charge de la gestion des ressources
                    financières de l'association (120 000 €/an)
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
                <div class="text-justify mt-0.5">
                    Stage de découverte de l’informatique industrielle <br>
                    Résolution d'un problème complexe en matière de vision
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
                <div class="text-justify mt-0.5">
                    Développement de solutions pour l’industrie 4.0 avec une
                    approche DevOps : mise en place de pipelines CI/CD,
                    conteneurisation des applications et sécurisation des
                    environnements de production.
                </div>
            </TimelineItem>

        </Timeline>

    </div>
</template>
