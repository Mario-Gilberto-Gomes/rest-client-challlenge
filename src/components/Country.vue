<template>
  <div class="container">
    <router-link :to="'/details/'+alpha3Code">
      <img :src="flag" />
    </router-link>
    <div class="details">
      <h3>{{ name }}</h3>
      <p>population : {{ population }}</p>
      <p>Region: {{ region }}</p>
      <p>Capital: {{ capital }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "country",
  props: {
    name: String,
    region: String,
    population: Number,
    capital: String,
    flag: String,
    alpha3Code: String,
  },
};
</script>

<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin: 0;
  padding: 0 auto;
  background: var(--second-background);
  width: 250px;
  height: 350px;
  margin-bottom: 60px;
  border-radius: 5px;
  box-shadow: 0 0 9px var(--shadow);
}

.container img {
  height: 150px;
  width: 250px;
  background: var(--background);
}

.details {
  text-align: start;
  padding-left: 20px;
  background: var(--second-background);
}
</style>