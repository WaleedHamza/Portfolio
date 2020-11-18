<template>
  <section
    id="welcome"
    class="overflow-hidden"
  >
    <v-row no-gutters>
      <v-col
        class="hidden-sm-and-down"
        md="4"
      >
        <v-img
          :src="require('@/assets/welcome.png')"
          height="100vh"
          class="contain-sm-and-down"
        />
      </v-col>

      <v-col
        class="align-content-space-between layout wrap"
        cols="12"
        md="8"
        :pa-5="$vuetify.breakpoint.smAndDown"
      >
        <base-bubble-1
          style="transform: rotate(180deg) translatex(15%)"
        />

        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="10"
            md="8"
          >
            <base-heading>Hi, My Name is </base-heading>
            <base-heading
              class="heading"
            >
              Waleed Hamza
            </base-heading>
            <base-text>
              I’m a solution focused developer eager to tackle challenging issues and provide innovative solutions.
              My strengths are persistence, personal integrity and a positive attitude. I’m a resourceful, life-long learner,
              who enjoys collaborating across multidisciplinary teams, but also can work independently. I’d love to grow as a user centered developer,
              and improve the human condition by connecting users one digital product at a time.
            </base-text>
            <!-- <base-btn class="mt-4">
              Learn More!
            </base-btn> -->
          </v-col>
        </v-row>

        <base-bubble-2
          style="transform: rotate(180deg) translate(-200px, -15%)"
        />
      </v-col>
    </v-row>
  </section>
</template>

<style scoped>
#welcome {
  height: 100vh;
}
 .heading {
font-family: 'Prata', serif;
}
</style>
