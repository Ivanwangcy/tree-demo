import Vue from 'vue'
import './style.scss'

export default {
  name: "other-tree-view",
  props: {
    treeHeight: {
      default: window.innerHeight,
      type: Number
    }
  },
  data: () => {
    return {
      bubbles: [
      1,2,3,4,5,6
      ],
      fruits: [
        1,2,4,5,4
      ]
    }
  },
  created() {
    // console.log(this.$http);
    // this.$http.get('/user/getTree?userPin=USER_1') // 树信息
    // this.$http.get('/user/getUnusedWater?userPin=USER_1') // 获取用户未使用的水
    // this.$http.get('/user/getTreeGrowValue?userPin=USER_1') // 获取该树已经浇水的量
    // this.$http.get('/user/getAwardsByCredits?credit=3') // 获取该树积分对应的礼品列表
    // this.$http.get('/user/getFriendsInfo?userPin=USER_1') // 获取个人基本信息
    // this.$http.get('/user/getStealWaterInfo?userPin=USER_1') // 用户偷水详情
    // this.$http.get('/growUp/watering?userPin=USER_1&waterId=1')  // 点击水珠，浇水
    // this.$http.get('/growUp/creditsConvertGoods?userPin=USER_1&fruitId=2') // 兑换礼物
    this.$http.get('/growUp/stealWater?srcUserPin=USER_1&stolenUserPin=USER_2&waterId=2') // 偷水
        .then((result) => {
          // this.quote = result.data
          console.log('result', result);
        }, (err) => {
          // context.error = err
          console.log('err', err);
        })
  },
  methods: {
    handleBubbles: (e) => {
      console.log(e);
      console.log(Promise);
      // var pro = new Promise();
      e.target.remove();
    },
    handleFruits: (e) => {
      e.target.parentElement.remove()
    }
  },
  render(h) {
    console.log(this.treeHeight);
    var bubblesList = this.bubbles.map((value) => {
      var bottom = ~~(Math.random() * (this.treeHeight - 200)) + 150 + 'px'
      var left = ~~(Math.random() * (window.innerWidth - 100)) + 50 + 'px'
      return (
        <i class="bubble fa fa-circle-thin" style={{bottom: bottom, left: left}} on-click={this.handleBubbles}></i>
      )
    })

    var fruitList = this.fruits.map((value) => {
      var bottom = ~~(Math.random() * 100 ) + 100 + 'px'
      var left = ~~(Math.random() * 100) + 100 + 'px'
      return (
        <i class="fa fa-apple" style={{bottom: bottom, left: left}} on-click={this.handleFruits}></i>
      )
    })

    return (
      <div class="other-tree-view">
        <img style={{height: this.treeHeight+'px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv8s5M31tFNvbjtGgxqmx14eh2h2651gkbrx-kN0cNYPD0qvRi"/>
        <i class="tree fa fa-tree"></i>
        { bubblesList }
        { fruitList.length > 0
          ? <div>{ fruitList }</div>
          : '' }
      </div>
    )
  }
}
