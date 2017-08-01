<template>
  <div id="app">
    <app-header></app-header>

    <router-view></router-view>

    <div class="footer">&nbsp;</div>

  </div>

</template>

<script>
  import Header from './Header.vue'

  export default {
    components: {
      'app-header': Header
    }
  }
</script>

<style>
  body {
    font-family: Helvetica, sans-serif;
  }

  a {
    text-decoration: none;
  }


  .el-row {
    margin-bottom: 0;
  }

  .el-col {}

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    min-height: 100px;
  }

  .row-bg {
    background-color: #f9fafc;
  }

  h3 {
    display: block;
    font-size: 1.17em;
    -webkit-margin-before: 0em;
    -webkit-margin-after: 0em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font-weight: bold;
  }

  .footer {
    background-color: #cccccc;
  }
</style>