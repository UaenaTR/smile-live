<template>
  <div>
      <video id="videoElement" ref="videoDom"></video>
  </div>
</template>

<script>
import flv from 'flv.js'
export default {
  data () {
    return {

    }
  },
  components: {

  },
  created () {

  },
  mounted () {
    this.startLive()
  },
  methods: {
    startLive () {
      if (flv.isSupported()) {
        const videoElement = this.$refs['videoDom']
        const livePLayer = flv.createPlayer({
          type: 'flv',
          isLive: true,
          url: 'http://localhost:8000/live/test.flv'
        })
        livePLayer.attachMediaElement(videoElement)
        livePLayer.load()
        livePLayer.play()
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
