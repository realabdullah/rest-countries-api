<template>
  <div class="nav">
    <h2>Where in the world?</h2>
    <div @click="toggleTheme" class="dark-nav">
      <ion-icon name="moon"></ion-icon>
      <p>Dark Mode</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['toggleTheme']
}
</script>

<style>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 50px;
  background: var(--elementBg);
}

.nav h2 {
  color: var(--fontColor);
}

.dark-nav {
  display: flex;
  align-items: center;
  justify-content: center;
}

.dark-nav p, .dark-nav ion-icon {
  color: var(--fontColor);
}

.dark-nav p {
  margin-left: 7px;
}

@media(max-width:700px) {
  h2 {
    font-size: 0.8em;
  }

  .dark-nav ion-card, .dark-nav p {
    font-size: 0.8em;
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 25px;
    background: hsl(209, 23%, 22%);
  }
}
</style>