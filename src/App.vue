<template>
  <headerView/>
  <servicesView/>
</template>

<script setup lang="ts">
import headerView from './views/headerView.vue';
import servicesView from './views/servicesView.vue';

</script>

<style>
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
  }

  body{
    background-color: #121212;
  }

  h1, h2, h3, h4, h5, p, a, div{
    font-family: Raleway;
    font-weight: normal
  }

  .section-title{
    margin-left: 32px;
  }

  h1{
    font-size: 48px;
    color: white;
  }

  section{
    padding: 110px 64px 0 64px;
  }
</style>
