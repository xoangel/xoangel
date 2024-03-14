<template>
    <headLine/>
    <navbar/>
</template>

<script lang="ts">
import headLine from '../components/HeadLine.vue';
import navbar from '../components/haederNavbar.vue';

export default {
    name : "headerView",
    components: {
        headLine,
        navbar
    }
}
</script>