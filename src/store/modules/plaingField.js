export default {
  actions: {
    async startsGame(ctx) {
      ctx.state.isGame = true
      ctx.state.timeDelay = 1000
      ctx.state.success = ''
      let arr = ctx.state.currentField
      let timeDelay = ctx.state.timeDelay
      let isDifficult = ctx.state.isDifficult
      let nextItemId

      let gameInProcess = await setTimeout(async function cycle() {
        if (nextItemId !== undefined) {
          if (arr[nextItemId].color === 'orange') {
            timeDelay = isDifficult ? timeDelay + 50 : timeDelay
            timeDelay = timeDelay > 1000 ? 1000 : timeDelay

            arr[nextItemId].color = 'red'
          }
          if (arr[nextItemId].color === 'green') {
            timeDelay = isDifficult ? timeDelay - 50 : 1000
          }
        }
        ctx.state.timeDelay = timeDelay

        const arrayWithGrayElements = arr.filter((it) => it.color === 'gray')

        if (arrayWithGrayElements.length < arr.length / 2 + 1) {
          const cuantityGreen = ctx.state.currentField.filter((it) => it.color === 'green').length
          console.log('cuantityGreen', cuantityGreen);

          const cuantityRed = ctx.state.currentField.filter((it) => it.color === 'red').length
          console.log('cuantityRed', cuantityRed);

          if (cuantityGreen > cuantityRed) {
            ctx.state.success = 'Success!!! Greens are more red.'
          }
          if (cuantityGreen === cuantityRed) {
            ctx.state.success = 'Draw. Green and red equally.'
          }
          if (cuantityGreen < cuantityRed) {
            ctx.state.success = 'No success :( More reds...'
          }
          clearTimeout(gameInProcess)
          return null
        }

        nextItemId = arrayWithGrayElements[Math.floor(Math.random() * arrayWithGrayElements.length)].id
        arr[nextItemId].color = 'orange'
        gameInProcess = await setTimeout(cycle, timeDelay)
      }, timeDelay)
    },
  },
  mutations: {
    createCurrentField(state, newField) {
      state.currentField = newField
    },
    changeIsDifficult(state) {
      state.isDifficult = !state.isDifficult
    },
    setHeightScreen(state) {
      state.heightScreen = document.documentElement.clientHeight
    },
    setWithScreen(state) {
      state.withScreen = document.documentElement.clientWidth
    },
    setX(state, event) {
      if (isNaN(event.target.value) === false) {
        state.x = event.target.value
        const minX = (state.withScreen) / state.x
        const minY = (5 / 6 * state.heightScreen) / state.y
        state.sizeMinElement = Math.floor(Math.min(minY, minX))
      }
    },
    setY(state, event) {
      if (isNaN(event.target.value) === false) {
        state.y = event.target.value
        const minX = (state.withScreen) / state.x
        const minY = (5 / 6 * state.heightScreen) / state.y
        state.sizeMinElement = Math.floor(Math.min(minY, minX))
      }
    },
  },
  state: {
    isGame: false,
    isDifficult: false,
    isSuccessOnLastClick: '',
    timeDelay: 1000,
    success: '',
    heightScreen: 0,
    withScreen: 0,
    x: '',
    y: '',
    sizeMinElement: 0,
    currentField: [],
  },
  getters: {
    getTimeDelay(state) {
      return state.timeDelay
    },
    getSuccess(state) {
      return state.success
    },
    isGame(state) {
      return state.isGame
    },
    isDifficult(state) {
      return state.isDifficult
    },
    heightScreen(state) {
      return state.heightScreen
    },
    withScreen(state) {
      return state.withScreen
    },
    getX(state) {
      return state.x
    },
    getY(state) {
      return state.y
    },
    sizeMinElement(state) {
      return state.sizeMinElement
    },
    getCurrentField(state) {
      return state.currentField
    },
  }
}