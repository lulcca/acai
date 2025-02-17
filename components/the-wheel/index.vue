<script lang="ts" setup>
const toast = useToast();

const names = ref('');
const roulette = ref();

const name_array = computed<{ content: string; size: number }[]>(() => {
  if (!names.value.trim()) return [];

  return names.value
    .split(',')
    .map(name => name.trim())
    .filter(Boolean)
    .reduce<{ content: string; size: number }[]>((acc, name) => {
      const name_in_array = acc.find(item => item.content === name);

      if (name_in_array) {
        name_in_array.size += 1;
      } else {
        acc.push({ content: name, size: 1 });
      }

      return acc;
    }, []);
});
</script>

<template>
  <section
    id="roleta"
    class="gap-10 grid grid-cols-1 grid-rows-[auto_1fr] h-screen place-content-start place-items-start w-full"
  >
    <h2 class="font-major text-6xl uppercase">
      Roleta
    </h2>

    <div class="gap-20 grid grid-cols-[2fr_3fr] h-full w-full">
      <div class="gap-5 grid items-start content-start">
        <label>Participantes</label>

        <UTextarea
          v-model="names"
          :maxrows="10"
          :rows="10"
          autoresize
          class="flex"
          placeholder="Ex.: primeiro nome, segundo nome, ..."
          size="xl"
        />

        <div class="flex justify-between">
          <UButton
            size="xl"
            variant="ghost"
            @click="names=''"
          >
            Limpar
          </UButton>

          <UButton
            size="xl"
            variant="solid"
            @click="roulette.spin()"
          >
            Girar
          </UButton>
        </div>
      </div>

      <Roulette
        ref="roulette"
        :key="name_array.length"
        :slices="name_array"
        class="h-3/4"
        @result="(result: string) => toast.add({ description: `${result} ganhou um açaí.`, title: 'Parabéns! 😋' })"
      />
    </div>
  </section>
</template>
