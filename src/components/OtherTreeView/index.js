import Vue from 'vue'
import './style.scss'

var bubbles = [
  1,2,3,4,5,6
];

var fruits = [
  1,2,4,5,4
]

export default {
  name: "other-tree-view",
  methods: {
    handleBubbles: (e) => {
      console.log(e);
      e.target.remove();
    },
    handleFruits: (e) => {
      e.target.parentElement.remove()
    }
  },
  render(h) {
    var bubblesList = bubbles.map((value) => {
      var bottom = ~~(Math.random() * (window.innerHeight - 200)) + 100 + 'px'
      var left = ~~(Math.random() * (window.innerWidth - 100)) + 50 + 'px'
      return (
        <i class="bubble fa fa-circle-thin" style={{bottom: bottom, left: left}} on-click={this.handleBubbles}></i>
      )
    })

    var fruitList = fruits.map((value) => {
      var bottom = ~~(Math.random() * 100 ) + 100 + 'px'
      var left = ~~(Math.random() * 100) + 100 + 'px'
      return (
        <i class="fa fa-apple" style={{bottom: bottom, left: left}} on-click={this.handleFruits}></i>
      )
    })

    return (
      <div class="other-tree-view">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv8s5M31tFNvbjtGgxqmx14eh2h2651gkbrx-kN0cNYPD0qvRi"/>
        <i class="tree fa fa-tree"></i>
        { bubblesList }
        { fruitList.length > 0
          ? <div>{ fruitList }</div>
          : '' }
      </div>
    )
  }
}
