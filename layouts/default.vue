<template>
    <div class="relative min-h-screen">
        <div class="w-72 fixed h-screen border-r dark:border-gray-900">
            <div class="relative">
                <div class="w-72 fixed h-16 py-2 px-4 flex items-center">
                    <h1 class="text-2xl">Logo</h1>
                </div>
                <div class="py-16 px-4">
                    <AppSidebarMenu />
                </div>
                <div class="w-72 fixed bottom-0 py-2 space-y-4 px-4">
                    <AppSecondaryMenu />
                    <UDivider />
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