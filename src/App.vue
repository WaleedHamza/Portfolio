<template>
  <v-app
    id="app"
    class="appScrollBar"
  >
    <div
      id="scroll-progress"
      class="scroll-progress"
    />
    <v-sheet
      class="insetShadow"
    >
      <core-app-bar />

      <core-view />

      <core-footer />

      <social-media />
    </v-sheet>
  </v-app>
</template>

<script>
// Scroll progressbar effect
  const scrollProgressElement = document.querySelector('#scroll-progress')
  function scrollProgress () {
    const totalHeight = document.body.scrollHeight
    const currentDistanceFromTop = document.documentElement.scrollTop
    const windowHeigh = document.documentElement.clientHeight
    const scrolledPrecentage = (currentDistanceFromTop / (totalHeight - windowHeigh)) * 100
    scrollProgressElement.style.width = Math.round(scrolledPrecentage) + '%'
  }
  // End of Scroll progressbar effect
  document.addEventListener('scroll', function (e) {
    e.preventDefault()
    scrollProgress()
  //   scrollParallaxEffect()
  //   isInViewport(section1) ? section1Anchor.parentNode.classList.add('Active') : section1Anchor.parentNode.classList.remove('Active')
  //   isInViewport(section2) ? section2Anchor.parentNode.classList.add('Active') : section2Anchor.parentNode.classList.remove('Active')
  //   isInViewport(section3) ? section3Anchor.parentNode.classList.add('Active') : section3Anchor.parentNode.classList.remove('Active')
  // // isInViewport(section4) ? section4Anchor.parentNode.classList.add("Active") : section4Anchor.parentNode.classList.remove("Active")
  })
  export default {
    name: 'App',
    components: {
      CoreAppBar: () => import('@/components/core/AppBar'),
      CoreFooter: () => import('@/components/core/Footer'),
      CoreView: () => import('@/components/core/View'),
      SocialMedia: () => import('@/components/SocialMedia'),
    },
    data () {
      return {
        windowHeight: 0,
      }
    },
    mounted () {
      window.addEventListener('resize', this.getWindowHeight)
      this.getWindowHeight()
    },
    beforeDestroy () {
      window.removeEventListener('resize', this.getWindowHeight)
    },
    methods: {
      getWindowHeight () {
        this.windowHeight = window.innerHeight
      },
    },
  }
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

.test{
  border: 1px solid red;
}
#test1{
  background: #0F2027;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #2C5364, #203A43, #0F2027); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.fcc {
  display: flex;
  justify-content: center;
  align-items: center;
}
.insetShadow {
  border-radius: 5px;
  box-shadow: rgba(3,3,3, 0.5) 5px 5px 0px 0px inset, rgba(3,3,3, 0.5) 5px 2px 5px 5px inset,rgba(255, 255, 255, 0.1) 5px 0px 5px -3px;
  ;
}
.shadow{
  box-shadow: rgba(3,3,3, 0.5) 5px 5px 5px;
}
.textShadow{
  text-shadow:   rgba(0, 0, 0, 0.9) 5px 5px 5px;
}
/* Progress Bar */
.scroll-progress {
    width: 0;
    background-color: RGB(18, 149, 216);
    height: 3px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
}
.noScrollBar::-webkit-scrollbar {
   width: 0;
   display: none;
}

.noScrollBar {
  overflow: scroll;
}

/* Firefox */
.noScrollBar {
  overflow: scroll;
  -moz-appearance: none;
}
</style>
