import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import drawBack from './background'

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
    drawBack(container, context)

    drawBubble(container, context, options)
  },
  render(h) {
    return (
      <canvas id="treeView"></canvas>
    )
  }
}
