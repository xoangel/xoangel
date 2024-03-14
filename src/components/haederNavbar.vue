<template>
    <nav class="navbar">
        <a href="">Главная</a>
        <a href="">Проекты</a>
        <a href="">Услуги</a>
        <a href="">Контакты</a>
    </nav>
</template>

<style scoped>
.navbar{
    display: flex;
    width: 800px;
    height: 40px;
    padding: 10px 48px;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    position: fixed;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 12px;
    border: 1px solid #C7C7C7;
    background: rgba(255, 255, 255, 0.20);
    box-shadow: 3px 4px 4px 0px rgba(58, 58, 58, 0.25);
    backdrop-filter: blur(8px);
    z-index: 9999;
}

.navbar a{
    color: white;
    font-size: 24px;
    font-weight: 400;
    text-decoration: none;
    
}
</style>

<script lang="ts">
export default {
      data() {
        return {
        };
      },
      name: "navbar",
      computed: {},
      created() {},
      mounted() {},
      methods: {},
    };
</script>