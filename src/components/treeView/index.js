import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import drawBack from './background'
import drawBubble from './bubble'
// import image from '../../assets/back.jpeg'

export default {
  name: 'tree-view',
  props: {

  },
  mounted() {
    var container = document.getElementById("treeView");
    console.log(container);
    var context=container.getContext("2d");
    container.width = window.innerWidth;
    var backImg = drawBack(container, context)

    // drawBubble(container, context, backImg, {
		// 	type : 'radial',
		// 	revolve : 'center',
		// 	minSpeed : 100,
		// 	maxSpeed : 500,
		// 	minSize : 50,
		// 	maxSize : 50,
		// 	num : 100,
		// 	colors : new Array('#FF0000','#FFFFFF','#BBBBBB')
		// })
  },
  render(h) {
    return (
      <canvas id="treeView"></canvas>
    )
  }
}
