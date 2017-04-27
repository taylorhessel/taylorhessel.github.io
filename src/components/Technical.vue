<template>
  <div class="view technical ink-flex">
    <div class="column-group push-center technical-wrapper">
      <div class="tiny-100 small-100 medium-100 large-33 xlarge-33 skill-wrapper">
        <h2 class="foundation">foundation</h2>
        <div class="column-group">
          <div class="tiny-100 small-100 medium-100 large-50 xlarge-50">
            <ul class="foundation-1">
              <li v-for="skill in foundation1">{{skill}}</li>
            </ul>
          </div>
          <div class="tiny-100 small-100 medium-100 large-50 xlarge-50">
            <ul class="foundation-2">
              <li v-for="skill in foundation2">{{skill}}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="tiny-100 small-100 medium-100 large-34 xlarge-34 skill-wrapper">
        <h2>exposure to</h2>
        <ul>
          <li v-for="skill in exposure">{{skill}}</li>
        </ul>
      </div>
      <div class="tiny-100 small-100 medium-100 large-33 xlarge-33 skill-wrapper">
        <h2>ready to learn</h2>
        <ul>
          <li v-for="skill in queue">{{skill}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Static from '../static'

export default {
  name: 'technical',
  data () {
    return {
      foundation1: Static.foundation1,
      foundation2: Static.foundation2,
      exposure: Static.exposure,
      queue: Static.queue
    }
  }
}
</script>
