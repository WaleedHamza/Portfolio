<template>
  <section
    id="about"
    class="overflow-hidden"
  >
    <v-row
      class="accent"
      no-gutters
    >
      <v-col
        class="layout wrap"
        cols="12"
        md="8"
      >
        <base-bubble-1
          class="overlay hidden-md-and-down"
          style="transform: translate(95%, 5%)"
        />
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="10"
            md="8"
          >
            <base-heading class="info--text">
              About Me
            </base-heading>

            <base-text>
              I have always been a lover of languages. My first memories were teaching myself English while watching movies and then repeating the words to anyone who would listen. This initial spark created a passion to master English which lead me to become a translator for the US Army. Language, has the power to create connections and influence people.
              <br><br>
              My love of languages has evolved with my career trajectory, so, it’s no surprise I found the same spark when introduced to programing languages. In code, I have the same power to create connections and influence people for good through my applications.
            </base-text>
          </v-col>
        </v-row>
      </v-col>

      <v-col
        class="hidden-sm-and-down"
        md="4"
      >
        <v-img
          :src="require('@/assets/aboutme.png')"
          height="100%"
        />
      </v-col>
    </v-row>
  </section>
</template>

<script>
  export default {
    data: () => ({
    }),
  }
</script>

<style scoped>
  .overlay {
    width: 100%;
  height: 100%;
  position: absolute;
  }
</style>
