<template>
    <button class="button" type="button">
        <slot></slot>
    </button>
</template>
<script lang="ts">
    export default{
        name: "baseButton",
    }
</script>

<style scoped>
    .button{
        border-radius: 50px;
        padding: 12px 24px;
        display: flex;
        place-items: center;
        place-content: center;
        width: 180px;
        font-size: 12px;
        font-weight: 400;
        cursor: pointer;
    }
</style>