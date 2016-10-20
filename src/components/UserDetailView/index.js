import Vue from "vue"

export default {
  render(h) {
    return (
      <img on-click={() => {history.back()}} src="/dist/assets/S61019-224406(1).jpg" style={{width: '100vw', height: '100vh'}}></img>
    )
  }
}
