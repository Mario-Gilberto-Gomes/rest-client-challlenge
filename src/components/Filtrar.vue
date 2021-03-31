<template>
  <div id="filter">
    <div>
      <font-awesome-icon icon="search" />
      <input type="text" placeholder="Search for a country" @keyup="onSearch"/>
    </div>
    <div>
      <select @change="regionchange">
        <option value="">Filter By Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props : {
    regionchange: Function,
    onSearch: Function,
  }
}
</script>

<style lang="css" scoped>
select option{
  
  border-radius: 5px;
  padding: 13px;
}
#filter {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 5%;
  margin-bottom: 50px;
}

#filter div {
  
  border-radius: 5px;
  padding: 13px;
  background: var(--second-background);
  box-shadow: 0 0 5px var(--shadow);
}

#filter div input {
  border: none;
  border-radius: 5px;
  width: 400px;
  margin-left: 10px !important;
  background: var(--second-background);
  color: var(--text);
}

#filter select {
  border: none;
  border-radius: 5px;
  width: 150px;
  background: var(--second-background);
  color: var(--text);
}

#filter select option {
  background: var(--element);;
  color: var(--text);
  width: 500px;
  padding: 13px;
}

@media (max-width: 600px){
         #filter{
           flex-direction: column;
           width: 90vw;
         }
          #filter div input{
           width: auto;
         }

         #filter div:last-child{
           margin-top: 50px;
           width: 150px !important;
         }
     }
</style>