<template>
    <div class="relative min-h-screen">
        <div class="w-72 fixed h-screen scroll-smooth overflow-auto border-r dark:border-gray-900">
            <div class="gradient"></div>
            <div class="relative">
                <div class="w-72 bg-background/75 backdrop-blur fixed h-16 py-2 px-4 flex items-center">
                    <h1 class="text-2xl">Logo</h1>
                </div>
                <div class="py-16 px-4">
                    <AppSidebarMenu />
                </div>
                <div class="w-72 bg-background/75 backdrop-blur fixed bottom-0 py-2 px-4">
                    <AppAccountMenu />
                </div>
            </div>
        </div>
        <div class="ml-72">
            <div class="content py-2 px-4">
                <slot />
            </div>
        </div>
    </div>
</template>

<style scoped>
.gradient {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: radial-gradient(100% 50% at 80% 20%, rgb(var(--color-primary-500) / 0.25) 0, #FFF 100%);
}

.dark {
    .gradient {
        background: radial-gradient(100% 50% at 80% 20%, rgb(var(--color-primary-400) / 0.1) 0, rgb(var(--color-gray-950)) 100%);
    }
}
</style>