<script setup lang="ts">
const items = computed(() => [
    [
        {
        slot: 'account',
        label: '',
        disabled: true
        }
    ],
    [
        {
            label: 'Profile',
            icon: 'i-carbon-user',
        },
    ],
    [
        {
            label: 'Help & Support',
            icon: 'i-heroicons-question-mark-circle',
        },
        {
            label: 'Documentation',
            icon: 'i-heroicons-book-open',
            to: 'https://ui.nuxt.com/pro/getting-started',
            target: '_blank'
        },
    ],
    [
        {
            label: 'Sign out',
            icon: 'i-heroicons-arrow-left-on-rectangle'
        }
    ]
])
</script>

<template>
    <UDropdown mode="hover" :items="items" :ui="{ width: 'w-full', item: { disabled: 'cursor-text select-text' } }"
        :popper="{ strategy: 'absolute', placement: 'top' }" class="w-full">
        <template #default="{ open }">
            <UButton color="gray" variant="ghost" class="w-full" label="Faridho Luedfi"
                :class="[open && 'bg-gray-50 dark:bg-gray-800']">
                <template #leading>
                    <UAvatar src="" size="sm" />
                </template>

                <template #trailing>
                    <UIcon name="i-heroicons-ellipsis-vertical" class="w-5 h-5 ml-auto" />
                </template>
            </UButton>
        </template>

        <template #account>
            <div class="text-left">
                <p>
                    Signed in as
                </p>
                <p class="truncate font-medium text-gray-900 dark:text-white">
                    faridho.lutfi@gmai.com
                </p>
            </div>
        </template>
    </UDropdown>
</template>