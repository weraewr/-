<template>
  <div id="app">
    <!-- 这里是vue原来自带的导航在页面的上部可以进行选择用router-link路由跳转到指定页面 -->
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

/* css reset */
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
ul,
ol {
  list-style: none;
}

/* 通用样式 */
.container {
  width: 1200px;
  margin: 0 auto;
}
header {
  height: 50px;
  background: #cccccc;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
