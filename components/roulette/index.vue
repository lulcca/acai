<script lang="ts" setup>
const ANIMATION_DURATION = 360 * 50;
const RESULT_DELAY = 1000;
const TOTAL_ROTATION = 360 * 10;

defineExpose({ spin });

const emit = defineEmits(['result']);

const props = defineProps<{
  slices: {
    content: string,
    size: number,
  }[],
}>();

const totalSlices = props.slices.reduce((sum, slice) => sum + slice.size, 0);
const sliceDegree = 360 / totalSlices;
const currentRotation = ref(0);
const randomDegree = ref(0);

function getRandomDegree() {
  return Math.floor(Math.random() * 360) + TOTAL_ROTATION;
}

function handleResult() {
  const finalRotation = (360 - (randomDegree.value % 360)) % 360;
  let accumulatedSize = 0;
  const resultSlice = props.slices.find(slice => {
    accumulatedSize += (slice.size * sliceDegree);
    return finalRotation < accumulatedSize;
  });

  setTimeout(() => emit('result', resultSlice?.content), RESULT_DELAY);
}

function spin() {
  let start = 0;
  randomDegree.value = getRandomDegree();
  requestAnimationFrame(animate);

  function animate(timestamp: number) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    if (progress >= ANIMATION_DURATION) {
      currentRotation.value = randomDegree.value % 360;
      return handleResult();
    }
    const percentage = Math.min(progress / ANIMATION_DURATION, 1);
    const easePercentage = 1 - Math.pow(1 - percentage, 3);
    currentRotation.value = randomDegree.value * easePercentage;
    requestAnimationFrame(animate);
  }
}
</script>

<template>
  <figure class="grid justify-items-center w-full">
    <div class="flex h-full relative rounded-full w-max shadow-2xl">
      <div class="absolute flex justify-center top-0 w-full z-10">
        <UIcon
          name="i-tdesign-arrow-triangle-down-filled"
          class="bg-gray-100 h-16 w-16"
        />
      </div>

      <svg
        aria-label="Roleta de Descontos"
        class="relative w-full h-[260px] sm:h-[300px] md:h-[380px] lg:h-full"
        viewBox="-200 -200 400 400"
      >
        <g :style="{ transform: `rotate(${currentRotation}deg)` }">
          <template v-for="(slice, index) in props.slices" :key="index">
            <RouletteSlice
              :content="slice.content"
              :index="index"
              :size="slice.size"
              :total="totalSlices"
              :accumulated-size="props.slices.slice(0, index).reduce((sum, s) => sum + s.size, 0)"
            />
          </template>
        </g>
      </svg>
    </div>
  </figure>
</template>
