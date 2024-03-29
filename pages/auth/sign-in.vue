<script setup lang="ts">
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'

const router = useRouter()
const client = useSupabaseClient()
const user = useSupabaseUser()
const toast = useToast()
const { isLoading, finish: loadingFinish, start: loadingStrat } = useLoadingIndicator()

definePageMeta({
    layout: 'full-center'
})

const schema = object({
    email: string().email('Invalid email').required('Required'),
    password: string()
        .min(8, 'Must be at least 8 characters')
        .required('Required')
})

type Schema = InferType<typeof schema>

const state = reactive({
    email: undefined,
    password: undefined
})

watchEffect(async () => {
    console.log(user.value)
    if (user.value) {
        await navigateTo('/dashboard')
    }
})


const visibilityPassword = ref(false)

async function onSubmit(event: FormSubmitEvent<Schema>) {
    // Do something with event.data
    loadingStrat()
    const { error } = await client.auth.signInWithPassword({
        email: event.data.email,
        password: event.data.password,
    })

    if (error) {
        toast.add({ color: 'rose', title: "Error:", description: error.message })
        loadingFinish()
    }
}
</script>

<template>
    <div class="w-96 relative">
        <UCard>
            <template #header>
                <div class="text-center">
                    <p class="text-2xl text-gray-900 dark:text-white">Sign In</p>
                    <p>Don't have an account? <NuxtLink class="text-primary" to="/auth/sign-up">Sign Up</NuxtLink>.</p>
                </div>
            </template>

            <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
                <UFormGroup label="Email" name="email" required>
                    <UInput v-model="state.email" placeholder="Email" icon="i-carbon-email" />
                </UFormGroup>

                <UFormGroup label="Password" name="password" required>
                    <template #hint>
                        <UIcon :name="visibilityPassword ? 'i-carbon-view-off' : 'i-carbon-view'"
                            class="cursor-pointer text-primary" @click="visibilityPassword = !visibilityPassword">
                        </UIcon>
                    </template>
                    <UInput v-model="state.password" :type="visibilityPassword ? 'text' : 'password'"
                        placeholder="Password" icon="i-carbon-password" />
                </UFormGroup>
                <div class="my-2">
                    <NuxtLink class="text-primary" to="/auth/forgot-password">Forgot password?</NuxtLink>
                </div>
                <UButton :loading="isLoading" size="lg" type="submit" block>
                    Sign In
                </UButton>
            </UForm>

        </UCard>
    </div>
</template>