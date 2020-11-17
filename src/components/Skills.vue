/* eslint-disable vuetify/grid-unknown-attributes */
<template>
  <section
    id="services"
    class="overflow-hidden mb-5"
  >
    <v-row
      no-gutters
    >
      <base-bubble-2
        style="transform: translateX(55%)"
      />
      <v-row
        class="d-flex flex-column justify-center align-center fill-height pt-10"
      >
        <base-heading class="info--text ">
          Skills
        </base-heading>

        <v-alert
          outlined
          color="info"
          width="50%"
        >
          <v-row
            v-for="(skill, i) in skills"
            :key="i"
            :style="`color: ${skill.color};`"
          >
            <v-col
              class="d-flex text-uppercase"
              v-text="skill.name"
            />

            <v-col
              class="text-right"
              v-text="`${skill.value}%`"
            />

            <v-progress-linear
              :value="skill.value"
              :color="skill.color"
              height="8"
            />
          </v-row>
        </v-alert>
      </v-row>

      <v-container fluid>
        <!-- <base-heading class="info--text text-center mb-10">
          Technologies
        </base-heading> -->
        <v-container
          class="list d-flex justify-center flex-wrap"
        >
          <span
            v-for="service in services"
            :key="service"
          >
            <div
              class="d-flex flex-column align-center ma-3"
              with="500"
            >
              <v-avatar
                class="elevation-6 mb-2"
                color="#69A1BB"
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
                <div v-html="service.blurb" />
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

    data: () => ({
      services: [
        {
          name: 'Vue',
          icon: 'mdi-vuejs',
          blurb: '',
        },
        {
          name: 'React',
          icon: 'mdi-react',
          blurb: '',
        },
        {
          name: 'Javascript',
          icon: 'mdi-language-javascript',
          blurb: '',
        },
        {
          name: 'Node',
          icon: 'mdi-nodejs',
          blurb: '',
        },
        {
          name: 'Vuetify',
          icon: 'mdi-vuetify',
          blurb: '',
        },
        {
          name: 'Bootstrap',
          icon: 'mdi-bootstrap',
          blurb: '',
        },
        {
          name: 'CSS3',
          icon: 'mdi-language-css3',
          blurb: '',
        },
        {
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
