<template>
  <div class="home">
    <el-container>
      <el-header height="80px">
        <top-nav></top-nav>
      </el-header>
      <el-container>
        <el-aside width="240px">
          <Aside></Aside>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import TopNav from '@components/TopNav'
import Aside from '@components/Aside'
export default {
  data () {
    return {

    }
  },
  components: {
    TopNav,
    Aside
  },
  computed: {

  },
  created () {},
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
  .home{
    .el-container{
      width: 100%;
      height:100%;
      .el-header{
          padding: 0;
          background-color: #fff;
        }
      .el-container{
        height: calc(100vh - 80px);
        .el-aside{
          padding-top: 50px;
           background-color: #333;
        }
      }
    }
  }
</style>
