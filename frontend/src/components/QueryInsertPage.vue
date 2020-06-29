<template>
  <form method="post" @submit.stop.prevent="mySubmit">
    <div>
      <label for="name">쿼리 아이디</label>
      <input type="text" name="id" required v-model="query.id" />
    </div>
    <div>
      <label for="year">쿼리 내용</label>
      <input type="text" name="queryString" required v-model="query.queryString" />
    </div>
    <div>
      <button type="submit">업로드</button>
    </div>
  </form>
</template>
<script>
/* eslint-disable */

export default {
  data() {
    return {
      query: {
        id: "",
        queryString: ""
      },
      response: ""
    };
  },
  methods: {
    mySubmit() {
      this.$http
        .post("/queryInsert", this.query)
        .then(res => {
          console.log("upload success!");
        })
        .catch(err => {
          console.error("upload fali!");
        });
      //go to list page
      this.$router.push({ name: "querylistpage" });
    }
  }
};
</script>
