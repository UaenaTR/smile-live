<template>
  <div class="chat">
      <div class="message">{{ backMessage }}</div>
      <input type="text" class="message-ipt" v-model="msg">
      <span @click="sendMessage">发送</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '',
      backMessage: ''
    }
  },
  components: {

  },
  created () {

  },
  mounted () {

  },
  sockets: {
    connect () {
      console.log('connection')
    },
    backMsg (data) {
      this.backMessage = data
    }
  },
  methods: {
    sendMessage () {
      const spanMsg = `<span>{{ backMessage }}</span> `
      console.log(spanMsg)
      console.log(this.msg)
      this.$socket.emit('emitMsg', this.msg)
      this.msg = ''
    }
  }
}
</script>

<style scoped lang="scss">
    .chat{
        .message{
            width: 80%;
            height: 200px;
            background-color:cornflowerblue;
        }
        .message-ipt{
            width: 50%;
            margin-top: 20px;
        }
    }
</style>
