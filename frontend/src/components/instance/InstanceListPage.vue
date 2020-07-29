<template>
  <div>
    <div class="header">
      <router-link :to="{name: 'instanceinsertpage'}" tag="button">insert instance</router-link>
    </div>
    <ul>
      <li>아이디</li>
      <li>역할/권한</li>
      <li>인스턴스 아이디</li>
      <li>인스턴스 이름</li>
      <li>인스턴스 수</li>
      <li>인스턴스 내용</li>
      <li>인스턴스 워커 여부</li>
      <li>삭제</li>
    </ul>
    <ul v-for="inst in instance" v-bind:key="[inst.id, inst.role, inst.role_instance_id]">
      <li>{{inst.id}}</li>
      <router-link :to="{name: 'detailinstancepage', params: {id: inst.id}}">
      <li>{{inst.role}}</li>
      </router-link>
      <li>{{inst.role_instance_id}}</li>
      <li>{{inst.instance_nm}}</li>
      <li>{{inst.instance_cnt}}</li>
      <li>{{inst.instance_desc}}</li>
      <li>{{inst.worker_yn}}</li>
      <li>
        <button name="instId" v-bind:value="{test : inst.id, test2 : inst.role, test3 : inst.role_instance_id}" v-on:click="deleteQuery(inst)">삭제</button>
      </li>
    </ul>
  </div>
</template>
<script>
/* eslint-disable */

export default {
  created() {
    console.log("entereed property list ");
    this.$http
      .get("/instancefind").then(response => {
        this.instance = response.data;
      })
      .catch(error => {
        console.log("/instancefind ==== " + error);
      });
  },
  data() {
    return {
      queryLength: 0,
      instance: [],
      magnetic: {},
      weather: {}
    };
  },
  methods: {
    deleteQuery: function(e) {
      var myJson = JSON.stringify(e);
      var realJson = JSON.parse(myJson);

      const idValue = realJson.id;
      const roleValue = realJson.role;
      const instanceIdValue = realJson.role_instance_id;

      console.log(idValue);
      console.log(roleValue);
      console.log(instanceIdValue);
      
      this.$http
        .delete("/instanceDelete", {
          params: {
            id: idValue,
            role: roleValue,
            role_instance_id: instanceIdValue,
          },
          validateStatus: status => {
            return true; // I'm always returning true, you may want to do it depending on the status received
          }
        })
        .then(response => {
          //go through queryString and find the id and delete from data
          for (var i = 0; i < this.instance.length; i++) {
            if (this.instance[i].id == idValue && this.instance[i].role == roleValue && this.instance[i].role_instance_id == instanceIdValue) {
              this.instance.splice(this.instance[i], 1);
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
ul {
  list-style-type: none;
  width: 100%;
  display: table;
  table-layout: fixed;
}

li {
  display: table-cell;
  width: 50%;
}
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