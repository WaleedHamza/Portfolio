<template>
  <section
    id="get-in-touch"
    class="overflow-hidden"
    style="position: relative;"
  >
    <black-cube
      style="position:absolute; top: 20%; left: 70%; height: 250px;"
    />
    <v-img
      :src="require('@/assets/W.svg')"
      contain
      alt="Waleed Hamza"
      class=""
      style="position:absolute; top: 10%; left: 0px; height: 250px;"
    />
    <v-container
      class="fcc "
      style="height: 100vh;"
    >
      <div />
      <div class="">
        <v-row
          no-gutters
          class="d-flex flex-column justify-center text-center mt-9 pa-5 white--text"
        >
          <base-heading class="textShadow">
            Get In Touch
          </base-heading>

          <v-sheet
            color="transparent"
            class="d-flex justify-center ma-9 shrink"
          >
            <form
              v-if="!messageSent"
              ref="form"
              class="form"
            >
              <!-- @submit.prevent="sendEmail" -->
              <v-text-field
                v-model="name"
                outlined
                solo
                flat
                dense
                hide-details
                type="text"
                placeholder="Your name"
                name="user_name"
                class="my-5 textInput"
              />
              <v-text-field
                v-model="email"
                outlined
                solo
                flat
                dense
                hide-details
                type="email"
                placeholder="Your email"
                name="user_email"
                class="my-5 textInput"
              />
              <v-textarea
                v-model="message"
                outlined
                label="Message"
                name="message"
                class="my-5 textInput"
                solo
                flat
                hide-details
                placeholder="Your message"
              />
              <base-btn
                type="submit"
                value="Send"
              >
                Send
              </base-btn>
            </form>
            <v-card
              v-else
              height="100%"
              width="100%"
              class="mx-auto secondary"
            >
              <h1>
                Thank you for your message I will be in touch with you soon!
              </h1>
            </v-card>
          </v-sheet>
        </v-row>
        <stamp
          style="position:absolute; bottom: 50px; right: 50px; height: 250px;"
        />
      </div>
    </v-container>
    <v-snackbar
      v-model="showError"
      :timeout="timeout"
      :color="snackBarColor"
      top
      right
    >
      {{ text }}
    </v-snackbar>
  </section>
</template>

<script>
  // import emailjs from '@emailjs/browser'
  export default {
    name: 'GetInTouch',
    components: {
      BlackCube: () => import('@/components/base/BlackCube'),
      Stamp: () => import('@/components/base/Stamp'),
    },
    data: () => ({
      messageSent: false,
      showError: false,
      snackbar: false,
      timeout: 2000,
      snackBarColor: 'error',
      text: '',
      name: '',
      email: '',
      message: '',
    }),
    methods: {
      // sendEmail () {
      //   if (this.name && this.email && this.message) {
      //     console.log(this.$refs.form)
      //     emailjs.sendForm('service_5emf7jq', 'template_6kehwds', this.$refs.form, 'DfIT3_M0wAGfaQ_AV')
      //       .then((result) => {
      //         result.status === 200 ? this.messageSent = true : this.showError = true
      //         setTimeout(() => {
      //           this.messageSent = false
      //         }, 3000)
      //         this.$refs.form.reset()
      //       }, (error) => {
      //         this.showError = true
      //         this.text = `Someting went wrong ${error.status}`
      //         console.log(error)
      //       })
      //   } else {
      //     this.text = 'Please fill out all rquired fields'
      //     this.snackBarColor = 'warning'
      //     this.showError = true
      //   }
      // },
    },
  }
</script>
<style scoped>
.form {
  width: 500px;
}

@media only screen and (max-width: 375px) {
  .form {
  width: 100%;
}
}
</style>
