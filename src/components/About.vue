<template>
  <div class="view about ink-flex">
    <div class="column-group push-center">
      <div class="tiny-100 small-100 medium-100 large-40 xlarge-40 bio">
        <img src="../assets/images/taylor.jpg" alt="hey, that's me">
        <p>My name is <a href="https://www.linkedin.com/in/taylor-hessel-44615848/" target="blank">Taylor Hessel</a>, and I'm a full-stack developer living in Denver, CO. I like gaming and cooking, and I love my cats. <a href="https://github.com/taylorhessel" target="blank">Coding</a> is pretty fun, too.</p>
      </div>
      <div class="tiny-100 small-100 medium-100 large-60 xlarge-60">
        <div class="work-history">
          <template v-for="job in jobs">
            <div class="job">
              <h4 class="job-employer">{{job.employer}} - <span class="job-title">{{job.title}}</span></h4>
              <p class="job-date">{{job.date}}</p>
              <p class="job-desc">{{job.description}}</p>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Static from '../static'

export default {
  name: 'about',
  data () {
    return {
      location: Static.location,
      personal: Static.personal,
      interests: Static.interests,
      jobs: Static.jobs
    }
  }
}
</script>
