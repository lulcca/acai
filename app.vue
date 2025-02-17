<template>
  <div class="relative">
    <div class="inverted-section">
      <UContainer class="py-5">
        <TheHeader />
      </UContainer>
    </div>

    <div class="inverted-section sticky top-0 z-50">
      <UContainer class="py-5">
        <TheMenu />
      </UContainer>
    </div>

    <main class="gap-10 grid">
      <UContainer class="w-full">
        <TheWheel class="pt-28" />
      </UContainer>

      <UContainer class="w-full">
        <TheRules class="pt-28" />
      </UContainer>
    </main>

    <UContainer>
      <TheFooter class="absolute bottom-0 py-5" />
    </UContainer>

    <UNotifications />
  </div>
</template>
