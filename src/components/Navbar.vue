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
        return "dark-theme"
      } else {
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
.switch-checkbox {
  display: none;
}

.switch-label {
  align-items: center;
  background: var(--text-primary-color);
  border: calc(var(--element-size) * 0.025) solid var(--accent-color);
  border-radius: var(--element-size);
  cursor: pointer;
  display: flex;
  font-size: calc(var(--element-size) * 0.3);
  height: calc(var(--element-size) * 0.35);
  position: relative;
  padding: calc(var(--element-size) * 0.1);
  transition: background 0.5s ease;
  justify-content: space-between;
  width: var(--element-size);
  z-index: 1;
}

.switch-toggle {
  position: absolute;
  background-color: var(--background-color-primary);
  border-radius: 50%;
  top: calc(var(--element-size) * 0.07);
  left: calc(var(--element-size) * 0.07);
  height: calc(var(--element-size) * 0.4);
  width: calc(var(--element-size) * 0.4);
  transform: translateX(0);
  transition: transform 0.3s ease, background-color 0.5s ease;
}

.switch-toggle-checked {
  transform: translateX(calc(var(--element-size) * 0.6)) !important;
}
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