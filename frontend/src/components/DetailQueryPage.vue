<template>
  <form method="post" v-on:submit.prevent="edit">
    <table border="1">
      <router-link :to="{name: 'queryinsertpage'}" tag="button">insert query</router-link>
      <tr>
        <td>id</td>
        <td>queryString</td>
        <td>version</td>
        <td>수정</td>
        <!-- <td>삭제</td> -->
      </tr>
      <tr>
        <td>{{queryString.id}}</td>
        <td>
          <input type="text" name="queryString" v-model="queryString.queryString" />
        </td>
        <td>{{queryString.version}}</td>
        <td>
          <button type="submit">수정</button>
        </td>
        <!-- <td>
          <button name="queryId" v-bind:value="queryString.id" v-on:click="deleteQuery($event)">삭제</button>
        </td>-->
      </tr>
    </table>
  </form>
</template>
<script>
/* eslint-disable */

export default {
  created: function() {
    var id = this.$route.params.id;
    this.$http.get(`/find/${id}`).then(response => {
      console.log(JSON.stringify(response));
      this.queryString = response.data[0];
      console.log(JSON.stringify(this.queryString));
    });
  },
  data: function() {
    return {
      queryString: []
    };
  },
  methods: {
    edit() {
      this.$http
        .post("/queryUpdate", this.queryString)
        .then(res => {
          console.log("update success!");
        })
        .catch(err => {
          console.error("update fali!");
        });
      this.$router.push("/");
    }
  }
};
</script>
