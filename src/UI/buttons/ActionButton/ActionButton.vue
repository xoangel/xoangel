<template>
    <BaseButton :id="'action-button'">
        <slot></slot>
    </BaseButton>
</template>

<script lang="ts">
    import BaseButton from '../BaseButton/BaseButton.vue'
    export default{
        name: "ActionButton",
        components:{
            BaseButton: BaseButton
        }
    }
</script>

<style scoped>
    #action-button{
        background-color: white;
        border: 1px solid #c7c7c7;
        box-shadow: -3px 4px 4px #3A3A3A25;
    }
</style>