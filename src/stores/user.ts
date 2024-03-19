import { computed, reactive } from 'vue'
import * as Request from '@/requests'

//estado de usuario - aquí se guardará si está loggeado
const state = reactive({
  name: '',
  username: '',

  error: ''
})

// obtén usuario activo del estado
const getters = reactive({
  isLoggedIn: computed(() => state.username !== '')
})

// obtén al usuario activo del storage
const actions = {
  async getUser() {
    const user = await Request.getUser()
    if (user == null) return

    state.name = user.name
    state.username = user.username
  },

  // loggea al usuario, guarda JWT en storage
  async login(username: string, password: string) {
    const user = await Request.login(username, password)
    if (user == null) {
      state.error = 'Could not find user.'
      return false
    }

	//actualiza estado
	state.name = user.name
    state.username = username
    state.error = ''

    return true
  },

  // ejecuta logout, destruye JWT del storage
  async logout() {
    state.name = ''
    state.username = ''
  }
}

export default { state, getters, ...actions }
