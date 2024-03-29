<script setup lang="ts">
import { object, string, type InferType, ref as yupRef } from 'yup'
import type { FormSubmitEvent } from '#ui/types'

const router = useRouter()
const toast = useToast()
const client = useSupabaseClient()
const { isLoading, finish: loadingFinish, start: loadingStrat } = useLoadingIndicator()
const visibilityPassword = ref(false)

definePageMeta({
    layout: 'full-center'
})

const schema = object({
    password: string()
        .min(8, 'Must be at least 8 characters')
        .required('Required'),
    rePassword: string()
        .min(8, 'Must be at least 8 characters')
        .required('Required').oneOf([yupRef('password')], 'Passwords must match')

})

type Schema = InferType<typeof schema>

const state = reactive<Schema>({
    password: '',
    rePassword: ''
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
    loadingStrat()
    // const { error } = await client.auth.resetPasswordForEmail(event.data.email)
    // if (error) {
    //     toast.add({ color: 'rose', title: "Error:", description: error.message })
    //     loadingFinish()
    // } else {
    //     toast.add({ title: "Success:", description: "Reset password link has beed send" })
    //     loadingFinish()
    // }
}

</script>

<template>
    <div class="w-96 relative">
        <UCard>
            <template #header>
                <div class="text-center">
                    <p class="text-2xl text-gray-900 dark:text-white">Reset Password</p>
                </div>
            </template>

            <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
                <UFormGroup label="Password" name="password" required>
                    <template #hint>
                        <UIcon :name="visibilityPassword ? 'i-carbon-view-off' : 'i-carbon-view'"
                            class="cursor-pointer text-primary" @click="visibilityPassword = !visibilityPassword">
                        </UIcon>
                    </template>
                    <UInput v-model="state.password" :type="visibilityPassword ? 'text' : 'password'"
                        placeholder="Password" icon="i-carbon-password" />
                </UFormGroup>

                <UFormGroup label="Confirm Password" name="rePassword" required>
                    <template #hint>
                        <UIcon :name="visibilityPassword ? 'i-carbon-view-off' : 'i-carbon-view'"
                            class="cursor-pointer text-primary" @click="visibilityPassword = !visibilityPassword">
                        </UIcon>
                    </template>
                    <UInput v-model="state.rePassword" :type="visibilityPassword ? 'text' : 'password'"
                        placeholder="Confirm Password" icon="i-carbon-password" />
                </UFormGroup>


                <div class="my-2">
                    <NuxtLink class="text-primary" to="/auth/sign-in">Sign In</NuxtLink>
                </div>
                <UButton size="lg" type="submit" block>
                    Reset Password
                </UButton>
            </UForm>

        </UCard>
    </div>
</template>