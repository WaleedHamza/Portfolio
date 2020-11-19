<template>
  <section
    id="get-in-touch"
    class="overflow-hidden"
  >
    <v-row
      no-gutters
      class="d-flex flex-column justify-center info text-center pa-5 white--text"
    >
      <base-bubble-1 class="hidden-md-and-down" />
      <base-heading>
        Get In Touch
      </base-heading>

      <v-sheet
        color="transparent"
        class="d-flex justify-center "
      >
        <form
          action="https://formspree.io/f/mleolrpy"
          method="post"
          class="form"
        >
          <v-text-field
            color="info"
            label="Name"
            name="Name"
            solo
            flat
          />

          <v-text-field
            color="info"
            label="Email"
            name="Email"
            solo
            flat
          />

          <v-text-field
            color="info"
            label="Subject"
            name="Subject"
            solo
            flat
          />

          <v-textarea
            color="info"
            label="Message"
            name="message"
            class="textInput"
            solo
            flat
          />

          <base-btn type="submit">
            Send
          </base-btn>
        </form>
      </v-sheet>
    </v-row>
  </section>
</template>

<script>
  export default {
    name: 'GetInTouch',
  }
</script>
<style scoped>
.form {
  width: 50vw;
}

@media only screen and (max-width: 375px) {
  .form {
  width: 100%;
}
}
</style>
