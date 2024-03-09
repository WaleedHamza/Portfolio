<template>
  <section
    id="services"
    class="overflow-hidden mb-5 fcc"
  >
    <v-row
      no-gutters
      class="pa-5 fcc flex-column"
    >
      <base-heading
        class="text-sm-center text-md-left mb-10"
      >
        Skills & Experience
      </base-heading>
      <base-text
        style="width: 40%;"
        class="mx-auto pt-5"
      >
        I am a solution focused developer eager to tackle challenging issues
        and provide innovative solutions. My strengths are persistence,
        personal integrity and a positive attitude. I’m a resourceful,
        life-long learner, who enjoys collaborating across multidisciplinary
        teams, but also can work independently. I am a human-centered developer improving the human condition one digital product at a time.
      </base-text>

      <base-text>
        Visit my <a
          style="text-decoration:none;"
          href="https://www.linkedin.com/in/waleedhamza/"
        >LinkedIn</a> For more details
      </base-text>
      <v-container fluid>
        <v-container
          class="list d-flex justify-center flex-wrap"
        >
          <span
            v-for="service in services"
            :key="service.id"
          >
            <div
              class="d-flex flex-column align-center ma-3"
              with="500"
            >
              <v-avatar
                class="mb-1"
                size="90"
                tile
              >
                <v-icon
                  dark
                  size="52"
                  v-text="service.icon"
                />
              </v-avatar>

              <base-text>
                <div
                  class="mb-2"
                  v-text="service.name"
                />
                <!-- <div v-html="service.blurb" /> -->
              </base-text>
            </div>
          </span>
        </v-container>
      </v-container>
    </v-row>
  </section>
</template>

<script>
  export default {
    name: 'Services',
    components: {
      CodeBlock: () => require('@/components/base/CodeBlock'),
    },
    data: () => ({
      services: [
        {
          id: 0,
          name: 'Vue',
          icon: 'mdi-vuejs',
          blurb: '',
        },
        {
          id: 1,
          name: 'React',
          icon: 'mdi-react',
          blurb: '',
        },
        {
          id: 2,
          name: 'Javascript',
          icon: 'mdi-language-javascript',
          blurb: '',
        },
        {
          id: 3,
          name: 'Node',
          icon: 'mdi-nodejs',
          blurb: '',
        },
        {
          id: 4,
          name: 'Vuetify',
          icon: 'mdi-vuetify',
          blurb: '',
        },
        {
          id: 5,
          name: 'Bootstrap',
          icon: 'mdi-bootstrap',
          blurb: '',
        },
        {
          id: 6,
          name: 'CSS3',
          icon: 'mdi-language-css3',
          blurb: '',
        },
        {
          id: 7,
          name: 'HTML5',
          icon: 'mdi-language-html5',
          blurb: '',
        },
      ],
      skills: [
        {
          name: 'Web Design',
          value: 100,
          color: '#69A1BB',
        },
        {
          name: 'Web Development',
          value: 85,
          color: '#EAAF58',
        },
        {
          name: 'Web Support',
          value: 90,
          color: '#14BF14',
        },
        {
          name: 'Debugging',
          value: 80,
          color: '#D7DE04',
        },
      ],
    }),
  }
</script>

<style scoped>
.v-alert{
  width: 60%;
}
 @media only screen and (max-width: 375px) {
.v-alert{
  width: 90%;
}
 }
</style>
