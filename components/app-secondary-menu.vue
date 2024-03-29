<script setup lang="ts">
const menu: AppMenuItem[] = [
    {
        label: 'Notifications',
        icon: 'i-carbon-notification',
    },
    {
        label: 'Settings',
        icon: 'i-carbon-settings',
    },
] 
</script>
<template>
    <UVerticalNavigation :links="menu" />
</template>