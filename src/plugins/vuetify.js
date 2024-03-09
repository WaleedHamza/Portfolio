import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        // primary: '#edf6f9',
        // secondary: '#457b9d',
        // accent: '#D8EBF1',
        // info: '#5B5C79',
        // bright: '#a8dadc',
      },
      dark: {
        // primary: '#0D1B2A',
        // secondary: '#1B263B',
        // accent: '#415A77',
        // info: '#778DA9',
        // bright: '#E0E1DD',
      },
    },
  },
})
