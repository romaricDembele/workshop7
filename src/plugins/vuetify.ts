import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// import { aliases, fa } from 'vuetify/iconsets/fa'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { mdiAccount } from '@mdi/js'


const vuetify = createVuetify({
  components,
  directives,
  icons: {
    aliases: {
      ...aliases,
      account: mdiAccount
    },
    defaultSet: 'mdi',
    sets: {
      mdi
    }
  }
});

export default vuetify;