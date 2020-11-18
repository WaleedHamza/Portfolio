<template>
  <section
    id="about"
    class="overflow-hidden"
    heigh="70vh"
  >
    <v-row
      class="accent"
      no-gutters
    >
      <v-col
        class="pa-10"
        cols="12"
        md="8"
      >
        <base-bubble-1 style="transform: translate(15%, -5%)" />

        <base-heading class="info--text ">
          About Me
        </base-heading>

        <base-text class="mb-5">
          I have always been a lover of languages. My first memories were teaching myself English while watching movies and then repeating the words to anyone who would listen. This initial spark created a passion to master English which lead me to become a translator for the US Army. Language, has the power to create connections and influence people.
          <br><br>
          My love of languages has evolved with my career trajectory, so, it’s no surprise I found the same spark when introduced to programing languages. In code, I have the same power to create connections and influence people for good through my applications.
        </base-text>
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
