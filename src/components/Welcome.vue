<template>
  <section
    id="welcome"
  >
    <div
      class="d-flex"
      style=" height: 100vh;"
    >
      <div
        class="fcc"
        style="flex: 1;"
      >
        <div
          class="px-sm-8 mx-xs-5 overflow-scroll"
          style="width: 80%;"
        >
          <base-heading
            class="text-sm-center text-md-left"
          >
            Full Stack Developer
          </base-heading>

          <base-subheading
            class="text-sm-center text-md-left"
          >
            Resolving design problems, building smart user interfaces and useful interactions, developing rich web applications and seamless web experiences.
          </base-subheading>
          <!-- <base-heading
              class="text-sm-center text-md-left"
            >
              Waleed Hamza
            </base-heading>

            <p>
              I am a solution focused developer eager to tackle challenging issues
              and provide innovative solutions. My strengths are persistence,
              personal integrity and a positive attitude. I’m a resourceful,
              life-long learner, who enjoys collaborating across multidisciplinary
              teams, but also can work independently. I am a human-centered developer improving the human condition one digital product at a time.
              As a user-centered developer, my goal is to improve the human condition by
              connecting users one digital product at a time. I strive to create user-friendly
              and intuitive products that meet the needs of the people who use them. I am
              committed to staying up-to-date with the latest technologies and industry trends
              to ensure that the solutions I provide are cutting-edge and effective.
              <br>
              <br>
              I am a solution-focused developer with a passion for tackling challenging
              issues and providing innovative solutions. I believe that my persistence,
              personal integrity, and positive attitude are my greatest strengths as a developer.
              I am a resourceful, life-long learner, who enjoys collaborating across
              multidisciplinary teams, but also can work independently.
              <br>
              <br>
              I am excited to share my portfolio and experience with you on this website.
              Please take a look around and feel free to contact me with any questions or
              opportunities. I am always eager to connect with other like-minded developers
              and professionals in the industry. Let's build something great together!
            </p> -->
        </div>
      </div>
      <div
        style="flex: 1; width: 100%;"
        class="fcc"
      >
        <div
          class="image-stack fcc"
        >
          <v-img
            :src="require('@/assets/Dots.svg')"
            cover
            alt="Dots"
            class="heroImg"
          />
        </div>
        <v-img
          :src="require('@/assets/Hero.svg')"
          contain
          alt="Desktop Mobile Tablet"
          class="heroImg"
          style="width: 30%;"
        />
      </div>
    </div>
    <v-img
      :src="require('@/assets/CodeBlockblur.svg')"
      contain
      alt="CodeBlockblur"
      class=""
      style="width: 30%; overflow: hidden; top: -200px; left: -200px;"
    />
  </section>
</template>

<script>
  export default {
    name: 'Welcome',
    components: {
    },
    data: () => ({
      replace: [
        { from: 'Web Developer', to: 'UX/UI Designer' },
        { from: 'UX/UI Designer', to: 'Full Satck Developer.' },
      ],
    }),
  }
</script>
<style scoped>
#welcome {
  height: 100vh;
  background: #0F2027;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left,  #1E1E1E, #1E1E1E, #121313);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #1E1E1E, #1E1E1E, #121313); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
.image-stack {
  position: relative;
  width: 100%;
}
.heroImg {
  position: absolute;
}
</style>
