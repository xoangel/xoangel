<template>

<div class="service-card" :style="{ backgroundImage: `url(${card_background})` }">
    <h2 id="service_title">{{ service_title }}</h2>
        <div class="sc-content">
        <div class="list-container">
            <ol class="service_list">
                <li v-for="el in list_elements">{{ el }}</li>
            </ol>
            <div v-if="service_icon" class="service-icon" :style="{ backgroundImage: `url(${service_icon})` }"></div>
        </div>
        <button class="ctr">Связаться</button>
    </div>
</div>

</template>

<script lang='ts'>
export default {
    name: "servicesCard",
    props: {
        service_title: String, 
        list_elements: Object,
        service_icon: URL,
        card_background: URL
    }
}
</script>

<style scoped>
    .service-card{
        width: 100%;
        padding: 24px;
        border-radius: 36px;
        border: 1px solid rgba(255, 255, 255, .1);
        display: flex;
        flex-direction: column;
        background-color: #ffffff17;
        color: white;
        backdrop-filter: blur(40px);
        /* aspect-ratio: 4/3; */
        background-size: cover;
        background-repeat: no-repeat;
    }

    .service-card:has(.service-icon){
        grid-column: 1/3;
        min-height: 400px;
        border-radius: 48px;
    }

    .service-icon{
        width: 350px;
        aspect-ratio: 1;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

    .list-container{
        display: flex;
        width: 100%;
        padding: 0 40px;   
        justify-content: space-between; 
    }

    #service_title{
        font-size: 64px;
        font-weight: normal;
    }

    .ctr{
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Raleway;
        font-size: 24px;
        border-radius: 50px;
        color: white;
        border: none;
        background: #bfbfbf44;
    }

    .service_list li{
        font-size: 24px;
        font-family: Raleway;
        font-weight: normal;
        line-height: 150%;
        color: white;
    }

    .service_list li::marker{
        font-size: 24px;
        font-family: Raleway;
        font-weight: normal;
        line-height: 150%;
        color: white;
        border-radius: 50%;
        background: #ffffff20;
        border: 1px solid #c7c7c7;
    }

    .sc-content{
        display: flex;
    flex-direction: column;
    align-content: space-between;
    height: 100%;
    justify-content: space-between;
    }

</style>