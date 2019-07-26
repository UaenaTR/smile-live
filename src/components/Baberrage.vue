<template>
  <div class="baberrage-stage" v-show="isShow" ref="stage">
    <div class="baberrage-top">
      <div v-for="item in topQueue" v-bind:style="item.style" v-bind:key="item.id" class="baberrage-item" v-bind:class="item.barrageStyle">
        <div class="baberrage-avatar"><img :src="item.avatar"></div>
        <div class="baberrage-msg">{{ item.msg }}</div>
      </div>
    </div>
    <!-- <div v-for="item in barrageList" v-bind:style="item.style" v-bind:key="item.id"  class="baberrage-item" v-bind:class="item.barrageStyle">
      <div class="baberrage-avatar"><img :src="item.avatar"></div>
      <div class="baberrage-msg">{{ item.msg }}</div>
    </div>
    <div class="baberrage-bottom">
      <div v-for="item in bottomQueue" v-bind:key="item.id" v-bind:style="item.style" class="baberrage-item" v-bind:class="item.barrageStyle">
        <div class="baberrage-avatar"><img :src="item.avatar"></div>
        <div class="baberrage-msg">{{ item.msg }}</div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      topQueue: []
    }
  },
  components: {

  },
  created () {

  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>
