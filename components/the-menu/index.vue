<script lang="ts" setup>
const { repository } = useRuntimeConfig().public;

const colorMode = useColorMode();

const isDark = computed({
  get () {
    return colorMode.value === 'dark';
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  },
});
</script>

<template>
  <nav
    class="
      gap-4 grid h-full place-items-center w-full
      [grid-template-areas:'A_B_._C_D']
      [grid-template-columns:auto_auto_1fr_auto_auto]
    "
  >
    <UButton
      aria-label="roleta"
      class="font-major uppercase [grid-area:A]"
      label="roleta"
      size="xl"
      to="#roleta"
      variant="outline"
    />

    <UButton
      aria-label="regras"
      class="font-major uppercase [grid-area:B]"
      label="regras"
      size="xl"
      to="#regras"
      variant="outline"
    />

    <UButton
      :to="repository"
      aria-label="repositorio"
      class="[grid-area:C]"
      icon="i-mdi-github"
      size="xl"
      target="_blank"
      variant="outline"
    />

    <ClientOnly>
      <UButton
        :key="colorMode.value"
        :icon="isDark ? 'i-mdi-moon-waning-crescent' : 'i-mdi-white-balance-sunny'"
        aria-label="tema"
        class="[grid-area:D]"
        size="xl"
        variant="outline"
        @click="isDark = !isDark"
      />

      <template #fallback>
        <UButton
          class="[grid-area:D]"
          loading
          size="xl"
          variant="outline"
        />
      </template>
    </ClientOnly>
  </nav>
</template>
