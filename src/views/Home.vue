<template>
  <div class="home">
    <el-container>
      <el-header height='80px'>
        <top-nav></top-nav>
      </el-header>
      <el-container>
        <el-aside width='200px'>aside</el-aside>
        <el-main>main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import TopNav from '@components/TopNav'
export default {
  data () {
    return {

    }
  },
  components: {
    TopNav
  },
  computed: {

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
  .home{
    .el-container{
      height:100%;
      .el-header{
      padding: 0;
      }
    }
  }
</style>
