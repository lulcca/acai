<script lang="ts" setup>
import rules from 'assets/json/rules.json';
</script>

<template>
  <section
    id="regras"
    class="gap-10 grid grid-cols-1 grid-rows-[auto_1fr] h-screen place-content-start place-items-start w-full"
  >
    <h2 class="font-major text-6xl uppercase">
      Regras
    </h2>

    <ol class="list-decimal">
      <template
        v-for="rule in rules"
        :key="rule"
      >
        <li class="text-lg">
          {{ rule }}
        </li>
      </template>
    </ol>
  </section>
</template>
