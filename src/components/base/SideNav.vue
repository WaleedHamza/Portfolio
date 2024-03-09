<template>
  <div id='navigation'>
        <div>
          <a
            id='section1Anchor'
            @click="scrollToSection(1)"
          >
            <div></div>
          </a>
            <p>01</p>
        </div>
        <div>
          <a
            id='section2Anchor'
            @click="scrollToSection(2)"
          >
            <div></div>
          </a>
            <p>02</p>
        </div>
        <div>
          <a
            id='section3Anchor'
            @click="scrollToSection(3)"
          >
            <div></div>
          </a>
            <p>03</p>
        </div>
        <div>
          <a
            id='section4Anchor'
            @click="scrollToSection(4)"
          >
            <div></div>
          </a>
            <p>04</p>
        </div>
        <div>
          <a
            id='section5Anchor'
            @click="scrollToSection(5)"
          >
            <div></div>
          </a>
            <p>05</p>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'SideNav',
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
    },
  }
</script>
<style scoped>
  #navigation {
    position: fixed;
    left: 0;
    bottom: 50%;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    z-index: 10;
  }
  #navigation>div {
    display: flex;
}

#navigation>div>a>div {
    display: flex;
    flex-wrap: nowrap;
    width: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 2px;
    background-color: #e3e3e3;
    transition: all ease-in-out 0.5s;
}

#navigation>div>p {
    display: none;
    color: #e3e3e3;
    margin-left: 1rem;
}

#navigation .Active p {
    display: block;
    color: #1295d8;
}

#navigation .Active div {
    width: 84px;
    transition: all ease-in-out 0.5s;
    background-color: #1295d8;
}
</style>
