<template>
  <section
    id="about"
    class="overflow-hidden"
    style="height: 100vh; position: relative;"
  >
    <v-img
      :src="require('@/assets/HeatwaveCone.svg')"
      contain
      alt="Heatwave Cube"
      class="mt-10"
      style="width: 100px; height: 100px; position: absolute;top: 20px; left: 50%;"
    />
    <v-container
      class="d-flex align-center justify space-between"
      style="height: 100vh; width: 70%;"
    >
      <div
        style="flex: 1;"
      >
        <base-subheading
          class="text-sm-center text-md-left"
        >
          Hi, welcome to my website!
        </base-subheading>
        <base-heading
          class="text-sm-center text-md-left"
        >
          Waleed Hamza
        </base-heading>
        <base-subheading
          class="text-sm-center text-md-left"
        >
          Web Developer / I love Javascript / Vue.js Fan
        </base-subheading>
      </div>
      <div
        style="flex: 2;"
      >
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
        </p>
      </div>

      <black-cube
        style="position:absolute; top: 70%; left: 30%; height: 250px;"
      />
    <!-- <v-sheet
      class="mx-auto"
      width="98%"
    >
      <v-tabs
        active-class="activeTab"
        fixed-tabs
        hide-slider
      >
        <v-tab
          href="#Experience"
        >
          Experience
        </v-tab>
        <v-tab
          href="#Skills"
        >
          Skills
        </v-tab>
        <v-tab
          href="#Portfolio"
        >
          Portfolio
        </v-tab>
        <v-tabs-slider />
        <v-tab-item
          id="Experience"
        >
          <v-container
            fluid
            class="fcc"
          >
            <div
              id="companies"
              class="d-flex align-center insetShadow appScrollBar pa-5"
              style="width: 80%; height: 480px; overflow-x:auto; white-space:normal;"
            >
              <div
                ref="companies"
                class="d-flex align-center pr-10"
                style="width: 75%;"
              >
                <v-card
                  v-for="c in companies"
                  :key="c.name"
                  style="height: auto; position: relative;"
                  class="mx-2 shadow"
                  max-width="344"
                >
                  <v-img
                    :src="c.background"
                    height="120px"
                  />
                  <v-avatar
                    size="100"
                    color="white"
                    style="position:absolute; top: 70px; right: 25px;"
                    class="shadow"
                  >
                    <img
                      :src="c.logo"
                      alt="John"
                    >
                  </v-avatar>
                  <v-card-title class="textShadow">
                    {{ c.name }}
                  </v-card-title>
                  <v-card-subtitle class="textShadow">
                    {{ c.title }}  {{ c.years }}
                  </v-card-subtitle>

                  <div
                    style="height:200px; overflow: scroll"
                    class="noScrollBar"
                  >
                    <v-divider />

                    <div
                      v-for="(i, index) in c.about"
                      :key="index"
                    >
                      <v-card-text class="textShadow">
                        {{ i }}
                      </v-card-text>
                    </div>
                  </div>
                </v-card>
              </div>
            </div>
          </v-container>
        </v-tab-item>
        <v-tab-item
          id="Skills"
        >
          <v-container
            fluid
            class="fcc"
          >
            <div
              class="d-flex align-md-center pa-5 insetShadow noScrollBar overflow-x-auto"
              style="width: 80%; height: 480px; white-space:normal;"
            >
              <v-row
                no-gutters
                style="width: 80%;"
              >
                <v-col
                  v-for="(skill, index) in skills"
                  :key="index"
                  sm="12"
                  md="4"
                >
                  <div
                    v-for="(item, index) in skill"
                    :key="index"
                    class="ma-3"
                  >
                    <v-card
                      width="100%"
                      class="mx-auto shadow textShadow d-flex flex-column"
                    >
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title>
                            {{ item.name }}
                          </v-list-item-title>
                          <div class="d-flex align-center my-3">
                            <v-progress-linear
                              class="shadow mr-5"
                              :value="item.value"
                              duration="2000"
                              style="border-radius: 10px"
                            />
                            {{ item.value }}
                          </div>
                        </v-list-item-content>
                      </v-list-item>
                    </v-card>
                  </div>
                </v-col>
                <v-col md="4" />
                <v-col md="4" />
              </v-row>
            </div>
          </v-container>
        </v-tab-item>
        <v-tab-item
          id="Portfolio"
        >
          <v-container
            fluid
            class="fcc"
          >
            <recent-projects
              class="d-flex align-center insetShadow appScrollBar pa-5"
              style="width: 80%; height: 480px; overflow-x:auto; white-space:normal;"
            />
            <div
                ref="education"
              >
                <v-card
                  v-for="e in education"
                  :key="e.name"
                  style="width: 450px; height: auto; position: relative;"
                  class="mx-2 shadow"
                  max-width="344"
                >
                  <v-card-title class="textShadow">
                    {{ e.name }} - {{ e.year }}
                  </v-card-title>
                  <v-card-subtitle class="textShadow">
                    {{ e.discription }}
                  </v-card-subtitle>
                    <v-divider />

                  <div
                    style="height:200px; overflow: scroll"
                    class="fcc noScrollBar"
                  >
                    <div
                      v-for="(i, index) in e.certs"
                      :key="index"
                    >
                      <v-card-text class="textShadow">
                        {{ i }}
                      </v-card-text>
                    </div>
                  </div>
                </v-card>
              </div>
          </v-container>
        </v-tab-item>
      </v-tabs>
    </v-sheet> -->
    </v-container>
    <v-img
      :src="require('@/assets/CodeBlockblur.svg')"
      contain
      alt="Heatwave Cube"
      class="mt-10"
      style="width: 500px; height: 700px; position: absolute;bottom: -200px; right: -150px;"
    />
  </section>
