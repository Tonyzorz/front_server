<template>
  <div>
    <div class="header">
    </div>
    <table border="1">
      <button v-on:click="headerData">headerData</button>
      <router-link :to="{name: 'propertyinsertpage'}" tag="button">insert property</router-link>
      <tr>
        <td>아이디</td>
        <td>아이피</td>
        <td>포트</td>
        <td>권한/역할</td>
        <td>삭제</td>
      </tr>
      <tr v-for="prop in property" v-bind:key="prop.id">
        <td>{{prop.id}}</td>
        <router-link :to="{name: 'detailpropertypage', params: {id: prop.id}}">
          <td>{{prop.ip}}</td>
        </router-link>
        <td>{{prop.port}}</td>
        <td>{{prop.roles}}</td>
        <td>
          <button name="propId" v-bind:value="prop.id" v-on:click="deleteQuery($event)">삭제</button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
/* eslint-disable */

export default {
  created() {
    console.log("entereed property list ");
    this.$http
      .get("/propertyfind")
      .then(response => {
        console.log("?L!L!L!L!L!L???????????");
        this.property = response.data;
      })
      .catch(error => {
        console.log("/propertyfind ==== " + error);
      });
    this.$http.get("/headerData").then(response => {
      console.log("ssssssssssssssssss" + JSON.stringify(response));
      var obj = response.data;
      this.magnetic = obj.magnetic;
      this.weather = obj.weather;
      this.queryLength = obj.queryString.count;

      console.log(this.magnetic);
      console.log(this.magnetic.kindex);
    });
  },
  data() {
    return {
      queryLength: 0,
      property: [],
      magnetic: {},
      weather: {}
    };
  },
  methods: {
    deleteQuery: function(e) {
      const buttonValue = e.target.value;
      console.log(buttonValue);
      this.$http
        .delete("/propertyDelete", {
          params: {
            id: buttonValue
          },
          validateStatus: status => {
            return true; // I'm always returning true, you may want to do it depending on the status received
          }
        })
        .then(response => {
          //go through queryString and find the id and delete from data
          for (var i = 0; i < this.property.length; i++) {
            if (this.property[i].id == buttonValue) {
              this.property.splice(this.property[i], 1);
            }
          }
        })
        .catch(function(error) {
          console.log(error.response);
        });
    },
    headerData(e) {
      this.$http
        .get("/headerData")
        .then(function(response) {
          console.log(JSON.stringify(response));
          magnetic = response.data.magnetic;
        })
        .catch(function(error) {
          console.log(error.response);
        });
    }
  }
};
</script>
<style>
/* Style the header with a grey background and some padding */
.header {
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 20px 10px;
}
/* Style the header links */
.header .header-right #magnetic {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
  height: 100px;
  width: 100px;
}
.header .header-right #weather {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  padding-left: 500px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
  height: 100px;
  width: 100px;
}
.header .header-right #query {
  float: right;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
  height: 100px;
  width: 100px;
}
/* Change the background color on mouse-over */
.header #magnetic:hover #weather:hover #query:hover {
  background-color: #ddd;
  color: black;
}
/* Float the link section to the right */
/* .header-right {
  float: right;
} */
</style>