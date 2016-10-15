import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
import otherTreeView from '../components/OtherTreeView'


export default {
  computed: mapGetters([
    'count'
  ]),
  methods: mapActions([
    'increment'
  ]),
  components: {
    otherTreeView
  },
  render(h){
    return (
      <other-tree-view></other-tree-view>
    )
  }
}
