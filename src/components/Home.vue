<template>
  <div>
    <h1>Live{{ username }} {{ user }}</h1>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
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
    }),
    ...mapGetters('user', {
      user: 'username'
    })
  },
  created () {
    const data = 'tt'
    this.changeUsername(data)
  },
  mounted () {

  },
  methods: {
    ...mapMutations('user', {
      changeUsername: 'commitUsername'
    })
  }
}
</script>

<style scoped lang="scss">

</style>
