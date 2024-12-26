// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#ffffff', //light 보류
          surface: '#f5f5f5',
          primary: '#1976D2',
          secondary: '#FF5722',
          tertiary: '#FF5722',
        },
      },
      dark: {
        dark: true,
        colors: {
          background: '#121212',
          surface: '#212121',
          primary: '#313131',
          secondary: '#616161',
          tertiary: '#757575',
        },
      },
    },
  },
});