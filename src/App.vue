<template>
  <router-view/>
</template>

<style>
:root {
  --bg: hsl(207, 26%, 17%);
  --fontColor: hsl(0, 0%, 100%);
  --fontColor2: hsl(0, 0%, 52%);
  --elementBg: hsl(209, 23%, 22%);
}

.dark-theme {
  --bg: hsl(207, 26%, 17%);
  --fontColor: hsl(0, 0%, 100%);
  --fontColor2: hsl(0, 0%, 52%);
  --elementBg: hsl(209, 23%, 22%);
}

.light-theme {
  --bg: hsl(0deg 0% 94%);
  --fontColor: hsl(200, 15%, 8%);
  --fontColor2: hsl(0, 0%, 52%);
  --elementBg: hsl(0, 0%, 100%);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(--bg);
  color: var(--fontColor);
}
</style>
