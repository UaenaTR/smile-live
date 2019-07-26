<template>
  <div class="baberrage-stage" v-show="isShow" ref="stage">
    <div class="baberrage-top">
      <div v-for="(item,index) in barrageList" :key="index" :style="[item.style,item.isMove ? item.moveStyle : '']">
        <!-- <div class="baberrage-avatar"><img :src="item.avatar"></div> -->
        <div class="baberrage-msg">{{ item.msg }}</div>
      </div>
      <button @click='move'>滚动</button>
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
      isShow: true,
      barrageList: []
    }
  },
  components: {

  },
  created () {

  },
  mounted () {

  },
  methods: {
    move () {
      console.log(this.$refs.stage.offsetWidth)
      this.barrageList.push({
        id: 1,
        msg: '哈哈',
        isMove: false,
        style: {
          position: 'absolute',
          right: '0'
        },
        moveStyle: {
          // transform: 'translate3d(-' + this.$refs.stage.offsetWidth + 'px' + ',0,0)',
          transform: `translate3d(-${this.$refs.stage.offsetWidth}px,0,0)`,
          transition: `all linear ${this.$refs.stage.offsetWidth / 120}s`
        }
      })
      this.$set(this.barrageList[this.barrageList.length - 1].style, 'top', Math.random() * this.$refs.stage.offsetHeight + 'px')
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        this.barrageList[this.barrageList.length - 1].isMove = true
      }, 10)
    }
  }
}
</script>

<style lang="scss" scoped>
.baberrage-stage{
  position: absolute;
    width: 100%;
    height: 100%;
    overflow:hidden;
    background-color:cadetblue;
    .baberrage-item {
      position: absolute;
      width:auto;
      display:block;
      color:#000;
      transform: translateX(500%);
      padding:5px 8px 5px 38px;
      text-align:left;
      white-space:nowrap;
      .baberrage-avatar {
        position: absolute;
        width:30px;
        height:30px;
        left: 8px;
        top: 5px;
        border-radius:50px;
        overflow: hidden;
        img {
          width:30px;
        }
      }
      .baberrage-msg{
        line-height:30px;
        padding-left:8px;
        white-space:nowrap;
      }
    }
    .baberrage-item.normal{
      background:rgba(0,0,0,.7);
      border-radius:100px;
      color:#FFF;
    }
}
</style>
