<template>
            <div class="header-section">
                <client-only>
                        <Vue3Spline
                            :scene="{
                            url: 'https://prod.spline.design/hB1ymN7Pyrghyvh0/scene.splinecode',
                            }"
                        />
                    </client-only>
                <div class="header-titles">
                    <h1 class="dev-title">РАЗРАБОТКА ИНТЕРФЕЙСОВ И ВЕБ-САЙТОВ</h1>
                    <p class="my-name">Головин Егор Юрьевич</p>
                </div>
            </div>
            
</template>


<style scoped>

    .header-section{
        position: relative;
        height: calc(100dvh - 24px);
        width: 100%;
        border-radius: 0 0 36px 36px;        
        display: grid;
        place-content: center;
        background: url('../../public/head_background.png');
        background-size: cover;
        background-position: bottom left;
        
    }

    /* .header-section::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform-origin: bottom left;
        background: url('../../public/head_background.webp');
        background-size: cover;
        animation: bg-spin 30s forwards;
        transform-origin: center;
        z-index: 0;
        overflow: hidden;
    } */

    .header-section::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, .2);
        backdrop-filter: blur(30px);
        border: 1px solid #C7C7C7;
        border-radius: 0 0 36px 36px;
        box-sizing: border-box;
    }

    .header-titles{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: max-content;
        z-index: 1;
    }

    .dev-title{
        color: white;
        font-size: 48px;
        font-weight: 500;
    }

    .my-name{
        color: #777;
        mix-blend-mode: exclusion;
        text-align: center;
        font-size: 24px;
        font-weight: 400;
    }

    client-only {
        width: 100%;
        height: 100%;
        left: 0;
        position: absolute;
    }

    canvas{
        height: 80vh !important;
        width: 80vh !important;
        outline: none;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }


</style>

<script lang="ts">

// import { Vue3Spline } from 'vue3-spline';

export default {
    components: {
    // Vue3Spline,
  },
      data() {
        return {
        };
      },
      name: "headLine",
      computed: {},
      created() {},
      mounted() {},
      methods: {},
    };
</script>