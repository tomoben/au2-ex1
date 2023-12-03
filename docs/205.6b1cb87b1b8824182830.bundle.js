"use strict";(self.webpackChunkau2_ex1=self.webpackChunkau2_ex1||[]).push([[205],{3086:(t,e,s)=>{s.d(e,{Z:()=>o});var a=s(8081),i=s.n(a),r=s(3645),n=s.n(r)()(i());n.push([t.id,".users-view .header{background-color:#fff;padding:24px 0;z-index:2}.users-view .user-box{cursor:pointer;margin-bottom:20px;text-align:center}.users-view .user-box .login:hover{color:#999}.users-view .user-box .avatar-box .avatar{border-radius:2px;box-shadow:6px 6px 6px #aaa;width:100%}.users-view .scene{perspective:600px}.users-view .scene .card-panel{height:370px;margin-bottom:20px;position:relative;transform-style:preserve-3d;transition-duration:1s;transition-property:transform;width:100%}.users-view .scene .card-panel.is-flipped{transform:rotateY(180deg)}.users-view .scene .card-panel .card{backface-visibility:hidden;border-radius:4px;box-shadow:6px 6px 6px #aaa;height:100%;position:absolute;width:100%}.users-view .scene .card-panel .card.back{background-color:beige;overflow:auto;transform:rotateY(180deg)}.users-view .scene .card-panel .card .card-img-top{border-radius:4px 4px 0 0;height:260px}.users-view .scene .card-panel .card .card-img-overlay{height:40px;padding:5px}.users-view .scene .card-panel .card .card-body .gh-link{font-size:1rem;text-decoration:none}.users-view .scene .card-panel .card .card-body .card-text{font-size:80%;margin-top:8px}.users-view .scene .card-panel .card .card-footer{display:grid;grid-auto-flow:column;margin-bottom:0}.users-view .scene .card-panel .card .card-footer .icon{color:#5858c1;cursor:pointer;justify-self:start}.users-view .scene .card-panel .card .card-footer .user-id{justify-self:end;cursor:default}.users-view .modal user-repos repo-list-item .top-container{padding:0}.users-view .modal user-repos repo-list-item .top-container .last-commit{font-size:12px}.users-view .modal user-repos repo-list-item .top-container .collapse-trigger{font-size:12px}.users-view .modal user-repos repo-list-item .top-container .description{font-size:12px}.users-view .modal user-repos repo-list-item .repo-details{font-size:.8rem;padding-top:8px}.users-view .modal user-repos repo-list-item .repo-details .row{padding:4px 0}.users-view .modal user-repos repo-list-item .repo-details .row .value.contributors a{text-decoration:none}.users-view .modal user-repos repo-list-item .repo-details .row .value.languages .progress:not(:first-of-type){margin-top:4px}.users-view .modal user-repos repo-list-item .gh-link{font-size:.8rem;text-decoration:none}.users-view .selected-user .avatar-box .avatar{box-shadow:6px 6px 6px #aaa;width:100%}",""]);const o=n},3205:(t,e,s)=>{s.r(e),s.d(e,{Users:()=>ft});var a={};s.r(a),s.d(a,{default:()=>g,dependencies:()=>b,name:()=>p,register:()=>v,template:()=>u});var i={};s.r(i),s.d(i,{RepoListItem:()=>x});var r={};s.r(r),s.d(r,{default:()=>$,dependencies:()=>L,name:()=>k,register:()=>j,template:()=>R});var n={};s.r(n),s.d(n,{UserRepos:()=>O});var o={};s.r(o),s.d(o,{default:()=>I,dependencies:()=>S,name:()=>E,register:()=>M,template:()=>C});var l={};s.r(l),s.d(l,{User:()=>q});var d={};s.r(d),s.d(d,{default:()=>pt,dependencies:()=>ut,name:()=>dt,register:()=>bt,template:()=>ct});var c=s(9134);const p="repo-list-item",u='<div class="container top-container">\n\t<div class="row">\n\t\t<div class="col">\n\t\t\t${repo.name}\n\t\t\t<a class="icon-link gh-link" href="${repo.html_url}" data-bs-toggle="tooltip" data-bs-title="Repository page" target="_blank" external><i class="fa-brands fa-github"></i></a>\n\t\t</div>\n\t\t<div class="col-3 text-end text-secondary last-commit">\n\t\t\tLast commit: ${repo.pushed_at_date.toLocaleDateString()}\n\t\t</div>\n\t\t<div class="col-1 text-end collapse-trigger">\n\t\t\t<i role="button" class="fa-solid fa-chevron-down" data-bs-toggle="collapse" data-bs-target="#repo-${repo.id}"></i>\n\t\t</div>\n\t</div>\n\t<div class="row">\n\t\t<div class="col-8 text-secondary description">${repo.description}</div>\n\t</div>\n</div>\n\n<div id="repo-${repo.id}" class="collapse repo-details" element.ref="collapse">\n\t<div class="container">\n\t\t<div if.bind="parentRepo" class="row">\n\t\t\t<div class="col-3"><span class="caption fw-semibold">Forked from:</span></div>\n\t\t\t<div class="col">\n\t\t\t\t<a class="icon-link gh-link" href="${parentRepo.html_url}" data-bs-toggle="tooltip" data-bs-title="Parent repository page" target="_blank" external>${parentRepo.full_name}</a>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="row">\n\t\t\t<div class="col-3"><span class="caption fw-semibold">Contributors (${contributors.length}):</span></div>\n\t\t\t<div class="col">\n\t\t\t\t<span class="value contributors">\n\t\t\t\t\t<a repeat.for="contributor of contributors" last.class="$last" href="${contributor.html_url}" target="_blank" external>${contributor.login}<span if.bind="!$last" class="separator">, </span></a>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="row">\n\t\t\t<div class="col-3"><span class="caption fw-semibold">Languages:</span></div>\n\t\t\t<div class="col-6">\n\t\t\t\t<div class="value languages">\n\t\t\t\t\t<div repeat.for="language of sortedLanguages" class="progress bg-light" role="progressbar" aria-valuenow="${language[1]}" aria-valuemin="0" aria-valuemax="totalLanguages">\n\t\t\t\t\t\t<div class="progress-bar bg-warning-subtle text-start overflow-visible text-black px-2" width.style="(100 * language[1] / totalLanguages).toFixed(2) + \'%\'">${language[0]} (${(100 * language[1] / totalLanguages).toFixed(2)}%)</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n',g=u,b=[];let f;function v(t){f||(f=c.b_N.define({name:p,template:u,dependencies:b})),t.register(f)}var h=s(9344),m=s(3909),w=(s(1932),function(t,e,s,a){var i,r=arguments.length,n=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,a);else for(var o=t.length-1;o>=0;o--)(i=t[o])&&(n=(r<3?i(n):r>3?i(e,s,n):i(e,s))||n);return r>3&&n&&Object.defineProperty(e,s,n),n}),y=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let x=class{constructor(t){this.rest=t,this.sortedLanguages=[],this.totalLanguages=0}attached(){this.collapse.addEventListener("show.bs.collapse",(()=>{void 0===this.languages&&(this.getRepo(),this.getContributors(),this.getLanguages())}))}async getRepo(){const t=await this.rest.getRepo(this.repo.owner.login,this.repo.name);this.parentRepo=t.parent}async getContributors(){this.contributors=(await this.rest.getRepoContributors(this.repo.owner.login,this.repo.name)).filter((t=>t.login!==this.repo.owner.login))}async getLanguages(){const t=await this.rest.getRepoLanguages(this.repo.owner.login,this.repo.name);this.sortedLanguages=Object.entries(t).sort(((t,e)=>e[1]-t[1])),this.totalLanguages=Object.values(t).reduce(((t,e)=>t+e),0),this.languages=Object.keys(t).sort(((t,e)=>t.toLowerCase().localeCompare(e.toLowerCase()))).join(", ")||"N/A"}};w([c.ExJ,y("design:type",Object)],x.prototype,"user",void 0),w([c.ExJ,y("design:type",Object)],x.prototype,"repo",void 0),x=w([(0,c.MoW)(a),(0,h.f3)(m.k),y("design:paramtypes",[m.k])],x);const k="user-repos",R='\n\n<div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">\n\t<div class="modal-content">\n\t\t<div class="modal-header">\n\t\t\t<h1 class="modal-title fs-5" id="reposModalLabel">${user.name} | Public Repositories<span if.bind="repos?.length"> (${repos.length})</span></h1>\n\t\t\t<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n\t\t</div>\n\t\t<div class="modal-body">\n\t\t\t<div if.bind="!repos?.length" class="d-flex justify-content-center">\n\t\t\t\t<div class="spinner-border" role="status">\n\t\t\t\t\t<span class="visually-hidden">Loading...</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<ul class="list-group list-group-flush">\n\t\t\t\t<li repeat.for="repo of repos" class="list-group-item">\n\t\t\t\t\t<repo-list-item user.bind="user" repo.bind="repo"></repo-list-item>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<div class="modal-footer">\n\t\t\t<button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>\n\t\t</div>\n\t</div>\n</div>',$=R,L=[i];let U;function j(t){U||(U=c.b_N.define({name:k,template:R,dependencies:L})),t.register(U)}var _=function(t,e,s,a){var i,r=arguments.length,n=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,a);else for(var o=t.length-1;o>=0;o--)(i=t[o])&&(n=(r<3?i(n):r>3?i(e,s,n):i(e,s))||n);return r>3&&n&&Object.defineProperty(e,s,n),n},P=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};let O=class{constructor(){}};_([c.ExJ,P("design:type",Object)],O.prototype,"user",void 0),_([c.ExJ,P("design:type",Array)],O.prototype,"repos",void 0),O=_([(0,c.MoW)(r),P("design:paramtypes",[])],O);const E="user",C='\n\n\x3c!-- <div class="user-box" click.trigger="getUser(user.login)">\n\t<div class="login">${user.login}</div>\n\t<div class="avatar-box">\n\t\t<img class="avatar" src="${user.avatar_url}" alt="">\n\t</div>\n</div> --\x3e\n<div class="scene">\n\t<div element.ref="cardPanel" class="card-panel">\n\t\t<div class="card">\n\t\t\t<img src="${userListItem.avatar_url}" alt="Avatar" class="card-img-top">\n\t\t\t<div class="card-body">\n\t\t\t\t<h5 class="card-title">\n\t\t\t\t\t${userListItem.login}\n\t\t\t\t\t<a class="icon-link gh-link" href="${userListItem.html_url}" data-bs-toggle="tooltip" data-bs-title="User\'s Github page" target="_blank" external><i class="fa-brands fa-github"></i></a>\n\t\t\t\t</h5>\n\t\t\t</div>\n\t\t\t<h5 class="card-footer">\n\t\t\t\t<i class="fa-regular fa-file-text icon card-link" data-bs-toggle="tooltip" data-bs-title="Flip card and show user\'s bio" data-testid="flipToBack" click.trigger="flipClicked($event, true)"></i>\n\t\t\t\t<span class="badge rounded-pill text-bg-dark user-id">${userListItem.id}</span>\n\t\t\t</h5>\n\t\t</div>\n\t\t<div if.bind="!!user" class="card back">\n\t\t\t<div class="card-body">\n\t\t\t\t<h5 class="card-title user-name">${user.name}</h5>\n\t\t\t\t<div if.bind="user.location" class="card-text user-location">${user.location}</div>\n\t\t\t\t<div if.bind="user.bio" class="card-text user-bio">${user.bio}</div>\n\t\t\t\t<div if.bind="user.blog" class="card-text user-blog"><a data-bs-toggle="tooltip" data-bs-title="${user.blog}" href="${user.blog}" target="_blank" external>Blog</a></div>\n\t\t\t\t<div if.bind="user.public_repos" class="card-text user-public-repos">\n\t\t\t\t\tPublic repositories:\n\t\t\t\t\t<span data-bs-toggle="tooltip" data-bs-title="Show list">\n\t\t\t\t\t\t<a if.bind="user.public_repos" href="" class="link-underline link-underline-opacity-0 link-underline-opacity-75-hover" data-bs-toggle="modal" data-bs-target="#reposModal-${userListItem.id}">${user.public_repos}</a>\n\t\t\t\t\t</span>\n\t\t\t\t\t<span else>None</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<h5 class="card-footer"><i class="fa-regular fa-id-badge icon card-link" data-bs-toggle="tooltip" data-bs-title="Flip card and show user\'s avatar" data-testid="flipToFront" click.trigger="flipClicked($event, false)"></i></h5>\n\t\t</div>\n\t</div>\n</div>\n\n<div id="reposModal-${userListItem.id}" class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" element.ref="reposModal" aria-labelledby="reposModalLabel" aria-hidden="true">\n\t<user-repos if.bind="!!userRepos" user.bind="user" repos.bind="userRepos"></user-repos>\n</div>\n',I=C,S=[n];let T;function M(t){T||(T=c.b_N.define({name:E,template:C,dependencies:S})),t.register(T)}var A,F,z,N,W,D,J=s(3138),Z=function(t,e,s,a){var i,r=arguments.length,n=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,a);else for(var o=t.length-1;o>=0;o--)(i=t[o])&&(n=(r<3?i(n):r>3?i(e,s,n):i(e,s))||n);return r>3&&n&&Object.defineProperty(e,s,n),n},G=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},B=function(t,e,s,a){if("a"===s&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!a:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===s?a:"a"===s?a.call(t):a?a.value:e.get(t)},Y=function(t,e,s,a,i){if("m"===a)throw new TypeError("Private method is not writable");if("a"===a&&!i)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===a?i.call(t,s):i?i.value=s:e.set(t,s),s};let q=class{constructor(t,e){A.add(this),this.ea=t,this.rest=e,F.set(this,"is-flipped"),z.set(this,!1),this.userRepos=[]}created(){this.subscribe()}attached(){Y(this,z,!1,"f"),B(this,A,"m",D).call(this),this.reposModal.addEventListener("show.bs.modal",(async()=>{this.userRepos.length||(this.userRepos=await this.rest.getAllUserRepos(this.user.login,this.user.public_repos))}))}subscribe(){this.ea.subscribe("flipToFront",(()=>{var t;null===(t=this.cardPanel)||void 0===t||t.classList.remove(B(this,F,"f"))}))}publish(t){this.ea.publish("userSelected",t)}async flipClicked(t,e){t.stopPropagation(),J.u.getInstance(t.target).hide(),e&&await B(this,A,"m",N).call(this),B(this,A,"m",W).call(this)}};F=new WeakMap,z=new WeakMap,A=new WeakSet,N=async function(){B(this,z,"f")||(this.user=await this.rest.getUser(this.userListItem.login),Y(this,z,!0,"f"))},W=function(){var t;null===(t=this.cardPanel)||void 0===t||t.classList.toggle(B(this,F,"f")),B(this,A,"m",D).call(this)},D=function(){document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((t=>new J.u(t)))},Z([c.ExJ,G("design:type",Object)],q.prototype,"userListItem",void 0),q=Z([(0,c.MoW)(o),(0,h.f3)(h.hS,m.k),G("design:paramtypes",[h.hS,m.k])],q);var H=s(3379),K=s.n(H),Q=s(7795),V=s.n(Q),X=s(569),tt=s.n(X),et=s(3565),st=s.n(et),at=s(9216),it=s.n(at),rt=s(4589),nt=s.n(rt),ot=s(3086),lt={};lt.styleTagTransform=nt(),lt.setAttributes=st(),lt.insert=tt().bind(null,"head"),lt.domAPI=V(),lt.insertStyleElement=it(),K()(ot.Z,lt),ot.Z&&ot.Z.locals&&ot.Z.locals;const dt="users",ct='\n\n\n<div if.bind="!apiError" class="container-fluid users-view" loading.class="isLoading">\n\t<div if.bind="!isLoading" class="row header position-sticky top-0">\n\t\t<div class="col-md-8">\n\t\t\t<h4>\n\t\t\t\t<span if.bind="firstUser > 0">Showing <span data-testid="usersInPage">${users.length}</span> Github users (ID #<span data-testid="firstUser">${firstUser}</span> to #<span data-testid="lastUser">${lastUser}</span>)</span>\n\t\t\t\t<button class="btn btn-primary" click.trigger="getUsers()">Next</button>\n\t\t\t\t<button class="btn btn-primary" click.trigger="flipUsersToFront()">Show All Avatars</button>\n\t\t\t</h4>\n\t\t</div>\n\t</div>\n\t<section class="row" data-testid="usersSection">\n\t\t<div class="col-4 col-md-3 col-lg-2" repeat.for="user of users">\n\t\t\t<user user-list-item.bind="user" data-testid="user-${user.id}"></user>\n\t\t</div>\n\t</section>\n\t<div class="row" if.bind="!!selectedUser">\n\t\t<div class="col-sm-4">\n\t\t\t<div class="selected-user">\n\t\t\t\t<div class="avatar-box">\n\t\t\t\t\t<img class="avatar" src.bind="selectedUser.avatar_url" alt="">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="col-sm-8">\n\t\t\t<div class="user-name" show.bind="selectedUser.name">${selectedUser.name}</div>\n\t\t\t<div class="user-location" show.bind="selectedUser.location">${selectedUser.location}</div>\n\t\t\t<div class="user-bio" show.bind="selectedUser.bio">${selectedUser.bio}</div>\n\t\t\t<div class="user-blog" show.bind="selectedUser.blog"><a href.bind="selectedUser.blog" target="_blank">${selectedUser.blog}</a></div>\n\t\t</div>\n\t</div>\n</div>\n\n<div if.bind="apiError" class="container-fluid users-view">\n\tGithub API calls rate limit exceeded\n</div>',pt=ct,ut=[l];let gt;function bt(t){gt||(gt=c.b_N.define({name:dt,template:ct,dependencies:ut})),t.register(gt)}let ft=class{constructor(t,e){this.ea=t,this.rest=e,this.users=[],this.firstUser=0,this.lastUser=0,this.isLoading=!0,this.apiError=!1}created(){this.subscribe()}attached(){this.getUsers()}subscribe(){this.ea.subscribe("userSelected",(t=>{this.selectedUser=t})),this.ea.subscribe("api:github:rateLimit",(t=>{this.apiError=t}))}async getUsers(){this.isLoading=!0;const t=await this.rest.getUsers(`?since=${this.lastUser}`);this.users=t,this.users.length&&(this.firstUser=this.users[0].id,this.lastUser=this.users[this.users.length-1].id),this.isLoading=!1}flipUsersToFront(){this.ea.publish("flipToFront")}};ft=function(t,e,s,a){var i,r=arguments.length,n=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,s):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,s,a);else for(var o=t.length-1;o>=0;o--)(i=t[o])&&(n=(r<3?i(n):r>3?i(e,s,n):i(e,s))||n);return r>3&&n&&Object.defineProperty(e,s,n),n}([(0,c.MoW)(d),(0,h.f3)(h.hS,m.k),function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}("design:paramtypes",[h.hS,m.k])],ft)}}]);