<script setup lang="ts">
useHead({
	bodyAttrs: {
		class: 'dark:bg-gray-950'
	}
})
</script>
<template>
	<NuxtLoadingIndicator />
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
