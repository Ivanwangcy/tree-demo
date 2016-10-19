import Vue from 'vue'
import * as api from '../../store/api'
import './style.scss'
import { mapActions } from 'vuex'

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
      // currentGrow: 40,
      // totalGrow: 100,
      // level: 0,
      user: 'USER_1',
      bubbles: [
        {value: 52},{value: 53},{value: 54},{value: 55},{value: 56}
        // ,{value: 10},{value: 10},{value: 10},{value: 10},{value: 10}
      ],
      fruits: []
    }
  },
  created() {
    // debugger
    var path = this.$router.history.current.fullPath.split("/");
    // path[path.length - 1]
    // console.log(this.$router.history.current.fullPath.split("/"));
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
    // console.log(path[path.length - 1]);
        api.getTree(this.$http, {userPin: path[path.length - 1]}).then((result) => {
          result.data = result.data || {}
          // this.bubbles = result.data;
          // this.currentGrow = result.data.currentWater;
          // this.totalGrow = result.data.totalWater;
          // this.totalGrow = result.data.totalWater;
          console.log('getTreeresult', result);
        }, (err) => {
          // context.error = err
          // this.currentGrow = 40;
          // this.totalGrow = 100;
          console.log('err', err);
        })

        api.getUnusedWater(this.$http, {userPin: path[path.length - 1]}).then((result) => {
          result.data = result.data || {}
          // this.bubbles = result.data;
          console.log('getUnusedWaterresult', result);
        }, (err) => {
          // context.error = err
          // this.bubbles = [{value: 10},{value: 10},{value: 10},{value: 10},{value: 10},{value: 10}]
          console.log('err', err);
        })
  },
  methods: {
    ...mapActions([
      'upgradeLevel',
    ]),
    handleBubbles: (e, context, data) => { // context 等于 当前组件对象，this 不是指向当前组件
      console.log(context.$store.state.level);

      if(context.own){
        // context.currentGrow += data.value;
          context.upgradeLevel(data.value);
          // if(context.$store.state.currentGrow + data.value >= context.$store.state.totalGrow){
          if(context.$store.state.level == 1){
            context.fruits = [
              {img: '/dist/assets/potato.png'},
              {img: '/dist/assets/orange.jpg'},
              {img: '/dist/assets/strawberry.png'},
              {img: 'https://img30.360buyimg.com/n2//jfs/t2896/234/3158514867/254973/6157dd04/5780a576N0237d88f.jpg'}
              // {img: 'https://img30.360buyimg.com/n2//jfs/t2023/338/1666674734/65749/4ed7a19d/566ac71cN579c33a8.jpg'},
              // {img: 'https://img30.360buyimg.com/n2//jfs/t2023/338/1666674734/65749/4ed7a19d/566ac71cN579c33a8.jpg'}
            ];
          }else if(context.$store.state.level == 2){
            context.fruits = [
              // {img: '/dist/assets/potato.png'},
              // {img: 'https://img30.360buyimg.com/n2//jfs/t2896/234/3158514867/254973/6157dd04/5780a576N0237d88f.jpg'},
              {img: '/dist/assets/iphone.jpg', width: 200, height: 100}
              // {img: 'https://img30.360buyimg.com/n2//jfs/t2023/338/1666674734/65749/4ed7a19d/566ac71cN579c33a8.jpg'}
              // {img: 'https://img30.360buyimg.com/n2//jfs/t2023/338/1666674734/65749/4ed7a19d/566ac71cN579c33a8.jpg'},
              // {img: 'https://img30.360buyimg.com/n2//jfs/t2023/338/1666674734/65749/4ed7a19d/566ac71cN579c33a8.jpg'}
            ];
          }else{
            context.fruits = []
          }
          // 获取礼物列表
          // api.getAwardsByCredits(context.$http, {}).then((result) => {
          //   result.data = result.data || {};
          //   console.log('wateringresult', result.data);
          // }, (err) => {
          //   console.log('wateringerr', err);
          // })
        // } else {
        //   // context.fruits = [];
        // }


        // 浇水
        api.watering(context.$http, {waterId: data.id}).then((result) => {
          result.data = result.data || {};
          console.log('wateringresult', result.data);
        }, (err) => {
          console.log('wateringerr', err);
        })
      }else{
        // 偷水
        api.stealWater(context.$http, {waterId: data.id}).then((result) => {
          result.data = result.data || {};
          console.log('wateringresult', result.data);
        }, (err) => {
          console.log('wateringerr', err);
        })
      }

      e.currentTarget.remove();

    },
    handleFruits: (e, context) => {
      context.currentGrow = 0;
      // e.target.parentElement.remove()
      e.currentTarget.remove()
      alert("恭喜获得了神秘礼物！！")
    }
  },
  render(h) {
    console.log(this.treeHeight, this.own);
    console.log(this.bubbles);
    var bubblesList = this.bubbles.map((value) => {
      var bottom = ~~(Math.random() * (this.treeHeight - 250)) + 250 + 'px'
      var left = ~~(Math.random() * (window.innerWidth - 100)) + 50 + 'px'

      // class="bubble fa fa-circle-thin"
        // <i class="bubble fa fa-circle"
        //   style={{bottom: bottom, left: left}}
        //   on-click={(event) => this.handleBubbles(event, this, value)}
        // ></i>
        // <img class="bubble" src="/dist/assets/water.jpg"
        //   style={{bottom: bottom, left: left}}
        //   on-click={(event) => this.handleBubbles(event, this, value)}
        //   />
      return (

        <div class="bubble-container"
          style={{bottom: bottom, left: left}}
          on-click={(event) => this.handleBubbles(event, this, value)}>
          {/* <i class="bubble fa fa-circle"
          ></i> */}
          <img class="water" src="/dist/assets/water.png" />
          <span class="bubble-val">{value.value}g</span>
        </div>


      )
    })

    var fruitList = []
    if(this.own){
      var fruitList = this.fruits.map((value, index) => {
        var bottom = 130 + 'px'
        var left = 80 + index * 40 + 'px'
        // <i class="fa fa-apple"
        //   style={{bottom: bottom, left: left}}
        //   on-click={(event) => this.handleFruits(event, this)}
        // ></i>
        return (
          <img class="apple" src={value.img}
            style={{bottom: bottom, left: left, width: value.width + 'px', height: value.height + 'px'}}
            on-click={(event) => this.handleFruits(event, this)}
          />
        )
      })
    }


    // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv8s5M31tFNvbjtGgxqmx14eh2h2651gkbrx-kN0cNYPD0qvRi"/>
    return (
      <div class="other-tree-view">
        <img style={{height: this.treeHeight+'px'}} src="/dist/assets/b274e5e6-3cab-44a8-bcbe-3bcd33069d19(1).png"/>
        {/* <i class="tree fa fa-tree"></i> */}
        { bubblesList }
        { fruitList.length > 0
          ? <div>{ fruitList }</div>
          : ''
        }

        {/* { this.own ?*/}
           <router-link class="grow-info" to="/detail">
              <span
              style={{width: this.$store.state.currentGrow/this.$store.state.totalGrow * 100 + 'px'}}
              class="current-grow"></span>
              <span>{ this.$store.state.currentGrow + 'g/' + this.$store.state.totalGrow +'g'}</span>
            </router-link>
          {/* : '' }*/}
        {
          !this.own ? <button on-click={() => {history.back()}}>回到我的家园</button> : ""
        }
      </div>
    )
  }
}
