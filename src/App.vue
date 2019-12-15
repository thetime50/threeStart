<template>
  <div id="app">
    <div class="tool-bar-wrap">
      <div class="bread-wrap">
        <el-breadcrumb 
          class="breadcrumb"
          separator-class="el-icon-arrow-right">
          <el-breadcrumb-item 
            :to="($route.path!='/toc')&&'/toc'">
          
            首页
          </el-breadcrumb-item>
          <el-breadcrumb-item 
            v-for="(bi,i) in breadcrumbs"
            :to="breadcrumbs.length-i-1 && bi.path &&{ path: bi.path }"
            :key="i">
          
            {{bi.title}}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="option-wrap">
        <el-button type="" size="mini" @click="$router.go(-1)">break</el-button>
      </div>
    </div>
    <div class="router-wrap">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed:{
    breadcrumbs(){
      return this.$route.matched.map((v,i,a)=>{
        return {
          title:v.meta.btitle||v.path,
          path:v.path,
        }
      })
    },
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .tool-bar-wrap{
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr;//.class1 .class2
    >*{
        min-width: 0;
        min-height: 0;
    }
    .bread-wrap{}
  }
  .router-wrap{

  }
}
</style>
