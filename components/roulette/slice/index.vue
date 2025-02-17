<script lang="ts" setup>
const props = defineProps<{
  accumulatedSize: number,
  content: string,
  index: number,
  size: number,
  total: number,
}>();

const sliceAngle = (props.size / props.total) * 360;
const startAngle = (props.accumulatedSize / props.total) * 360;
const middleAngle = startAngle + (sliceAngle / 2);
const largeArc = sliceAngle > 180 ? 1 : 0;

const { x, y } = getCoordinates(middleAngle, 90);
const { x: x1, y: y1 } = getCoordinates(startAngle, 180);
const { x: x2, y: y2 } = getCoordinates(startAngle + sliceAngle, 180);

function getCoordinates (angle: number, radius: number) {
  const radian = (angle - 90) * (Math.PI / 180);
  return {
    x: Math.round(radius * Math.cos(radian) * 10000) / 10000,
    y: Math.round(radius * Math.sin(radian) * 10000) / 10000,
  };
};
</script>

<template>
  <g>
    <path
      :d="`M0,0 L${x1},${y1} A180,180 0 ${largeArc},1 ${x2},${y2} Z`"
      class="fill-primary stroke-2 stroke-gray-100"
    />

    <text
      :transform="`rotate(${middleAngle}, ${x}, ${y})`"
      :x="x"
      :y="y-15"
      class="fill-gray-100"
      text-anchor="middle"
    >
      {{ content }}
    </text>
  </g>
</template>
