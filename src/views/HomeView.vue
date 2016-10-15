<template lang="html">
  <div>
    <tree-view></tree-view>
    <list-view></list-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import treeView from '../components/TreeView'
import ListView from '../components/ListView'

export default {
  computed: mapGetters(['msg']),
  methods: mapActions(['randomTitle']),
  components: {
    treeView,
    listView
  }
}
</script>
