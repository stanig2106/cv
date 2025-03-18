<script lang="ts" setup>
import pp from "../assets/pp.webp";
import Informations from "./sidebar/Informations.vue";
import Competences from "./sidebar/Competences.vue";
import Langues from "./sidebar/Langues.vue";
import Interets from "./sidebar/Interets.vue";
</script>

<template>
    <div
            class="flex flex-col border-r-4 p-2 pr-3 pl-4 text-white bg-sidebar border-sidebar">
        <img :src="pp" alt="profile" class="mt-4 self-center px-12">

        <div class="mt-4 flex flex-col gap-6">
            <h1 class="text-center text-4xl font-extrabold">
                Stani GAM
            </h1>

            <Informations/>
            <Competences/>
            <Langues/>
            <Interets/>


            <!--            tags -->
            <div class="absolute bottom-0 left-0 text-transparent"
                 style="font-size: 0.1rem">
                Cybersécurité Réponse à incidents Forensics Analyse de menaces
                Sandboxing Antimalware Threat intelligence Monitoring de
                sécurité Sécurité des postes de travail Protocoles réseau
                (TCP/IP, DNS, HTTP) Reverse engineering Pentest Investigation
                standard Résolution d’incidents Plan d’action correctif Linux
                Rust C, C++ Docker Nginx Gestion des tickets d’incidents
                Wireshark Metasploit Nessus OpenVAS ELK Stack (Elasticsearch,
                Logstash, Kibana) Splunk SIEM (Security Information and Event
                Management) Endpoint protection Forensic tools TryHackMe
                HackTheBox RootMe ISO 27001 Stratégie de protection Diagnostic
                d’incidents Investigation réseau Amélioration continue Escalade
                technique Gestion des menaces avancées Sécurité opérationnelle
                Documentation technique CEH (Certified Ethical Hacker) OSCP
                (Offensive Security Certified Professional) CISSP CompTIA
                Security+ ISO 27001 Autonomie Dynamisme Communication technique
                Esprit analytique Collaboration Adaptabilité Curiosité Sens de
                l’innovation Sécurité des SI Protection des infrastructures
                critiques Cyberdéfense Gestion des systèmes critiques Relation
                client technique Secteurs sensibles : santé, transport, défense
                Français : avancé Anglais : courant Windows, MacOS, Linux
                Multi-OS security
            </div>
        </div>
    </div>
</template>
