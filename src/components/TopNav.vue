<template>
  <div class="top-nav">
      <img class="app-logo" src="../assets/logo.png" alt="">
      <ul class="nav-list">
          <li><span>首页</span></li>
          <li @mouseover="showType = true" @mouseout="showType = false">
              <span>分类<i :class="showType ? 'triangle up down' : 'triangle down'"></i></span>
          </li>
          <li><span>直播吧</span></li>
      </ul>
      <!-- 分类 -->
    <div class="type-content" v-if='showType'>
        <div class="hot-type">
            <div class="hot-type-title">热门分类</div>
            <div class="hot-type-cont">
                <span class="hot-type-box">英雄联盟</span>
                <span class="hot-type-box">炉石传说</span>
                <span class="hot-type-box">地下城与勇士</span>
                <span class="hot-type-box">云顶之弈</span>
                <span class="hot-type-box">云顶之弈</span>
                <span class="hot-type-box">云顶之弈</span>
            </div>
        </div>
        <el-button class="all-type">全部分类</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showType: false
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
    .top-nav{
        position: relative;
        line-height: 80px;
        font-size: 18px;
        display: flex;
        background-color: #fff;
        .app-logo{
            height: 60px;
            margin: auto 50px;
        }
        .nav-list{
            width: 260px;
            display: flex;
            justify-content: space-around;
            margin-left: 50px;
            li{
                span{
                    &:hover{
                        color:coral;
                    }
                }
            }
            .triangle{
                position: absolute;
                display: block;
                width: 0;
                height: 0;
                transition: all linear 0.2s;
                &.down{
                    border-top: 6px black solid;
                    border-left: 6px transparent solid;
                    border-bottom: 6px transparent solid;
                    border-right: 6px transparent solid;
                    top: 38px;
                    left: 350px;
                }
                &.up{
                    top:30px;
                    transform: rotate(180deg);
                    transition: all linear 0.2s
                }
            }
        }
        .type-content{
            width: 280px;
            height: 260px;
            background-color: aqua;
            position: absolute;
            z-index:3;
            top:80px;
            left:220px;
            border-radius: 10px;
            text-align: center;
            .hot-type{
                .hot-type-title{
                    margin-left: 15px;
                    text-align: left;
                    font-size: 16px;
                    height: 60px;
                }
                .hot-type-cont{
                    display: flex;
                    width: 90%;
                    margin: 0 auto;
                    justify-content: space-between;
                    flex-flow: row wrap;
                    .hot-type-box{
                        display: block;
                        width: 30%;
                        padding: 0 2px;
                        height: 30px;
                        border-radius: 10px;
                        background-color: #cccccc;
                        font-size: 12px;
                        line-height: 30px;
                        margin-top: 10px;
                    }
                }
            }
            .all-type{
                width: 90%;
                margin: 50px auto;
                background-color: coral;
                color:#fff;
                font-weight: bolder;
            }
        }
    }
</style>
