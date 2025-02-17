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
      <UContainer>
        <TheWheel class="pt-28" />
      </UContainer>
    </main>

    <UNotifications />
  </div>
</template>
