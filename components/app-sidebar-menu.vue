<script setup lang="ts">
const menu: AppMenuItem[] = [
    {
        label: 'Dashboard',
        icon: 'i-carbon-home',
        to: '/dashboard'
    },
    {
        label: 'Task',
        icon: 'i-carbon-task',
        to: '/task'
    }
] 
</script>
<template>
    <UVerticalNavigation :links="menu" />
</template>