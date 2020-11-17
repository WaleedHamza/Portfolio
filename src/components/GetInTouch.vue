<template>
  <section
    id="get-in-touch"
    class="overflow-hidden"
  >
    <v-row
      no-gutters
      class="d-flex flex-column justify-center info text-center pa-5 white--text pb-10"
    >
      <base-bubble-1 />

      <base-heading class="mb-5">
        Get In Touch
      </base-heading>

      <v-sheet
        color="transparent"
        class="d-flex justify-center "
      >
        <form
          action="https://formspree.io/f/mleolrpy"
          method="post"
          class="test"
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
.test {
  width: 50vw;
  margin: 0 auto;
}
</style>
