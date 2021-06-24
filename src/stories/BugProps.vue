<template>
  <div class="BugProps">
    <ul>
      <li>Label Prop: {{ label }}</li>
      <li>Title Prop: {{ title }}</li>
      <li>Slot: <slot /></li>
    </ul>

    All Props: {{ $props }}
  </div>
</template>

<script>
export default {
  name: "BugProps",
  props: {
    label: { type: String, default: undefined },
    title: { type: String, default: undefined },
  },
};
</script>
