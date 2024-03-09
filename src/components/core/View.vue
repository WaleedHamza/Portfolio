<template>
  <div
    class="mx-auto"
    width="90%"
  >
  <!-- <side-nav /> -->
    <section id="section1">
      <welcome />
      <div class="bounceEffect">
        <v-img
          :src="require('@/assets/HeatwaveCube.svg')"
          contain
          alt="Heatwave Cube"
          class=""
          style="top: -700px; left: -400px; height: 50px;"
        />
      </div>
    </section>
    <section id="section2">
      <about-me />
    </section>
    <section id="section3">
      <skills-technologies />
    </section>
    <section id="section4">
      <recent-projects />
    </section>
    <section id="section5">
      <get-in-touch />
    </section>
  </div>
</template>

<script>
  export default {
    name: 'CoreView',

    components: {
      AboutMe: () => import('@/components/AboutMe'),
      GetInTouch: () => import('@/components/GetInTouch'),
      skillsTechnologies: () => import('@/components/Skills'),
      Welcome: () => import('@/components/Welcome'),
      RecentProjects: () => import('@/components/RecentProjects'),
      SideNav: () => import('@/components/base/SideNav'),
    },
    directives: {
      scrollspy: {
        // Use the custom directive
        inserted: (el) => {
          console.log('here', el)
        },
      },
    },
    created () {
      window.addEventListener('scroll', this.handleScroll)
    },
    unmounted () {
      window.removeEventListener('scroll', this.handleScroll)
    },
    mounted () {
      // Listen for the event emitted by the scrollspy directive
      this.$bus.$on('section-in-view', (sectionId) => {
        console.log(`Section ${sectionId} is in view.`)
        // Perform actions based on the section in view
      })
    },
    methods: {
      // getWindowHeight () {
      //   this.windowHeight = window.innerHeight
      // },
    },
  }
</script>
<style scoped>
  section {
    height: 100vh;
  }
  .bounceEffect {
    animation: bounce 9s ease infinite;
}

@keyframes bounce {
    0%, 100% {
        transform: translateY(0) rotate(3deg);
    }
    25% {
        transform: translateY(-20px) rotate(5deg);
    }
    50% {
        transform: translateY(0) rotate(7deg);
    }
    75% {
        transform: translateY(-20px) rotate(5deg);
    }
    100% {
        transform: translateY(0) rotate(3deg);
    }
}
</style>
