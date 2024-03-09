<template>
  <div id="socialMediaLinks">
    <a href="https://www.linkedin.com/in/waleedhamza/">
      <v-btn
        fab
        small
        class="ma-2"
        color=""
      >
        <v-img
          src="../assets/linkedin.svg"
          class="shrink"
          contain
          height="30"
        />
      </v-btn>
    </a>
    <a href="https://github.com/WaleedHamza">
      <v-btn
        fab
        small
        class="ma-2"
        color=""
      >
        <v-img
          src="../assets/github.svg"
          class="shrink"
          contain
          height="30"
        />
      </v-btn>
    </a>
    <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
        <a
          href="./Waleed Hamza Resume (2021).pdf"
          style="text-decoration: none;"
        >
          <v-btn
            fab
            small
            class="ma-2"
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
    methods: {
      scrollUp () {
        this.$nextTick().then(() => document.querySelector('#section1')?.scrollIntoView({ behavior: 'smooth', block: 'center' }))
      },
    },
  }
</script>
<style>
#socialMediaLinks {
    position: fixed;
    right: 10px;
    bottom: 45%;
    display: flex;
    flex-direction: column;
    z-index: 10;
    cursor: pointer;
}
</style>
