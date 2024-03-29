<script setup lang="ts">

const client = useSupabaseClient()
const toast = useToast()
const router = useRouter()
const { isLoading, finish: loadingFinish, start: loadingStrat } = useLoadingIndicator()


const logout = async () => {
    loadingStrat()
    const { error } = await client.auth.signOut()
    if (error) {
        toast.add({ color: 'rose', title: "Error:", description: error.message })
        loadingFinish()
    } else {
        router.replace('/auth')
        loadingFinish()
    }
}

const items = computed<AppMenuItem[][]>(() => [
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
            icon: 'i-heroicons-arrow-left-on-rectangle',
            click() {
                logout()
            },
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