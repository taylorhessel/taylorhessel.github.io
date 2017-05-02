<template>
  <div class="view projects ink-flex">
    <div class="column-group push-center">
      <div class="project twitch">
        <div class="project-inner">
          <h3>TwitchMonster</h3>
          <p class="tech">HTML, CSS, JavaScript, jQuery, Twitch API</p>
          <p class="desc">Watch and interact with up to four Twitch streams simultaneously</p>
          <div class="icon-wrapper">
            <a href="https://twitchmonster-9faa0.firebaseapp.com/" target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i></a> <a href="https://github.com/taylorhessel/g31-twitchmonster" target="_blank"><i class="fa fa-code-fork" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
      <div class="project office">
        <div class="project-inner">
          <h3>Office Anywhere</h3>
          <p class="tech">Bootstrap, Node.js, Express, PostgreSQL, Google Maps API, Workfrom API</p>
          <p class="desc">Find and research workplaces, and share experiences with other Office Anywhere users</p>
          <div class="icon-wrapper">
            <a href="https://office-anywhere.herokuapp.com/" target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i></a> <a href="https://github.com/bengio777/office-anywhere" target="_blank"><i class="fa fa-code-fork" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
      <div class="project trust">
        <div class="project-inner">
          <h3>tRUST</h3>
          <p class="tech">SASS, Node.js, Express, PostgreSQL, Passport, Vue.js, webpack</p>
          <p class="desc">Group up with other Rust players to improve chances of survival</p>
          <div class="icon-wrapper">
            <a href="https://trust-social-networking.herokuapp.com/" target="_blank"><i class="fa fa-external-link" aria-hidden="true"></i></a> <a href="https://github.com/taylorhessel/tRUST" target="_blank"><i class="fa fa-code-fork" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'projects'
}
</script>
