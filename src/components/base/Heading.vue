<template>
  <component
    :is="tag"
    class="display-3 v-heading mb-3 font-weight-light"
    style="font-family: 'Oranienbaum', serif !important;"
  >
    <slot />
  </component>
</template>

<script>
  export default {
    name: 'BaseHeading',

    props: {
      tag: {
        type: String,
        default: 'h1',
      },
    },
  }
</script>

<style lang="sass">
  .v-heading
    letter-spacing: 3px !important
</style>
