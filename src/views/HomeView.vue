<template lang="html">
  <div @click="randomTitle">
    <tree-view></tree-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import treeView from '../components/treeView'

export default {
  computed: mapGetters(['msg']),
  methods: mapActions(['randomTitle']),
  components: {
    treeView
  }
}
</script>
