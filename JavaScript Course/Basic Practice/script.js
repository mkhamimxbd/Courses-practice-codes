// const game = {
//   start: function start() {
//     console.log('Start playing!')
//   },

//   run: function run() {
//     console.log('Running')
//   },

//   stop: function stop() {
//     console.log('Stop playing.')
//   }
// }

// game.start()
// game.run()
// game.stop()

const game = {
  start() {
    console.log('Start playing!')
  },

  run() {
    console.log('Running')
  },

  stop() {
    console.log('Stop playing.')
  },

  quit() {
    console.log('Quitting the game...');
  }
}

game.start()
game.run()
game.stop()
game.quit()