<template>
  <div class="top-nav">
    <img class="app-logo" src="../assets/logo.png" alt="">
    <ul class="nav-list">
        <li><span>首页</span></li>
        <li @mouseover="showType = true" @mouseleave="showType = false">
              <span>分类<i :class="showType ? 'triangle up down' : 'triangle down'"></i></span>
        </li>
        <li><span>直播吧</span></li>
    </ul>
    <div style="line-height:80px;">
        <el-input class="search-ipt" placeholder='请输入主播名或房间号'></el-input>
        <i class="iconfont icon-sousuo" style="position:relative;left:-25px;top:2px;font-size:18px;cursor:pointer"></i>
    </div>
    <div class="concern">
        <i class="iconfont icon-shoucang"></i>
    </div>
    <div class="user-logo"></div>
      <!-- 分类 -->
    <div class="type-content" :style='showType ? blockSty : ""' @mouseover="showType = true" @mouseleave="showType = false">
        <div class="hot-type">
            <div class="hot-type-title">热门分类</div>
            <div class="hot-type-cont">
                <span class="hot-type-box">英雄联盟</span>
                <span class="hot-type-box">炉石传说</span>
                <span class="hot-type-box">地下城与勇士</span>
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
      showType: false,
      blockSty: { display: 'block' }
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
        display: flex;
        height: 80px;
        position: relative;
        .app-logo{
            position: relative;
            height:60px;
            margin-left: 150px;
            top:50%;
            transform: translateY(-50%);
        }
        .nav-list{
            margin-left: 50px;
            line-height: 80px;
            li{
                float: left;
                &:nth-child(n + 2){
                    margin-left: 20px;
                }
                &:hover{
                    color: coral;
                }
                font-size: 18px;
            }
            .triangle{
                position: absolute;
                display: block;
                width: 0;
                height: 0;
                transition: all linear 0.2s;
                &.down{
                    border-top: 4px black solid;
                    border-left: 4px transparent solid;
                    border-bottom: 4px transparent solid;
                    border-right: 4px transparent solid;
                    top: 38px;
                    left: 352px;
                }
                &.up{
                    top:34px;
                    transform: rotate(180deg);
                    transition: all linear 0.2s
                }
            }
        }
        .search-ipt{
            width: 200px;
            margin-left: 300px;
        }
        .type-content{
            display: none;
            width: 280px;
            height: 280px;
            position: absolute;
            background-color: aqua;
            top:80px;
            left: 200px;
            border-radius: 20px;
            .hot-type{
                .hot-type-title{
                    margin-left: 20px;
                    font-size: 14px;
                    font-weight: bolder;
                    line-height: 40px;
                }
                .hot-type-cont{
                    display: flex;
                    justify-content: space-between;
                    width: 90%;
                    margin: 0 auto;
                    flex-flow: row wrap;
                    .hot-type-box{
                        display: block;
                        width: 30%;
                        height: 30px;
                        background-color: #ccc;
                        line-height: 30px;
                        text-align: center;
                        border-radius: 10px;
                        margin-top: 10px;
                        cursor: pointer;
                        &:hover{
                            background-color: coral;
                            color:#fff;
                        }
                    }
                }
            }
            .all-type{
                width: 90%;
                background-color:coral;
                position: absolute;
                bottom: 30px;
                left: 50%;
                transform: translateX(-50%);
                color: #fff;
                font-size: 16px;
                font-weight: bolder;
            }
        }
        .concern{
            line-height: 80px;
            margin-left: 100px;
            i{
                font-size: 22px;
                    &:hover{
                    color: red;
                    cursor: pointer;
                }
            }
        }
        .user-logo{
            width: 50px;
            height: 50px;
            background-color: coral;
            background-image: url('../assets/logo.png');
            background-size: cover;
            border-radius: 50%;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
            margin-left: 50px;
        }
    }
</style>
