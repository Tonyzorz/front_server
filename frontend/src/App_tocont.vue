<template>
  <div id="app">
    <div class="header">
      <div class="header-right">
        <div class="active">
          <router-link :to="{name: 'querylistpage'}">querylist</router-link>
        </div>
        <div>
          <router-link :to="{name: 'propertylistpage'}">propertylist</router-link>
        </div>
        <div>
          <router-link :to="{name: 'instancelistpage'}">propertylist</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* Style the header with a grey background and some padding */
.header {
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 20px 10px;
}

/* Style the header links */
.header .header-right div {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
}

/* Style the logo link (notice that we set the same value of line-height and font-size to prevent the header to increase when the font gets bigger */
.header .header-right div.logo {
  font-size: 25px;
  font-weight: bold;
}

/* Change the background color on mouse-over */
.header .header-right div:hover {
  background-color: #ddd;
  color: black;
}

/* Style the active/current link*/
.header .header-right div.active {
  background-color: dodgerblue;
  color: white;
}

/* Float the link section to the right */
.header-right {
  float: right;
}
</style>
