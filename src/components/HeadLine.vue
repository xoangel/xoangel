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