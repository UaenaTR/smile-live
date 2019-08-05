<template>
  <div>
    <vue-baberrage
      :isShow= "barrageIsShow"
      :barrageList = "barrageList"
      :loop = "barrageLoop"
      >
    </vue-baberrage>
    <div><span @click='send' style="position:absolute;top:70%">发送</span></div>
  </div>
</template>

<script>
import { MESSAGE_TYPE } from 'vue-baberrage'
export default {
  data () {
    return {
      msg: '哈哈',
      currentId: 0,
      barrageIsShow: true,
      barrageList: [],
      barrageLoop: false,
      boxWidth: null,
      boxHeight: null,
      time: null
    }
  },
  components: {

  },
  watch: {

  },
  created () {
    // this.remove()
  },
  mounted () {

  },
  methods: {
    send () {
      console.log(1)
      this.barrageList.push({
        id: ++this.currentId,
        avatar: '../assets/logo.png',
        msg: this.msg,
        time: 5,
        type: MESSAGE_TYPE.NORMAL
      })
      console.log(2)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
