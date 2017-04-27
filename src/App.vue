<template>
  <div id="app">
    <div class="main-wrapper scrollbar-macosx">
      <nav class="ink-navigation top">
        <ul class="menu horizontal">
          <li><a href="https://www.linkedin.com/in/taylor-hessel-44615848/" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
          <li><a href="https://github.com/taylorhessel" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a></li>
        </ul>
      </nav>
      <transition name="fade" mode="out-in">
        <component :is="currentView"></component>
      </transition>
      <nav class="ink-navigation bottom">
        <ul class="menu horizontal">
          <li><a :class="{ 'active': homeActive }" @click="viewHome">home</a></li>
          <li><a :class="{ 'active': aboutActive }" @click="viewAbout">about</a></li>
          <li><a :class="{ 'active': technicalActive }" @click="viewTechnical">skills</a></li>
          <li><a :class="{ 'active': projectsActive }" @click="viewProjects">projects</a></li>
          <li><a href="#">resume</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import Home from './components/Home'
import About from './components/About'
import Technical from './components/Technical'
import Projects from './components/Projects'

export default {
  name: 'app',
  data () {
    return {
      currentView: 'Home'
    }
  },
  methods: {
    viewHome: function () {
      this.currentView = 'Home'
    },
    viewAbout: function () {
      this.currentView = 'About'
    },
    viewTechnical: function () {
      this.currentView = 'Technical'
    },
    viewProjects: function () {
      this.currentView = 'Projects'
    }
  },
  computed: {
    homeActive: function () {
      return this.currentView === 'Home'
    },
    aboutActive: function () {
      return this.currentView === 'About'
    },
    technicalActive: function () {
      return this.currentView === 'Technical'
    },
    projectsActive: function () {
      return this.currentView === 'Projects'
    }
  },
  components: {
    Home,
    About,
    Technical,
    Projects
  }
}
</script>

<style src="./assets/styles/global.sass" lang="sass"></style>
