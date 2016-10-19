import Vue from 'vue'
import './style.scss'

// let arr = [
//   {name: 'Ivan', info: '已获得礼物5件', current: '291g', img: 'https://avatars3.githubusercontent.com/u/439365?v=3&s=40'},
//   {name: 'Ivan', info: '已获得礼物4件', current: '291g', img: 'https://avatars3.githubusercontent.com/u/439365?v=3&s=40'},
//   {name: 'Ivan', info: '已获得礼物3件', current: '291g', img: 'https://avatars3.githubusercontent.com/u/439365?v=3&s=40'},
//   {name: 'Ivan', info: '已获得礼物2件', current: '291g', img: 'https://avatars3.githubusercontent.com/u/439365?v=3&s=40'},
//
// ]

export default {

  name: 'list-view',
  data: () => {
    return {
      arr: [
        {name: '吖哈呦', info: '已获得礼物5件', current: '291g', img: 'http://wx.qlogo.cn/mmopen/NoFChqEQomEwVrTnbzjWJev6OnB9B5BcianDQENWUVyhRCicKUHHgJdQm05Ciaib1LnNXFElVAFCUsf320VLMD0iaWg/96'},
        {name: 'Ivan', info: '已获得礼物4件', current: '191g', img: 'http://wx.qlogo.cn/mmopen/8r3iaExbN2uaNsC5cuNicDstfwWhJplufYPtQHfrMgZuFd2VNsEt2pHGunWTTicE4Y5ZwKVz1AWOXrQTwUgQWKANSI4JicOe6xfA/96'},
        {name: '凳子', info: '已获得礼物3件', current: '91g', img: 'http://wx.qlogo.cn/mmopen/PiajxSqBRaEKYwS3utpUHeyfibWY1dvlYXTOSFwVR9CPT79kibr2EPszuWH1DkyMiaAcp7aZQEvhvIuedEfjN4vDxQ/96'},
        {name: '李晓玲', info: '已获得礼物2件', current: '29g', img: 'http://wx.qlogo.cn/mmopen/8r3iaExbN2uavjfZcO3APgQBpWQmpibybvCQgrnLE4m662F1SlYtwMSonqDBzk1edcGglYiazKMia4m6pIiaThrA2ibgicoXuB2I92w/96'},

      ]

    }
  },
  render(h) {

    var list = this.arr.map((value, index) => {
      return (
        <li class='list-item'>
          <router-link to="/user">
            <img src={value.img}/>
            <span class="username">{value.name}</span>
            <span class="userinfo">{value.info}</span>
            <span class="current">{value.current}</span>
          </router-link>
        </li>
      )
    })
    return (
      <ul class="list-view">
        { list }
      </ul>
    )
  }
}
