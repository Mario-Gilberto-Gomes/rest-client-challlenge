<template class="app">
  <router-view />
</template>

<script>
export default {};
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;800&display=swap");
body {
  margin: 0 auto;
}


*{
    outline-style: none;
    box-shadow: none;
    border-color: transparent;
}
/*:root {
  color-scheme: light dark; /* both supported */ /*
}*/
body {
  --background:#FFFFFF;
  --second-background: #FAFAFA;
  --element: hsl(0, 0%, 100%);
  --text: hsl(200, 15%, 8%);
  --shadow: #8080803d;
}
body.dark {
  --background: hsl(207, 26%, 17%);
  --second-background: #2B3743;
  --element: hsl(209, 23%, 22%);
  --text: hsl(0, 0%, 100%);
  --shadow: #8080803d;
}
body{
  background: var(--background);
  margin: 0 auto;
}

/*:-moz-drag-over
[data-theme="dark"] {
  --background: hsl(207, 26%, 17%);
  --element: hsl(209, 23%, 22%);
  --text: hsl(0, 0%, 100%);
}*/

h1,
h2,
h3,
p,
a {
  font-family: "Nunito Sans", sans-serif;
  color: var(--text);
}
</style>

