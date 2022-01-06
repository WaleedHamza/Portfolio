<template>
  <div>
    <a href="https://www.linkedin.com/in/waleedhamza/">
      <v-btn
        fab
        class="ma-2"
        color="info"
      >
        <v-img
          src="../assets/linkedin.svg"
          class="shrink"
          contain
          height="50"
        />
      </v-btn>
    </a>
    <a href="https://github.com/WaleedHamza">
      <v-btn
        fab
        class="ma-2"
        color="info"
      >
        <v-img
          src="../assets/github.svg"
          class="shrink"
          contain
          height="50"
        />
      </v-btn>
    </a>
    <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
        <a
          href="./WaleedHamzaResume(2021).pdf"
          style="text-decoration: none;"
        >
          <v-btn
            fab
            class="ma-2"
            color="info"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon size="35">mdi-file-download-outline</v-icon>
          </v-btn>
        </a>
      </template>
      <span>Resume</span>
    </v-tooltip>
  </div>
</template>

<script>
  export default {
    props: {
      large: {
        type: Boolean,
        default: false,
      },
    },

    data: () => ({
      items: [
        {},
      ],
    }),
  }
</script>
