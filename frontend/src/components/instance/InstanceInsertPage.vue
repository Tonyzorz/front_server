<template>
  <form method="post" @submit.stop.prevent="mySubmit">
    <div>
      <label for="name">아이디</label>
      <input type="text" name="id" required v-model="instance.id" />
    </div>
    <div>
      <label for="queryString">역할/권한</label>
      <input type="text" name="ip" required v-model="instance.role" />
    </div>
    <div>
      <label for="desc">인스턴스 아이디</label>
      <input type="text" name="port" required v-model="instance.role_instance_id" />
    </div>
    <div>
      <label for="sqlType">인스턴스 이름</label>
      <input type="text" name="roles" required v-model="instance.instance_nm" />
    </div>
    <div>
      <label for="sqlType">인스턴스 수 </label>
      <input type="text" name="roles" required v-model="instance.instance_cnt" />
    </div>
    <div>
      <label for="sqlType">인스턴스 내용</label>
      <input type="text" name="roles" required v-model="instance.instance_desc" />
    </div>
    <div>
      <label for="sqlType">인스턴스 워커 여부</label>
      <input type="text" name="roles" required v-model="instance.worker_yn" />
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
      instance: {
        id: "",
        role: "",
        role_instance_id: "",
        instance_nm: "",
        instance_cnt: "",
        instance_desc: "",
        worker_yn: "",
      },
      response: ""
    };
  },
  methods: {
    mySubmit() {
      this.$http
        .post("/instanceInsert", this.instance)
        .then(res => {
          console.log("upload success!");
        })
        .catch(err => {
          console.error("upload fali!");
        });
      //go to list page
      this.$router.push({ name: 'instancelistpage'});
    }
  }
};
</script>
