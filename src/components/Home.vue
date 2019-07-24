<template>
  <div>
    <h1>Live{{ username }}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {

    }
  },
  components: {

  },
  computed: {
    ...mapState('user', {
      username (state) {
        return state.username
      }
    })
  },
  created () {

  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">

</style>
