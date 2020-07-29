<template>
  <div class="header">
    <div class="header-right">
      <div id="magnetic" v-bind:value="magnetic">자기장 정보</div>
      <div id="weather">날씨 정보</div>
      <div v-bind:value="queryLength" id="query">{{queryLength}}</div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  created() {
    this.$http
      .get("/headerData")
      .then(function(response) {
        console.log("==========================");
        console.log("==========================");

        console.log(JSON.stringify(response));
        console.log(response.data);
        var obj = JSON.parse(response.data);
        console.log("==========================");
        console.log(obj);
        this.magnetic = response.data.magnetic;
      })
      .catch(function(error) {
        console.log(error.response);
      });
  },
  data() {
    return {
      queryLength: 0,
      queryString: [],
      magnetic: {},
      weather: {}
    };
  },
};
</script>

<style scoped>
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
}
.header .header-right #weather {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  padding-left: 600px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
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