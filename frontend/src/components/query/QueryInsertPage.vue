<template>
  <form method="post" @submit.stop.prevent="mySubmit">
    <div>
      <label for="name">쿼리 아이디</label>
      <input type="text" name="id" required v-model="query.id" />
    </div>
    <div>
      <label for="queryString">쿼리 내용</label>
      <input type="text" name="queryString" required v-model="query.queryString" />
    </div>
    <div>
      <label for="desc">세부 설명</label>
      <input type="text" name="desc" required v-model="query.desc" />
    </div>
    <div>
      <label for="sqlType">디비 타입</label>
      <input type="text" name="sqlType" required v-model="query.sqlType" />
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
        queryString: "",
        desc: "",
        sqlType: "",
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
      this.$router.push("/");
    }
  }
};
</script>
