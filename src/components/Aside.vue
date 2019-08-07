<template>
  <div class="aside">
    <ul class="aside-nav">
      <li>我的关注</li>
      <li>游戏</li>
      <li>颜值</li>
      <li>户外</li>
    </ul>
  </div>
</template>

<script>
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

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.aside{
  height: 100%;
  color:#ccc;
  .aside-nav{
    li{
      text-align: center;
      height: 40px;
      line-height: 40px;
      font-size: 18px;
      &:hover{
        background-color: coral;
      }
    }
  }
}
</style>
