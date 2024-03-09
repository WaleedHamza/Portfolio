<template>
  <v-app-bar
    v-scroll="onScroll"
    color="transparent"
    fixed
    flat
  >
    <v-slide-x-transition>
      <v-img
        v-if="showLogo"
        :src="require('@/assets/logo.png')"
        class="shrink"
        contain
        height="50"
        width="100"
        style="cursor:pointer"
        @click="scrollToSection(1)"
      />
    </v-slide-x-transition>

    <v-spacer />

    <div
      v-show="!isScrolling ? false : true"
    >
      <v-btn
        v-for="b in navButtons"
        :key="b.index"
        text
        @click="scrollToSection(b.index)"
      >
        <p
          class="ma-0 pa-0"
        >
          {{ b.name }}
        </p>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
  export default {
    name: 'CoreAppBar',

    components: {
    },

    data: () => ({
      showLogo: false,
      isScrolling: false,
      show: true,
      navButtons: [
        {
          name: 'About',
          index: 2,
        },
        {
          name: 'Skills',
          index: 3,
        },
        {
          name: 'Projects',
          index: 4,
        },
        {
          name: 'Contact',
          index: 5,
        },
      ],
    }),

    methods: {
      scrollToSection (i) {
        switch (i) {
          case 1:
            this.$nextTick().then(() => document.querySelector('#section1')?.scrollIntoView({ behavior: 'smooth', block: 'center' }))
            break
          case 2:
            this.$nextTick().then(() => document.querySelector('#section2')?.scrollIntoView({ behavior: 'smooth', block: 'center' }))
            break
          case 3:
            this.$nextTick().then(() => document.querySelector('#section3')?.scrollIntoView({ behavior: 'smooth', block: 'center' }))
            break
          case 4:
            this.$nextTick().then(() => document.querySelector('#section4')?.scrollIntoView({ behavior: 'smooth', block: 'center' }))
            break
          case 5:
            this.$nextTick().then(() => document.querySelector('#section5')?.scrollIntoView({ behavior: 'smooth', block: 'center' }))
            break
        }
      },
      onScroll () {
        const offset = window.pageYOffset
        this.isScrolling = offset > 50
        this.showLogo = offset > 200
      },
      scroll () {
        window.onscroll = () => {
          const bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight

          if (bottomOfWindow) {
            this.show = false
          }
        }
      },
    },
  }
</script>
<style>
</style>
