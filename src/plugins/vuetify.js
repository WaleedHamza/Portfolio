import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#edf6f9',
        secondary: '#457b9d',
        accent: '#D8EBF1',
        info: '#5B5C79',
        bright: '#a8dadc',
      },
    },
  },
})
