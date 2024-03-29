<script setup lang="ts">
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'

const config = useRuntimeConfig()
const router = useRouter()
const toast = useToast()
const client = useSupabaseClient()
const { isLoading, finish: loadingFinish, start: loadingStrat } = useLoadingIndicator()

definePageMeta({
    layout: 'full-center'
})

const schema = object({
    email: string().email('Invalid email').required('Required'),
})

type Schema = InferType<typeof schema>

const state = reactive<Schema>({
    email: '',
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
    loadingStrat()
    const { error } = await client.auth.resetPasswordForEmail(event.data.email, {
        redirectTo: `http:localhost/auth/reset-password`
    })
    if (error) {
        toast.add({ color: 'rose', title: "Error:", description: error.message })
        loadingFinish()
    } else {
        toast.add({ title: "Success:", description: "Reset password link has beed send" })
        loadingFinish()
    }
}
</script>

<template>
    <div class="w-96 relative">
        <UCard>

            <template #header>
                <div class="text-center">
                    <p class="text-2xl text-gray-900 dark:text-white">Forgot Password</p>
                </div>
            </template>

            <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
                <UFormGroup label="Email" name="email" required>
                    <UInput v-model="state.email" placeholder="Email" icon="i-carbon-email" />
                </UFormGroup>


                <div class="my-2">
                    <NuxtLink class="text-primary" to="/auth/sign-in">Sign In</NuxtLink>
                </div>
                <UButton size="lg" type="submit" block>
                    Sign In
                </UButton>
            </UForm>

        </UCard>
    </div>
</template>