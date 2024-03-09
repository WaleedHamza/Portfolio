<template>
  <!-- <v-img
    class="grow hidden-sm-and-down"
    contain
    max-height="200"
    width="100%"
    position="bottom left"
    :src="require('@/assets/bubbles2.png')"
  /> -->
  <div class="wave-container">
    <svg
      viewBox="0 0 500 150"
      preserveAspectRatio="none"
    >
      <path d="M-0.00,120 C90.00,150 350.00,0 500.00,5 L500.00,00 L-0.00,00 Z" />
    </svg>
  </div>
</template>

<script>
  export default {
    name: 'BaseBubble2',

  // transform: rotate(15deg);
  }
</script>
<style scoped>
.wave-container {
  position: relative;
  height: 300px;
  width: 100%;
  transform: rotate(180deg)
}

svg{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
}
</style>
