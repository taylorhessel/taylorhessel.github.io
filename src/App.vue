<template>
  <div id="app">
    <h1>App.vue, this is static.</h1>
    <span @click="viewAbout">About</span> <span @click="viewTechnical">Technical</span> <span @click="viewResume">Resume</span> <span @click="viewProjects">Projects</span> <span @click="viewContact">Contact</span>
    <component :is="currentView"></component>
  </div>
</template>

<script>
import About from './components/About'
import Technical from './components/Technical'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default {
  name: 'app',
  data () {
    return {
      currentView: 'About'
    }
  },
  methods: {
    viewAbout: function () {
      this.currentView = 'About'
    },
    viewTechnical: function () {
      this.currentView = 'Technical'
    },
    viewResume: function () {
      this.currentView = 'Resume'
    },
    viewProjects: function () {
      this.currentView = 'Projects'
    },
    viewContact: function () {
      this.currentView = 'Contact'
    }
  },
  components: {
    About,
    Technical,
    Resume,
    Projects,
    Contact
  }
}
</script>

<style src="./assets/styles/global.sass" lang="sass"></style>
