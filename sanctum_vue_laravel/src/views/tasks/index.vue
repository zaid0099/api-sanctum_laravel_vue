<template>
  <h1>The Index of Tasks</h1>
</template>

<script>
import User from "../../apis/User";

export default {
  data() {
    return {
      tasks: null
    };
  },

  mounted() {
    User.tasks(3).then(res => {
      console.log(res);
      //   this.tasks = res.data;
    });
    // User.tasks(2).then(res => {
    //   // console.log(res);
    //   this.tasks = res.data;
    // });
  }
};
</script>

<style>
</style>