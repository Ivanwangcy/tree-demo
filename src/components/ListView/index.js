import Vue from 'vue'


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
        <li>
        <img src={value.img}/>
        <span>{value.name}</span>
        <span>{value.info}</span>
        <span>{value.current}</span>
        </li>
      )
    })
    return (
      <ul>
        { list }
      </ul>
    )
  }
}
