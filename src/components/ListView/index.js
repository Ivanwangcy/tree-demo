import Vue from 'vue'
import './style.scss'

let arr = [
  {name: 'Ivan', info: '已获得礼物5件', current: '291g', img: 'https://avatars3.githubusercontent.com/u/439365?v=3&s=40'},
  {name: 'Ivan', info: '已获得礼物4件', current: '291g', img: 'https://avatars3.githubusercontent.com/u/439365?v=3&s=40'},
  {name: 'Ivan', info: '已获得礼物3件', current: '291g', img: 'https://avatars3.githubusercontent.com/u/439365?v=3&s=40'},
  {name: 'Ivan', info: '已获得礼物2件', current: '291g', img: 'https://avatars3.githubusercontent.com/u/439365?v=3&s=40'},

]

export default {

  name: 'list-view',
  render(h) {

    var list = arr.map((value, index) => {
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
