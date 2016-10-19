<template lang="html">
  <div>
    <!-- <tree-view></tree-view> -->
    <other-tree-view :treeHeight="400"></other-tree-view>
    <list-view></list-view>
    <more-view></more-view>
    
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// import treeView from '../components/TreeView'
import otherTreeView from '../components/OtherTreeView'
import listView from '../components/ListView'
import moreView from '../components/moreView'

export default {
  computed: mapGetters(['msg']),
  methods: mapActions(['randomTitle']),
  components: {
    // treeView,
    otherTreeView,
    listView,
    moreView
  }
}
</script>
