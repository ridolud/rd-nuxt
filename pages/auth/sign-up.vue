<script setup lang="ts">
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'

definePageMeta({
    layout: 'full-center'
})

const schema = object({
    name: string().required('Required'),
    email: string().email('Invalid email').required('Required'),
    password: string()
        .min(8, 'Must be at least 8 characters')
        .required('Required')
})

type Schema = InferType<typeof schema>

const state = reactive({
    name: undefined,
    email: undefined,
    password: undefined
})

const visibilityPassword = ref(false)

async function onSubmit(event: FormSubmitEvent<Schema>) {
    console.log(event.data)
}
</script>

<template>
    <div class="w-96 relative">
        <UCard>
            <template #header>
                <div class="text-center">
                    <p class="text-2xl text-gray-900 dark:text-white">Sign Up</p>
                    <p>Already have an account? <NuxtLink class="text-primary" to="/auth/sign-in">Sign In</NuxtLink>.
                    </p>
                </div>
            </template>

            <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">

                <UFormGroup label="Name" name="name" required>
                    <UInput v-model="state.name" placeholder="Full Name" icon="i-carbon-user" />
                </UFormGroup>

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

                <UButton size="lg" type="submit" block>
                    Sign Up
                </UButton>

            </UForm>
        </UCard>
    </div>
</template>