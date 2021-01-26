<template>
  <div class="container">
    <div class="blog">
      <div class="blog-title">
        <h3>{{ blog && blog.title }}</h3>
        <span>{{ blog && blog.post_time }}</span>
      </div>
      <div class="blog-content">{{ blog && blog.content }}</div>
      <div class="comments">
<div class="bottom">
         <button class="coomment" @click="show">评论</button>
</div>
<div class="commentdec">
  <textarea v-model="newItem" v-on:keyup.enter="addNew" v-if="msg" />
       <ul>
              <li
                v-for="(item,index) in items"
                v-bind:class="{finished: item.isFinished}"
                v-on:click="toggleFinish(item)"
                :key="index"
              >{{item.label}}</li>
       </ul>
</div>

        <div class="comment">
          <div class="comment-content"></div>
          <div class="comment-info">
            <span class="userinfo"></span>
            <span class="post-time"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blog: null,
      msg: false,
      items: [],
      newItem: "",
    };
  },

  created() {
    this.getBlogDetail();
  },
  methods: {
    toggleFinish(item) {
      item.isFinished = !item.isFinished;
    },
    addNew() {
      axios
        .post("接口地址", 传参)
        .then(res => {});
      his.items.push({
        label: this.newItem,
        isFinished: false
      });
      this.newItem = "";
      this.msg = false;
    },
    show() {
      this.msg = !this.msg;
    },
    getBlogDetail() {
      let blogId = this.$route.params.blogId;
      this.$http
        .get("/blog/detail", {
          params: {
            blogId: blogId,
          },
        })
        .then((res) => {
          let { state, blog } = res.data;
          if (state == "success") {
            this.blog = blog;
          }
        })
    },
  },
};
</script>
//样式
<style scoped>
.blog {
  margin: 20px auto;
  padding: 20px;
  background: #cccccc;
}
.blog-title {
  padding: 10px;
}
.blog-content {
  padding: 10px;
}
.comment {
  padding: 20px;
}
.comment-info {
  float: right;
}
</style>
