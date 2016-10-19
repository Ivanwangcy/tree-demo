export const increment = ({ commit }) => commit('increment')
export const randomTitle = ({ commit }) => commit('randomTitle')

export const upgradeLevel = ({ commit }, value) => {
  console.log(commit, value);
  commit('upgradeLevel', value)
};
