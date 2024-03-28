<script setup lang="ts">
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'

const router = useRouter()

definePageMeta({
    layout: 'full-center'
})

const schema = object({
    email: string().email('Invalid email').required('Required'),
})

type Schema = InferType<typeof schema>

const state = reactive({
    email: undefined,
})

const visibilityPassword = ref(false)

async function onSubmit(event: FormSubmitEvent<Schema>) {
    // Do something with event.data
    console.log(event.data)
    router.push('/')
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