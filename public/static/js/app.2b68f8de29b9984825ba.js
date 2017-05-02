webpackJsonp([0],[,function(t,e,a){"use strict";e.a={title:"full stack developer",location:"Denver, CO",personal:"Suh? My name is <span>Taylor Hessel</span>, and I'm a web developer living in Denver, CO. I like gaming and cooking, and I love my cats. Coding is pretty fun, too.",jobs:[{employer:"Galvanize Web Development Immersive",title:"Student",date:"Graduated December 2016",description:"  Completed individual and group projects following the Scrum methodology, developed features in unfamiliar environments, and presented lightning talks."},{employer:"booj",title:"Frontend Support Manager",date:"June 2013 - June 2015",description:"Trained and managed a small team of frontend developers tasked with fixing bugs and completing new projects for clients with established websites. Collaborated with account managers to deliver clients with best possible solutions. Performed frontend and backend maintenance work alongside team."},{employer:"Beecher Carlson",title:"Contract Employee",date:"October 2012 - June 2013",description:"Digital backup and storage of captive management documents utilizing the enterprise-level content management system, ImageRight."}],foundation1:["AJAX","AngularJS","Bash","Bootstrap","CSS","Express","Firebase","Git/Github","Heroku","HTML","JavaScript"],foundation2:["jQuery","Knex.js","Node.js","Oauth","Passport","Pivotal Tracker","PostgreSQL","SASS","Scrum","Vue.js","webpack"],exposure:["Chai","Continuous Deployment","Continuous Integration","Go","Mocha","MySQL","Open Source Projects","PHP","SVN"],queue:["Ember","Java","React","Redux","Vuex"]}},function(t,e,a){a(10);var s=a(0)(a(5),a(17),null,null);t.exports=s.exports},,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(3),i=a(2),n=a.n(i);s.a.config.productionTip=!1,new s.a({el:"#app",template:"<App/>",components:{App:n.a}})},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(13),i=a.n(s),n=a(12),r=a.n(n),o=a(15),l=a.n(o),c=a(14),u=a.n(c);e.default={name:"app",data:function(){return{currentView:"Home"}},methods:{viewHome:function(){this.currentView="Home"},viewAbout:function(){this.currentView="About"},viewTechnical:function(){this.currentView="Technical"},viewProjects:function(){this.currentView="Projects"}},computed:{homeActive:function(){return"Home"===this.currentView},aboutActive:function(){return"About"===this.currentView},technicalActive:function(){return"Technical"===this.currentView},projectsActive:function(){return"Projects"===this.currentView}},components:{Home:i.a,About:r.a,Technical:l.a,Projects:u.a}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(1);e.default={name:"about",data:function(){return{location:s.a.location,personal:s.a.personal,interests:s.a.interests,jobs:s.a.jobs}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(1);e.default={name:"home",data:function(){return{title:s.a.title}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"projects"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(1);e.default={name:"technical",data:function(){return{foundation1:s.a.foundation1,foundation2:s.a.foundation2,exposure:s.a.exposure,queue:s.a.queue}}}},function(t,e){},function(t,e,a){t.exports=a.p+"static/img/taylor.bc4790c.jpg"},function(t,e,a){var s=a(0)(a(6),a(19),null,null);t.exports=s.exports},function(t,e,a){var s=a(0)(a(7),a(20),null,null);t.exports=s.exports},function(t,e,a){var s=a(0)(a(8),a(16),null,null);t.exports=s.exports},function(t,e,a){var s=a(0)(a(9),a(18),null,null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"view projects ink-flex"},[a("div",{staticClass:"column-group push-center"},[a("div",{staticClass:"project twitch"},[a("div",{staticClass:"project-inner"},[a("h3",[t._v("TwitchMonster")]),t._v(" "),a("p",{staticClass:"tech"},[t._v("HTML, CSS, JavaScript, jQuery, Twitch API")]),t._v(" "),a("p",{staticClass:"desc"},[t._v("Watch and interact with up to four Twitch streams simultaneously")]),t._v(" "),a("div",{staticClass:"icon-wrapper"},[a("a",{attrs:{href:"https://twitchmonster-9faa0.firebaseapp.com/",target:"_blank"}},[a("i",{staticClass:"fa fa-external-link",attrs:{"aria-hidden":"true"}})]),t._v(" "),a("a",{attrs:{href:"https://github.com/taylorhessel/g31-twitchmonster",target:"_blank"}},[a("i",{staticClass:"fa fa-code-fork",attrs:{"aria-hidden":"true"}})])])])]),t._v(" "),a("div",{staticClass:"project office"},[a("div",{staticClass:"project-inner"},[a("h3",[t._v("Office Anywhere")]),t._v(" "),a("p",{staticClass:"tech"},[t._v("Bootstrap, Node.js, Express, PostgreSQL, Google Maps API, Workfrom API")]),t._v(" "),a("p",{staticClass:"desc"},[t._v("Find and research workplaces, and share experiences with other Office Anywhere users")]),t._v(" "),a("div",{staticClass:"icon-wrapper"},[a("a",{attrs:{href:"https://office-anywhere.herokuapp.com/",target:"_blank"}},[a("i",{staticClass:"fa fa-external-link",attrs:{"aria-hidden":"true"}})]),t._v(" "),a("a",{attrs:{href:"https://github.com/bengio777/office-anywhere",target:"_blank"}},[a("i",{staticClass:"fa fa-code-fork",attrs:{"aria-hidden":"true"}})])])])]),t._v(" "),a("div",{staticClass:"project trust"},[a("div",{staticClass:"project-inner"},[a("h3",[t._v("tRUST")]),t._v(" "),a("p",{staticClass:"tech"},[t._v("SASS, Node.js, Express, PostgreSQL, Passport, Vue.js, webpack")]),t._v(" "),a("p",{staticClass:"desc"},[t._v("Group up with other Rust players to improve chances of survival")]),t._v(" "),a("div",{staticClass:"icon-wrapper"},[a("a",{attrs:{href:"https://trust-social-networking.herokuapp.com/",target:"_blank"}},[a("i",{staticClass:"fa fa-external-link",attrs:{"aria-hidden":"true"}})]),t._v(" "),a("a",{attrs:{href:"https://github.com/taylorhessel/tRUST",target:"_blank"}},[a("i",{staticClass:"fa fa-code-fork",attrs:{"aria-hidden":"true"}})])])])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"main-wrapper scrollbar-macosx"},[t._m(0),t._v(" "),a("transition",{attrs:{name:"fade",mode:"out-in"}},[a(t.currentView,{tag:"component"})],1),t._v(" "),a("nav",{staticClass:"ink-navigation bottom"},[a("ul",{staticClass:"menu horizontal"},[a("li",[a("a",{class:{active:t.homeActive},on:{click:t.viewHome}},[t._v("home")])]),t._v(" "),a("li",[a("a",{class:{active:t.aboutActive},on:{click:t.viewAbout}},[t._v("about")])]),t._v(" "),a("li",[a("a",{class:{active:t.technicalActive},on:{click:t.viewTechnical}},[t._v("skills")])]),t._v(" "),a("li",[a("a",{class:{active:t.projectsActive},on:{click:t.viewProjects}},[t._v("projects")])]),t._v(" "),t._m(1)])])],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"ink-navigation top"},[a("ul",{staticClass:"menu horizontal"},[a("li",[a("a",{attrs:{href:"https://www.linkedin.com/in/taylorhessel/",target:"_blank"}},[a("i",{staticClass:"fa fa-linkedin",attrs:{"aria-hidden":"true"}})])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/taylorhessel",target:"_blank"}},[a("i",{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}})])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"/static/docs/thessel_resume.pdf",target:"_blank"}},[t._v("resume")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"view technical ink-flex"},[a("div",{staticClass:"column-group push-center technical-wrapper"},[a("div",{staticClass:"tiny-100 small-100 medium-100 large-33 xlarge-33 skill-wrapper"},[a("h2",{staticClass:"foundation"},[t._v("foundation")]),t._v(" "),a("div",{staticClass:"column-group"},[a("div",{staticClass:"tiny-100 small-100 medium-100 large-50 xlarge-50"},[a("ul",{staticClass:"foundation-1"},t._l(t.foundation1,function(e){return a("li",[t._v(t._s(e))])}))]),t._v(" "),a("div",{staticClass:"tiny-100 small-100 medium-100 large-50 xlarge-50"},[a("ul",{staticClass:"foundation-2"},t._l(t.foundation2,function(e){return a("li",[t._v(t._s(e))])}))])])]),t._v(" "),a("div",{staticClass:"tiny-100 small-100 medium-100 large-34 xlarge-34 skill-wrapper"},[a("h2",[t._v("exposure to")]),t._v(" "),a("ul",t._l(t.exposure,function(e){return a("li",[t._v(t._s(e))])}))]),t._v(" "),a("div",{staticClass:"tiny-100 small-100 medium-100 large-33 xlarge-33 skill-wrapper"},[a("h2",[t._v("ready to learn")]),t._v(" "),a("ul",t._l(t.queue,function(e){return a("li",[t._v(t._s(e))])}))])])])},staticRenderFns:[]}},function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"view about ink-flex"},[a("div",{staticClass:"column-group push-center"},[t._m(0),t._v(" "),a("div",{staticClass:"tiny-100 small-100 medium-100 large-60 xlarge-60"},[a("div",{staticClass:"work-history"},[t._l(t.jobs,function(e){return[a("div",{staticClass:"job"},[a("h4",{staticClass:"job-employer"},[t._v(t._s(e.employer)+" - "),a("span",{staticClass:"job-title"},[t._v(t._s(e.title))])]),t._v(" "),a("p",{staticClass:"job-date"},[t._v(t._s(e.date))]),t._v(" "),a("p",{staticClass:"job-desc"},[t._v(t._s(e.description))])])]})],2)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tiny-100 small-100 medium-100 large-40 xlarge-40 bio"},[s("img",{attrs:{src:a(11),alt:"hey, that's me"}}),t._v(" "),s("p",[t._v("My name is "),s("a",{attrs:{href:"https://www.linkedin.com/in/taylorhessel/",target:"blank"}},[t._v("Taylor Hessel")]),t._v(", and I'm a full stack developer living in Denver, CO. I like gaming and cooking, and I love my cats. "),s("a",{attrs:{href:"https://github.com/taylorhessel",target:"blank"}},[t._v("Coding")]),t._v(" is pretty fun, too.")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"view home ink-flex push-center"},[a("transition-group",{attrs:{tag:"div",name:"fade",appear:""}},[a("h1",{key:0,staticClass:"me"},[t._v("Taylor Hessel")]),t._v(" "),a("h2",{key:1,staticClass:"title"},[t._v(t._s(t.title))])])],1)},staticRenderFns:[]}}],[4]);
//# sourceMappingURL=app.2b68f8de29b9984825ba.js.map