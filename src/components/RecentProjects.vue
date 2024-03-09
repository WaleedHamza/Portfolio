<template>
  <section
    ref="projects"
    class="overflow-hidden mb-5 fcc"
    style="position: relative; height: 100vh;"
  >
    <div class="">
      <v-carousel
        v-model="carouselModel"
        :continuous="false"
        :show-arrows="carouselModel > 0 ? true : false"
        hide-delimiter-background
        :hide-delimiters="carouselModel === 0 ? true : false"
        style="height: 80vh;"
        class="d-flex align-center"
      >
        <v-carousel-item>
          <div
            class="fcc flex-column"
            style="height: 100%;"
          >
            <base-heading
              class="text-sm-center text-md-left"
            >
              Full Satck Developer
            </base-heading>

            <base-text
              class="text-center"
              style="width: 50%;"
            >
              Resolving design problems, building smart user interfaces and useful interactions, developing rich web applications and seamless web experiences.
            </base-text>

            <base-text>
              <a
                @click="fadeOut()"
              >
                See Projects >
              </a>
            </base-text>
          </div>
        </v-carousel-item>
        <v-carousel-item
          v-for="project in projects"
          :key="project.id"
          style="height: 80vh;"
          class="mx-auto"
        >
          <v-card
            style="position: relative; max-width: 80%;"
            class="mx-auto"
          >
            <v-img
              :src="project.src"
              style="cursor:pointer"
            />
            <v-card-title
              class="info--text mb-3"
            >
              <p
                style="cursor:pointer"
                @click="goTo(project.url)"
              >
                {{ project.name }}
              </p>
            </v-card-title>
            <v-card-subtitle class="d-flex justify-space-around flex-wrap">
              <v-chip
                v-for="use in project.uses"
                :key="use"
                small
                outlined
                pill
                class="shadow"
              >
                {{ use }}
              </v-chip>
            </v-card-subtitle>
            <v-card-text
              v-if="project.details"
              class="info--text my-4"
            >
              <h3>{{ project.details }}</h3>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                v-if="project.url"
                text
                @click="goTo(project.url)"
              >
                Visit Site
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-carousel-item>
      </v-carousel>
    </div>
    <!-- <v-card
      v-for="project in projects"
      :key="project.id"
      style="width:720px; height: auto; position: relative;"
      class="mx-2 shadow"
      max-width="344"
    >
      <v-img
        :src="project.src"
        height="250"
        style="cursor:pointer"
        @click="goTo(project.url)"
      />
      <v-card-title
        class="info--text mb-3"
      >
        <p
          style="cursor:pointer"
          @click="goTo(project.url)"
        >
          {{ project.name }}
        </p>
      </v-card-title>
      <v-card-subtitle class="d-flex justify-space-around flex-wrap">
        <v-chip
          v-for="use in project.uses"
          :key="use"
          small
          outlined
          pill
          class="shadow"
        >
          {{ use }}
        </v-chip>
      </v-card-subtitle>
      <v-card-text
        v-if="project.details"
        class="info--text my-4"
      >
        <h3>{{ project.details }}</h3>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          v-if="project.url"
          text
          @click="goTo(project.url)"
        >
          Visit Site
        </v-btn>
      </v-card-actions>
    </v-card> -->
  </section>
</template>

<script>
  export default {
    name: 'RecentProjects',
    components: {
      // BaseBtn: () => import('@/components/base/Btn'),
    },
    data: () => ({
      projects: [
        { id: 0, name: 'TMDB Search', url: 'https://tmdbprod.herokuapp.com/', src: require('@/assets/tmdbSearch.png'), uses: ['Vue', 'Vuetify', 'Vuex', 'Axios'] },
        { id: 1, name: 'Audition', url: 'https://uncauditionapp.herokuapp.com/', src: require('@/assets/audition.png'), uses: ['React', 'Bootstrap', 'AWS'] },
        { id: 2, name: 'Trivia Game', url: 'https://waleedhamza.github.io/TriviaGame/', src: require('@/assets/triviaGame.png'), uses: ['jQuery', 'Bootstrap'] },
        { id: 3, name: 'Rimini Street', url: 'google.com', src: require('@/assets/riminiStreet.gif'), uses: ['HTML', 'CSS', 'Javascript'] },
      ],
      tabs: ['All Projects', 'Vue', 'Vuetify', 'React', 'JQuery'],
      sort: 'All Projects',
      show: false,
      carouselModel: 0,
      myStyle: 'hidden',
    }),
    created () {
      this.filterProject()
    },
    // mounted () {
    //   // Add event listener for scrolling
    //   window.addEventListener('scroll', this.handleScroll)
    // },
    // beforeDestroy () {
    //   // Remove the event listener when the component is destroyed
    //   window.removeEventListener('scroll', this.handleScroll)
    // },
    methods: {
      filterProject (i) {
        this.sort = i
      },
      goTo (prop) {
        window.open(prop, '_blank')
      },
      fadeOut () {
        this.carouselModel = 1
        // this.show = !this.show
        // if (this.myStyle === 'hidden') {
        //   setTimeout(() => {
        //     this.myStyle = 'fade'
        //   }, 500)
        // } else {
        //   this.myStyle = 'hidden'
        // }
      },
      // handleScroll () {
      //   // const container = document.querySelector('')
      //   const content = document.querySelector('.content')
      //   const scrollY = window.scrollY
      //   const translateX = scrollY * 0.5
      //   function isDivAtTop () {
      //     const rect = content.getBoundingClientRect()
      //     return rect.top
      //   }
      //   // Apply the sliding effect based on the scroll position
      //   if (isDivAtTop) {
      //     console.log('0000000', isDivAtTop)
      //     content.style.transform = `translateX(${translateX}px)`
      //   }
      // },
    },
  }
</script>

<style>
.item {
  transition: all 0.8s ease;
  display: inline-block;
}
.list-from,
.list-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-leave-active {
  position: absolute;
}

@media only screen and (max-width: 375px) {
  .card {
  width: 80vw!important;
}
.v-sheet, test{
    border: 1px solid red;
}
}
.slide-right {
    transition: transform 0.3s ease;
    transform: translateX(0);
}
.fade {
    transition: opacity 0.5s ease;
    opacity: 1;
}
.hidden {
    opacity: 0;
    display: none; /* Optional, hides the element completely after fading out */
}
</style>
