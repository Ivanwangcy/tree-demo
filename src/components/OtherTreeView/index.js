import Vue from 'vue'
import './style.scss'

export default {
  name: "other-tree-view",
  props: {
    treeHeight: {
      default: window.innerHeight,
      type: Number
    },
    own: {
      default: true,
      type: Boolean
    }
  },
  data: () => {
    return {
      currentGrow: 40,
      totalGrow: 100,
      bubbles: [
      10,10,10,10,10,10
      ],
      fruits: []
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
    // this.$http.get('/growUp/stealWater?srcUserPin=USER_1&stolenUserPin=USER_2&waterId=2') // 偷水
    //     .then((result) => {
    //       // this.quote = result.data
    //       console.log('result', result);
    //     }, (err) => {
    //       // context.error = err
    //       console.log('err', err);
    //     })
  },
  methods: {
    handleBubbles: (e, context, data) => { // context 等于 当前组件对象，this 不是指向当前组件
      console.log(e, data, context.currentGrow);

      context.currentGrow += data;
      if(context.currentGrow == context.totalGrow){
        context.fruits = [1,2,3,4,5];
      }
      e.target.remove();

    },
    handleFruits: (e, context) => {
      context.currentGrow = 0;
      e.target.parentElement.remove()
    }
  },
  render(h) {
    console.log(this.treeHeight, this.own);
    var bubblesList = this.bubbles.map((value) => {
      var bottom = ~~(Math.random() * (this.treeHeight - 200)) + 150 + 'px'
      var left = ~~(Math.random() * (window.innerWidth - 100)) + 50 + 'px'
      return (
        <i class="bubble fa fa-circle-thin"
          style={{bottom: bottom, left: left}}
          on-click={(event) => this.handleBubbles(event, this, value)}
        ></i>
      )
    })

    var fruitList = []
    if(this.own){
      var fruitList = this.fruits.map((value) => {
        var bottom = ~~(Math.random() * 100 ) + 100 + 'px'
        var left = ~~(Math.random() * 100) + 100 + 'px'
        return (
          <i class="fa fa-apple"
            style={{bottom: bottom, left: left}}
            on-click={(event) => this.handleFruits(event, this)}
          ></i>
        )
      })
    }


    return (
      <div class="other-tree-view">
        <img style={{height: this.treeHeight+'px'}}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv8s5M31tFNvbjtGgxqmx14eh2h2651gkbrx-kN0cNYPD0qvRi"/>
        <i class="tree fa fa-tree"></i>
        { bubblesList }
        { fruitList.length > 0
          ? <div>{ fruitList }</div>
          : ''
        }

        { this.own
          ? <label class="grow-info">
              <span
              style={{width: this.currentGrow + 'px'}}
              class="current-grow"></span>
              <span>{ this.currentGrow + '/' + this.totalGrow }</span>
            </label>
          : ''
        }
      </div>
    )
  }
}
