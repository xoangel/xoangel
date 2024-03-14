<template>
    <section class="services">
        <h1 class="section-title">Что я могу для вас сделать</h1>
        <servicesCard v-for="card in cards"
            :service_title="card.title"
            :list_elements="card.list"
            :service_icon="card.icon"
            :card_background = "card.background"
        />
    </section>
</template>

<style scoped>
    .services{
        display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    background: center no-repeat url(/services_background.png);
    background-size: cover;
}


</style>

<script lang="ts">
import servicesCard from '../components/servicesCard.vue';

export default {
    data() {
        return {
            cards : [
                {
                    title: "Комплексная разработка", 
                    list: {
                        '1': 'пункт 1',
                        '2': 'пункт 2',
                        '3': 'пункт 3'
                    },
                    icon: 'complex_icon.svg',
                    background: "complex_bg.png"
                },
                {
                    title: "Веб-сайт", 
                    list: {
                        '1': 'abjabhj'
                    },
                    background: "web_bg.png"
                },
                {
                    title: "Дизайн", 
                    list: {
                        '1': 'abjabhj'
                    },
                    background: "design_bg.png"
                }
            ]
        }
    },
    
    name : "servicesView",
    components: {
        servicesCard
    }
}
</script>