<template>
  <router-view />
</template>

<script lang="ts">

  import BaseButton from "./UI/buttons/BaseButton/BaseButton.vue"
  import ActionButton from "./UI/buttons/ActionButton/ActionButton.vue"

  export default{
    name: "App",
    components:{
      BaseButton: BaseButton,
      ActionButton: ActionButton
    },
    data() {
      return {
      }
    }
  }
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

  a, p{
    color: white;
  }
</style>
