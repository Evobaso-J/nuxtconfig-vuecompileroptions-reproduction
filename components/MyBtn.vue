<template>
  <button>{{ `Defined prop value: ${explicitlyDefinedProp}` }}</button>
</template>

<script setup lang="ts">
type Props = {
  explicitlyDefinedProp: string;
};

defineProps<Props>();
</script>
