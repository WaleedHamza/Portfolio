<template>
  <v-btn
    class="btn"
    outlined
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </v-btn>
</template>

<script>
  export default {
    name: 'BaseBtn',
  }
</script>
<style scoped>
.btn{
  border: 1px solid rgb(169, 169, 169, 0.5);
  width: 100%;
  color: rgb(169, 169, 169, 0.8)
}
</style>
