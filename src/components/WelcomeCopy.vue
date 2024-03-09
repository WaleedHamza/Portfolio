<template>
  <v-sheet
    id="welcome2"
    class="overflow-hidden"
    color="primary"
  >
    <v-row>
      <v-sheet
        color="primary"
        width="20%"
        height="100"
      />
      <v-sheet
        color="secondary"
        width="20%"
        height="100"
      />
      <v-sheet
        color="accent"
        width="20%"
        height="100"
      />
      <v-sheet
        color="info"
        width="20%"
        height="100"
      />
      <v-sheet
        color="bright"
        width="20%"
        height="100"
      />
    </v-row>
    <v-row no-gutters>
      <v-col
        class="hidden-sm-and-down"
        md="4"
      >
        <v-img
          :src="require('@/assets/welcome.png')"
          height="100vh"
          class="contain-sm-and-down"
          alt="Waleed Hamza"
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
            class="layout wrap"
            cols="10"
            md="8"
          >
            <div
              :v-if="$vuetify.breakpoint.smAndDown"
              class="d-flex justify-center pb-4"
            >
              <v-avatar size="120">
                <img
                  :src="require('@/assets/avatar.png')"
                  alt="Waleed Hamza"
                >
              </v-avatar>
            </div>

            <base-heading>
              Hi, My Name is
            </base-heading>

            <base-heading>
              Waleed Hamza
            </base-heading>
            <!-- <base-title>
              Waleed Hamza
            </base-title> -->
            <base-text>
              I’m a solution focused developer eager to tackle challenging issues and provide innovative solutions.
              My strengths are persistence, personal integrity and a positive attitude. I’m a resourceful, life-long learner,
              who enjoys collaborating across multidisciplinary teams, but also can work independently. I’d love to grow as a user centered developer,
              and improve the human condition by connecting users one digital product at a time.
            </base-text>
          </v-col>
        </v-row>

        <base-bubble-2
          style="transform: rotate(180deg) translate(-200px, -15%)"
        />
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
  export default {
    name: 'Welcome',
    components: {
    },
  }
</script>
<style scoped>
#welcome {
  height: 100vh;
}
</style>
