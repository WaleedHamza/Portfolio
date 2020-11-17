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
        style="transform: rotate(180deg) translateX(25%)"
      />
      <v-container>
        <v-row class="d-flex justify-center mb-10">
          <base-heading class="info--text mb-10">
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
      <v-container class="d-flex justify-center">
        <transition-group
          name="list"
          tag="div"
          class="list d-flex justify-center flex-wrap ma-4"
          style="overflow: auto; white-space: nowrap;"
        >
          <span
            v-for="project in projects"
            :key="project"
          >
            <v-card
              class="ma-2"
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
              <v-card-actions>
                <v-spacer />
                <a
                  :href="project.url"
                  style="text-decoration: none;"
                ><v-btn
                  color="info"
                  text
                >
                  Visit Site
                </v-btn>
                </a>
              </v-card-actions>
            </v-card>
          </span>
        </transition-group>
      </v-container>
      <v-container
        class="d-flex justify-center"
      >
        <v-sheet
          color="bright"
          width="80%"
          class="py-4"
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
        { name: 'TMDB Search', url: 'https://tmdbprod.herokuapp.com/', src: require('../assets/tmdbSearch.jpeg'), uses: ['Vue', 'Vuetify', 'Vuex', 'Axios'] },
        { name: 'Audition', url: 'https://uncauditionapp.herokuapp.com/', src: require('../assets/audition.jpeg'), uses: ['React', 'Bootstrap', 'AWS'] },
        { name: 'Trivia Game', url: 'https://waleedhamza.github.io/TriviaGame/', src: require('../assets/triviaGame.png'), uses: ['jQuery', 'Bootstrap'] },
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
      computed: {
        sortedProjects () {
          const s = this.sort
          const p = this.projects
          switch (s) {
            case 'Vue':
              return p.filter(i => i.uses.includes(s))
            case 'All Projects':
              return this.tabs
            case 'Vuetify':
              return p.filter(i => i.uses.includes(s))
            case 'React':
              return p.filter(i => i.uses.includes(s))
            case 'JQuery':
              return p.filter(i => i.uses.includes(s))
            default:
              return this.projects
          }
        },
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
</style>
