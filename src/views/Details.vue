<template>
  <div>
    <Navbar />
    <CountryDetails
      :name="country.name"
      :nativeName="country.nativeName"
      :subregion="country.subregion"
      :population="country.population"
      :capital="country.capital"
      :region="country.region"
      :flag="country.flag"
      :topLevelDomain="country.topLevelDomain[0]"
      :currencies="country.currencies[0].name"
      :languages="country.languages"
      :borderCountry="country.borders"
     
    />
  </div>
</template>

<script>
import Navbar from "./../components/Navbar.vue";
import CountryDetails from "./../components/CountryDetails.vue";
import api from "./../services/api";

export default {
  name: "Details",
  components: {
    Navbar,
    CountryDetails,
  },
  data() {
    return {
      country: {},
    };
  },
  created() {
    const alpha = this.$route.params.alpha;
    api.get("/alpha/" + alpha).then((result) => {
      console.log(result.data);
      this.country = result.data;
    });
    

  },
};
</script>

<style lang="scss" scoped>
</style>