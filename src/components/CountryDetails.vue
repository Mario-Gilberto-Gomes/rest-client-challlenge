<template>
  <div class="countryDetails">
    <div class="back">
      <router-link to="/"><font-awesome-icon icon="arrow-left" />Back</router-link>
    </div>
    <div>
      <img :src="flag" />
      <div class="">
        <div class="info-div">
          <h3>{{ name }}</h3>
          <div class="details">
            <div>
              <p>Native Name : {{ nativeName }}</p>
              <p>Population: {{ population }}</p>
              <p>Region:{{ region }}</p>
              <p>Sub Region: {{ subregion }}</p>
              <p>Capital: {{ capital }}</p>
            </div>
            <div>
              <p>Top Level Domain: {{ topLevelDomain }}</p>
              <p>Currencies: {{ currencies }}</p>
              <p>Languages: {{ lang }}</p>
            </div>
          </div>
        </div>
        <div class="borderCountries">
          <p>Border Countries:</p>
          <div class="borders">
            <div v-for="(contry, index) in borderCountry" :key="index">
              <router-link :to="'/details/' + contry">{{ contry }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    region: String,
    population: Number,
    capital: String,
    flag: String,
    nativeName: String,
    subregion: String,
    topLevelDomain: String,
    currencies: String,
    languages: [String],
    borderCountry: [String],
  },
  data() {
    return {
      lang: "",
    };
  },
  created: function languages() {
    this.languages.map((language, index) => {
      index !== 0
        ? (this.lang += ", " + language.nativeName)
        : (this.lang += language.name);
    });
  },
};
</script>


<style lang="css" scoped>
.back {
  margin-top: 12px;
  margin-right: 10px;
  box-shadow: 0 0 2px var(--shadow);
  padding: 2px 22px;
  height: 22px;
  border-radius: 2px;
}

.back a {
  font-size: 14px;
  text-decoration: none;
  padding-top: 2px;
}

.back a svg{
  margin-right: 5px;
}
.countryDetails {
  display: flex;
  flex-direction: column;
  padding: 0 50px;
}

.countryDetails div {
  /* margin: 0 50px;*/
  display: flex;
}

.countryDetails div img {
  height: 200px;
  width: 350px;
}

.countryDetails div div {
  display: flex;
  flex-direction: column;
}

.countryInfo {
  display: flex;
  flex-direction: row;
}

.details {
  flex-direction: row !important;
}

.info-div h3 {
  margin: 30px 100px;
  font-size: x-large;
}

.info-div div {
  margin: 0 50px;
}

.info-div div p {
  margin: 8px 0;
}

.borderCountries {
  display: flex;
  margin-left: 100px;
  flex-direction: row !important;
}

.borderCountries p {
  margin-right: 30px;
}

.borderCountries div div {
  margin-top: 12px;
  margin-right: 10px;
  box-shadow: 0 0 2px var(--shadow);
  padding: 2px 22px;
  height: 22px;
  border-radius: 2px;
}

.borderCountries div div a {
  font-size: 14px;
  text-decoration: none;
  padding-top: 2px;
}

.borders {
  flex-direction: row !important;
}

.back {
  box-shadow: 0 0 2px var(--shadow);
    padding: 2px 22px !important;
    height: 22px;
    border-radius: 2px;
    width: 50px;
    margin-bottom: 60px !important;
}

.back a {
  font-size: 14px;
  text-decoration: none;
  padding-top: 2px;
}

@media (max-width: 600px) {
  .countryDetails div,
  .borderCountries,
  .countryDetails.countryInfo,
  .details,
  .info-div {
    flex-direction: column !important;
    margin: 0;
    padding: 0;
  }
  .countryDetails div img {
    height: 200px;
    width: 85vw;
  }
  .countryDetails {
        margin: 0 7vw 50px 7vw;
    padding: 0;
  }
  .info-div h3 {
    margin: 40px 0 20px 0;
  }
  .info-div div p {
    margin: 2px 0;
  }

  .details div {
    margin-bottom: 30px;
  }

  .borderCountries div {
    flex-direction: row !important;
    margin-right: 20px;
    flex-wrap: wrap;
  }
}
</style>