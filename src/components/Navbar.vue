<template>
  <div class="nav">
    <h2>Where in the world?</h2>
    
    <div @click="toggleIt" class="dark-nav">
      <ion-icon name="moon"></ion-icon>
      <p>{{mode}}</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
  setup() {
    const userTheme = ref('light-theme')
    const mode = ref('')

    const toggleIt = () => {
      const activeTheme = localStorage.getItem("user-theme")
      if (activeTheme === "light-theme") {
        setTheme("dark-theme")
        mode.value = 'Dark Mode'
      } else {
        setTheme("light-theme")
        mode.value = 'Light Mode'
      }
    }

    const setTheme = (theme) => {
      localStorage.setItem("user-theme", theme)
      userTheme.value = theme;
      document.documentElement.className = theme
    }

    const getMediaPreference = () => {
      const hasDarkPreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches
      if (hasDarkPreference) {
        mode.value = 'Dark Mode'
        return "dark-theme"
      } else {
        mode.value = 'Light Mode'
        return "light-theme"
      }
    }

    onMounted(() => {
      const initUserTheme = getMediaPreference()
      setTheme(initUserTheme)
    })

    return {
      mode,
      toggleIt
    }
  }
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
  cursor: pointer;
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
    justify-content: space-between;
    padding: 20px 25px;
  }
}
</style>