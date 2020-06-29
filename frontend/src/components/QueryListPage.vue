<template>
  <table border="1">
    <router-link :to="{name: 'queryinsertpage'}" tag="button">insert query</router-link>
    <tr>
      <td>id</td>
      <td>queryString</td>
      <td>version</td>
      <td>삭제</td>
    </tr>
    <tr v-for="query in queryString" v-bind:key="query.id">
      <td>{{query.id}}</td>
      <router-link :to="{name: 'detailquerypage', params: {id: query.id}}">
        <td>{{query.queryString}}</td>
      </router-link>
      <td>{{query.version}}</td>
      <td>
        <button name="queryId" v-bind:value="query.id" v-on:click="deleteQuery($event)">삭제</button>
      </td>
    </tr>
  </table>
</template>
<script>
/* eslint-disable */

export default {
  created() {
    this.$http.get("/find").then(response => {
      console.log(JSON.stringify(response));
      this.queryString = response.data;
    });
  },
  data() {
    return { queryString: [] };
  },
  methods: {
    deleteQuery(e) {
      const buttonValue = e.target.value;
      console.log(buttonValue);
      this.$http
        .delete("/delete", {
          params: {
            id: buttonValue
          },
          validateStatus: status => {
            return true; // I'm always returning true, you may want to do it depending on the status received
          }
        })
        .then(function(response) {
          this.queryString.$remove(buttonValue);
          console.log(response);
        })
        .catch(function(error) {
          console.log(error.response);
        });
         //this.$router.push({ name: "querylistpage" });

    }
  }
};
</script>
