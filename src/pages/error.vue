<template>
  <div class="component-error">
    <h1>404 error</h1>
    <div class="button" @click="$router.back()">back</div>
  </div>
</template>

<script>
export default {
  name: 'error',
  data () {
    return {
      //
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.component-error{
  h1{
    color:#faa;
  }
  .button{
      display: inline-block;
      padding:0.4rem 1rem;
      background-color: #faa;
      border: 0.2rem solid #fff;
      border-radius: 0.8rem;
      box-shadow: 0 0 0.4rem 0.2rem #faa;
      color: #fff;
      font-weight: bold;
  }
}
</style>