</template>

<script>
  // import RecentProjects from '@/components/RecentProjects.vue'
  export default {
    components: {
      // RecentProjects,
      BlackCube: () => import('@/components/base/BlackCube'),
    },
    data: () => ({
      show: false,
      companiesWidth: 0,
      value: 0,
      skills: [
        [{
           name: 'Javascript',
           value: '90%',
         },
         {
           name: 'HTML/CSS',
           value: '90%',
         },
         {
           name: 'JQuery',
           value: '80%',
         },
         {
           name: 'Bootstrap',
           value: '80%',
         },
        ], [
          {
            name: 'Vue.js',
            value: '90%',
          },
          {
            name: 'Vuetify.js',
            value: '90%',
          },
          {
            name: 'React.js',
            value: '70%',
          }],
        [
          {
            name: 'Node.js',
            value: '80%',
          },
          {
            name: 'MongoDB',
            value: '80%',
          },
          {
            name: 'SQL',
            value: '70%',
          }],
      ],
      companies: [
        {
          name: 'Photofy Inc.',
          title: 'Software Engineer',
          years: '2019 - Present',
          background: require('../assets/photofy.png'),
          logo: require('../assets/photofyLogo.png'),
          about: [
            'Design, build and maintain a client-facing dashboard for clients like Remax, NAR, Norwex, and Arbonne',
            'Consume API’s where data is visualized, tracked, and modified using Vue.js and Vuetify framework.',
            'Build, maintain and troubleshoot proprietary landing pages.',
            'Provide insight on data trending and business analytics.',
            'Test and provide feedback to the international development team for the Photofy app.',
            'Design, develop, document, test and debug software.',
          ],
        },
        {
          name: 'Centerline Digital',
          title: 'Freelance Developer',
          years: '',
          background: require('../assets/cd.png'),
          logo: require('../assets/cdLogo.png'),
          about: [
            'Build web apps utilizing languages and libraries based on client specification',
          ],
        },
        {
          name: 'Duke Univercity',
          title: 'IT Analyst',
          years: '2015 - 2019',
          background: require('../assets/duke.png'),
          logo: require('../assets/dukeLogo.png'),
          about: [`Assigned eight departments to support faculty, staff, and students at Trinity
            College, with software and hardware related issues in a MAC dominate
            environment.`, `
            Ensured a very high level of customer service and educational training regarding
            processes and procedures for academic resources.`,
                  'Image computers MAC/PC using Casper and CM12.',
                  'Deploy pre-imaged iPads with apple configurator2.',
                  `Install and configure FileMaker Pro for users with authenticated access to the
            service.
            `],
        },
        {
          name: 'Medfusion',
          title: 'IT Analyst',
          years: '2013 - 2015',
          background: require('../assets/medfusion.png'),
          logo: require('../assets/medfusionLogo.png'),
          about: [
            'Support local and international remote employees with software & hardwarerelated issues.',
            'Maintain Active Directory Domain Exchange server.', `
            Maintain company assets assignments and update maintenance logs.`,
            'Outstanding customer service skills resolving technical issues and educating end-users',
          ],
        },
        {
          name: 'US Army',
          title: 'Specialist',
          years: '2010 - 2013',
          background: require('../assets/army.png'),
          logo: require('../assets/armyLogo.png'),
          about: [
            `Served as a rifleman, translator, and radio tactical operator during
            Operation Enduring Freedom in Afghanistan.`,
          ],
        },
      ],
      education: [
        {
          name: 'UNC Coding Bootcamp',
          discription: '',
          year: '2018',
          certs: [],
        },
        {
          name: 'My Comuter Career',
          discription: '',
          year: '2015',
          certs: ['MTA Windows OS',
                  'MTA Security',
                  'MTA Network',
                  'CompTIA A+ 220-801'],
        },
        {
          name: 'Baghdad University',
          discription: 'College of Languages, B.A. English',
          year: '2003',
          certs: [],
        },
      ],
    }),
    mounted () {
      setInterval(() => {
        if (this.value < 100) this.value += 1
      }, 100)
    //   window.addEventListener('resize', this.getElementWidth)
    //   this.getElementWidth()
    // },
    // beforeDestroy () {
    //   window.removeEventListener('resize', this.getElementWidth)
    // },
    // methods: {
    //   getElementWidth () {
    //     console.log(this.$refs.companies[0].offsetWidth)
    //     this.companiesWidth = this.$refs.companies[0].offsetWidth
    //   },
    //   onWheel (e) {
    //     this.$refs.companies[0].scrollLeft += e.deltaX
    //   },
    },
    methods: {
      progressBarAnomation (v) {
        setInterval(() => {
          while (this.value < v) this.value += 1
        }, 100)
      },
    },
  }
</script>

<style scoped>
  .overlay {
    width: 100%;
  height: 100%;
  position: absolute;
  }
  .appScrollBar::-webkit-scrollbar {
  height: 10px !important;
  }
  .appScrollBar::-webkit-scrollbar-thumb {
  border-radius: 5px !important;
  /* background-color: rgba(0, 0, 0, 0.1); */
  border: 1px solid #464545;
}
.activeTab {
  text-shadow:   rgba(0, 0, 0, 0.9) 5px 5px 5px;
  /* background-color: rgba(0, 0, 0, 0); */
  color: aliceblue;
  border-radius: 10px 0 0 0;
  box-shadow: 1px 10px 10px #000000 ;
  /* border-top: solid #000000 0.5px ; */
}
</style>
