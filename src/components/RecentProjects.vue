<template>
  <section
    id="recent-projects"
    class="overflow-hidden"
  >
    <v-row
      no-gutters
      class="d-flex flex-column justify-center accent text-center pa-5 pb-10"
    >
      <base-bubble-1
        style="transform: rotate(180deg) translateX(0%)"
      />
      <v-container>
        <v-row class="d-flex justify-center">
          <base-heading class="info--text">
            My Projects
          </base-heading>
        </v-row>
        <!-- <v-tabs
          centered
          color="info"
        >
          <v-tab
            v-for="i in tabs"
            :key="i"
            @click="filterProject(i)"
          >
            <base-subheading class="info--text">
              {{ i }}
            </base-subheading>
          </v-tab>
        </v-tabs> -->
      </v-container>
      <v-container class="d-flex justify-center flex-wrap">
        <span
          v-for="project in projects"
          :key="project.id"
        >
          <v-card
            class="card ma-2"
            width="344"
          >
            <v-img
              :src="project.src"
              cover
              aspect-ratio="1"
              height="200px"
            />
            <v-card-title class="info--text mb-3">
              {{ project.name }}
            </v-card-title>
            <v-card-subtitle class="d-flex justify-space-around flex-wrap">
              <v-chip
                v-for="use in project.uses"
                :key="use"
                small
                color="info"
              >{{ use }}</v-chip>
            </v-card-subtitle>
            <v-card-text
              v-if="project.details"
              class="info--text my-4"
            >
              <h3>{{ project.details }}</h3>
            </v-card-text>
            <v-card-actions>
              <v-spacer /><v-btn
                v-if="project.url"
                color="info"
                text
                @click="goTo(project.url)"
              >
                Visit Site
              </v-btn>
            </v-card-actions>
          </v-card>
        </span>
      </v-container>
      <v-container
        class="d-flex justify-center pa-0"
      >
        <v-sheet
          color="bright"
          width="80%"
          class="sheet pa-4"
        >
          <h1 class="info--text">
            Current work is proprietary. Details will be provided upon request.
          </h1>
        </v-sheet>
      </v-container>
    </v-row>
  </section>
</template>

<script>
  export default {
    name: 'RecentProjects',

    data: () => ({
      projects: [
        { id: 0, name: 'TMDB Search', url: 'https://tmdbprod.herokuapp.com/', src: require('@/assets/tmdbSearch.png'), uses: ['Vue', 'Vuetify', 'Vuex', 'Axios'] },
        { id: 1, name: 'Audition', url: 'https://uncauditionapp.herokuapp.com/', src: require('@/assets/audition.png'), uses: ['React', 'Bootstrap', 'AWS'] },
        { id: 2, name: 'Trivia Game', url: 'https://waleedhamza.github.io/TriviaGame/', src: require('@/assets/triviaGame.png'), uses: ['jQuery', 'Bootstrap'] },
      ],
      tabs: ['All Projects', 'Vue', 'Vuetify', 'React', 'JQuery'],
      sort: 'All Projects',
      show: false,
    }),
    created () {
      this.filterProject()
    },
    methods: {
      filterProject (i) {
        this.sort = i
      },
      goTo (prop) {
        window.open(prop, '_blank')
      },
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
.v-sheet{
    border: 1px solid red;
}
}
</style>
