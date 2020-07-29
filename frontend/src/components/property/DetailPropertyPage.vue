<template>
  <form method="post" v-on:submit.prevent="edit">
    <table border="1">
      <router-link :to="{name: 'propertyinsertpage'}" tag="button">insert property</router-link>
      <tr>
        <td>아이디</td>
        <td>아이피</td>
        <td>포트</td>
        <td>권한/역할</td>
        <td>수정</td>
      </tr>
      <tr>
        <td>{{property.id}}</td>
        <td>
          <input type="text" name="ip" v-model="property.ip" />
        </td>
        <td>
          <input type="text" name="port" v-model="property.port" />
        </td>
        <td>
          <input type="text" name="roles" v-model="property.roles" />
        </td>
        <td>
          <button type="submit">수정</button>
        </td>
      </tr>
    </table>
  </form>
</template>
<script>
/* eslint-disable */

export default {
  created: function() {
    var id = this.$route.params.id;
    this.$http.get(`/propertyfind/${id}`).then(response => {
      console.log(JSON.stringify(response));
      this.property = response.data[0];
      console.log(JSON.stringify(this.queryString));
    });
  },
  data: function() {
    return {
      property: []
    };
  },
  methods: {
    edit() {
      this.$http
        .post("/propertyUpdate", this.property)
        .then(res => {
          console.log("update success!");
        })
        .catch(err => {
          console.error("update fali!");
        });
      this.$router.push({ name: 'propertylistpage'});
    }
  }
};
</script>
