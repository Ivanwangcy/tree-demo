export const increment = (state) => {
  state.count++;
}

let titles = [
  "Welcome to your Vue.js app!",
  "Hello Vue 2.0! ",
  "Hello World! ",
  "Hi JavaScript! ",
  "Hi HTML5! "
]
export const randomTitle = (state) => {
  let index = ~~(Math.random() * titles.length)
  state.msg = titles[index]
}

export const upgradeLevel = (state, value) => {
  console.log(state);
  state.level += .1;
  state.currentGrow += value;
  if(state.currentGrow >= state.totalGrow) {
    state.level = ~~(state.level + 1);
    state.totalGrow += 100
  }
}
