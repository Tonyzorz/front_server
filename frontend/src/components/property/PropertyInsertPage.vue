<template>
  <form method="post" @submit.stop.prevent="mySubmit">
    <div>
      <label for="name">프로퍼티 아이디</label>
      <input type="text" name="id" required v-model="property.id" />
    </div>
    <div>
      <label for="queryString">아이피</label>
      <input type="text" name="ip" required v-model="property.ip" />
    </div>
    <div>
      <label for="desc">포트</label>
      <input type="text" name="port" required v-model="property.port" />
    </div>
    <div>
      <label for="sqlType">역할/권한 </label>
      <input type="text" name="roles" required v-model="property.roles" />
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
      property: {
        id: "",
        ip: "",
        port: "",
        roles: "",
      },
      response: ""
    };
  },
  methods: {
    mySubmit() {
      this.$http
        .post("/propertyInsert", this.property)
        .then(res => {
          console.log("upload success!");
        })
        .catch(err => {
          console.error("upload fali!");
        });
      //go to list page
      this.$router.push({ name: 'propertylistpage'});
    }
  }
};
</script>
