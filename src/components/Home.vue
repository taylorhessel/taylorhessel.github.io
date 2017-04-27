<template>
  <div class="view home ink-flex push-center">
    <transition-group tag="div" name="fade" appear>
      <h1 :key="0" class="me">Taylor Hessel</h1>
      <h2 :key="1" class="title">{{title}}</h2>
    </transition-group>
  </div>
</template>

<script>
import Static from '../static'

export default {
  name: 'home',
  data () {
    return {
      title: Static.title
    }
  }
}
</script>
