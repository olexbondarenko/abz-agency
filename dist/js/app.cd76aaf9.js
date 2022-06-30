(function(){"use strict";var e={9627:function(e,s,t){var r=t(8935),a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{attrs:{id:"app"}},[t("HeaderComponent"),t("main",[t("IntroComponent"),t("UserList"),t("SignUpForm")],1)],1)},i=[],n=function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("header",{staticClass:"header",attrs:{id:"header"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"header__flex"},[r("a",{staticClass:"header__logo",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),e.scrollTo("#intro")}}},[r("img",{attrs:{src:t(2835),alt:"Logo"}})]),r("nav",{staticClass:"header__nav"},[r("a",{staticClass:"header__nav-item button",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),e.scrollTo("#user-list")}}},[e._v("Users")]),r("a",{staticClass:"header__nav-item button",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),e.scrollTo("#sign-up")}}},[e._v("Sign up")])])])])])},o=[],l={methods:{scrollTo(e){let s=document.querySelector(e).offsetTop,t=document.querySelector("#header").offsetHeight;window.scrollTo({top:s-t,behavior:"smooth"})}}},u={name:"HeaderComponent",mixins:[l]},c=u,h=t(1001),p=(0,h.Z)(c,n,o,!1,null,"6b2d59eb",null),d=p.exports,m=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",{staticClass:"intro",attrs:{id:"intro"}},[t("div",{staticClass:"container"},[t("div",{staticClass:"intro__main"},[t("div",{staticClass:"intro__main-content"},[t("h1",{staticClass:"intro__main-title"},[e._v(" Test assignment for front-end developer ")]),t("p",{staticClass:"intro__main-text"},[e._v(" What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving. ")]),t("a",{staticClass:"button",attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),e.scrollTo("#sign-up")}}},[e._v("Sign up")])])])])])},g=[],f={name:"IntroComponent",mixins:[l]},v=f,_=(0,h.Z)(v,m,g,!1,null,"fcc96636",null),E=_.exports,b=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",{staticClass:"user-list",attrs:{id:"user-list"}},[t("div",{staticClass:"container"},[t("h1",{staticClass:"user-list__title"},[e._v("Working with GET request")]),t("div",{staticClass:"user-list__flex"},e._l(e.getAllUsers,(function(e,s){return t("div",{key:s,staticClass:"user-list__col"},[t("UserCard",{attrs:{user:e}})],1)})),0),t("div",{staticClass:"user-list__more"},[e.isAvaliableMore?t("a",{staticClass:"button",class:{disabled:!e.isDataLoaded},attrs:{href:"#"},on:{click:function(s){return s.preventDefault(),e.showMore()}}},[e._v(" Show more ")]):e._e()])])])},C=[],y=t(4665),P=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"user-card"},[t("div",{staticClass:"user-card__avatar"},[t("img",{attrs:{src:e.user.photo,alt:"User"}})]),t("div",{staticClass:"user-card__name",attrs:{"data-title":e.user.name}},[t("span",[e._v(e._s(e.user.name))])]),t("div",{staticClass:"user-card__detail"},[t("p",[e._v(e._s(e.user.position))]),t("p",{attrs:{"data-title":e.user.email}},[t("span",[e._v(e._s(e.user.email))])]),t("p",[e._v(e._s(e.user.phone))])])])},U=[],x={name:"UserCard",props:{user:{type:Object,required:!0}}},S=x,M=(0,h.Z)(S,P,U,!1,null,"bfa6fdf0",null),w=M.exports,k={name:"UserList",data(){return{isDataLoaded:!0,isAvaliableMore:!0}},components:{UserCard:w},computed:{...(0,y.Se)(["getAllUsers"])},methods:{...(0,y.OI)(["setUserData","updateCurrentPage"]),...(0,y.nv)(["getUsers"]),async showMore(){this.isDataLoaded=!1,await this.getUsers().then((({data:e})=>{e.success&&(e.page<e.total_pages?this.isAvaliableMore=!0:this.isAvaliableMore=!1,this.isDataLoaded=!0,this.setUserData(e),this.updateCurrentPage())}))}},async created(){await this.getUsers().then((({data:e})=>{e.success&&(this.setUserData(e),this.updateCurrentPage())}))}},F=k,$=(0,h.Z)(F,b,C,!1,null,"081fac1e",null),N=$.exports,D=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("section",{staticClass:"sign-up",attrs:{id:"sign-up"}},[e.isUserRegistered?[t("h1",{staticClass:"sign-up__title"},[e._v("User successfully registered")]),e._m(0)]:[t("h1",{staticClass:"sign-up__title"},[e._v("Working with POST request")]),e.isUserRegistered?e._e():t("form",{staticClass:"sign-up__form"},[t("div",{staticClass:"sign-up__fields"},[t("SignUpTextField",{attrs:{type:e.userName.type,id:e.userName.id,name:e.userName.name,label:e.userName.label,message:e.userName.message,errorMessage:e.userName.errorMessage,hasError:e.userName.hasError,regex:e.userName.regex},on:{error:e.inputErrorHandler},model:{value:e.userName.value,callback:function(s){e.$set(e.userName,"value",s)},expression:"userName.value"}}),t("SignUpTextField",{attrs:{type:e.userEmail.type,id:e.userEmail.id,name:e.userEmail.name,label:e.userEmail.label,message:e.userEmail.message,errorMessage:e.userEmail.errorMessage,hasError:e.userEmail.hasError,regex:e.userEmail.regex},on:{error:e.inputErrorHandler},model:{value:e.userEmail.value,callback:function(s){e.$set(e.userEmail,"value",s)},expression:"userEmail.value"}}),t("SignUpTextField",{attrs:{type:e.userPhone.type,id:e.userPhone.id,name:e.userPhone.name,label:e.userPhone.label,message:e.userPhone.message,errorMessage:e.userPhone.errorMessage,hasError:e.userPhone.hasError,regex:e.userPhone.regex},on:{error:e.inputErrorHandler},model:{value:e.userPhone.value,callback:function(s){e.$set(e.userPhone,"value",s)},expression:"userPhone.value"}})],1),t("div",{staticClass:"sign-up__positions"},[t("div",{staticClass:"sign-up__positions-title"},[e._v("Select your position")]),e._l(e.getAllPositions,(function(s,r){return t("SignUpRadioField",{key:r,attrs:{position:s},model:{value:e.userPosition.value,callback:function(s){e.$set(e.userPosition,"value",s)},expression:"userPosition.value"}})}))],2),t("div",{staticClass:"sign-up__file"},[t("SignUpFileField",{attrs:{hasError:e.userPhoto.hasError,errorMessage:e.userPhoto.errorMessage},on:{error:e.inputErrorHandler},model:{value:e.userPhoto.value,callback:function(s){e.$set(e.userPhoto,"value",s)},expression:"userPhoto.value"}})],1),t("div",{staticClass:"sign-up__submit"},[t("button",{staticClass:"button",class:{disabled:!e.isAvailableSignUp},attrs:{type:"button"},on:{click:function(s){return e.signUpUserForm()}}},[e._v(" Sign up ")])])])]],2)},T=[function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",{staticClass:"sign-up__success"},[r("img",{attrs:{src:t(7302),alt:""}})])}],O=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"form-field",class:{"has-error":e.hasError,"has-value":e.isHasValue}},[t("input",{staticClass:"form-field__input",attrs:{type:e.type,id:e.id,name:e.name,placeholder:e.label},on:{input:e.handleFieldChange}}),t("label",{staticClass:"form-field__label",attrs:{for:"your-name"}},[e._v(e._s(e.label))]),t("span",{staticClass:"form-field__message"},[e._v(e._s(e.errorMessage?e.errorMessage:e.message))])])},H=[],Z={name:"SignUpTextField",data(){return{isHasValue:!1,isHasError:!1}},props:{type:{type:String,required:!0},id:{type:String,required:!0},name:{type:String,required:!0},label:{type:String,required:!0},message:{type:String,required:!0},errorMessage:{type:String},hasError:{type:Boolean},regex:{type:RegExp}},methods:{handleFieldChange(e){this.$emit("input",e.target.value),this.isHasValue=!!e.target.value.length,e.target.value.match(this.regex)?this.isHasError=!1:this.isHasError=!0,this.$emit("error",{fieldName:this.name,hasError:this.isHasError})}}},z=Z,j=(0,h.Z)(z,O,H,!1,null,"77549437",null),A=j.exports,q=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"form-radio"},[t("input",{staticClass:"form-radio__input",attrs:{type:"radio",id:"position-"+e.position.id,name:"position"},domProps:{value:e.position.id},on:{change:e.handlePositionChange}}),t("label",{staticClass:"form-radio__label",attrs:{for:"position-"+e.position.id}},[e._v(" "+e._s(e.position.name)+" ")])])},X=[],L={name:"SignUpRadioField",props:{position:{type:Object,required:!0},value:{type:String}},methods:{handlePositionChange(e){this.$emit("input",e.target.value)}}},R=L,I=(0,h.Z)(R,q,X,!1,null,"b8ad96a4",null),V=I.exports,W=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"form-file",class:{"has-error":e.hasError}},[t("input",{staticClass:"form-file__input",attrs:{type:"file",id:"user-file",name:"file",enctype:"multipart/form-data",accept:".jpg,.jpeg"},on:{change:e.handleFileChange}}),t("label",{staticClass:"form-file__label",attrs:{for:"user-file"}},[e._v("Upload")]),t("div",{staticClass:"form-file__name"},[e.value?t("div",{staticClass:"form-file__name-uploaded"},[e._v(e._s(e.getFileName))]):t("div",{staticClass:"form-file__name-default"},[e._v("Upload your photo")])]),t("span",{staticClass:"form-file__message"},[e._v(" "+e._s(e.errorMessage?e.errorMessage:"")+" ")])])},B=[],J={name:"SignUpFileField",props:{value:{type:File},errorMessage:{type:String},hasError:{type:Boolean}},computed:{getFileName(){return this.value.name.split(".").slice(0,-1).join(".")}},methods:{handleFileChange(e){this.$emit("input",e.target.files[0]),this.$emit("error",{fieldName:"photo",hasError:this.isHasError})}}},G=J,Y=(0,h.Z)(G,W,B,!1,null,"f92d4e1a",null),K=Y.exports,Q={name:"SignUpForm",data(){return{isUserRegistered:!1,userName:{id:"your-name",type:"text",value:null,name:"name",label:"Your name",regex:/^[a-zA-Z\s]{2,60}$/,message:"Jhon",hasError:!1,errorMessage:""},userEmail:{id:"your-email",type:"email",value:null,name:"email",label:"Email",regex:/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,message:"jhon@example.com",hasError:!1,errorMessage:""},userPhone:{id:"your-pnone",type:"tel",value:null,name:"phone",label:"Phone",regex:/^[\+]{0,1}380([0-9]{9})$/,message:"+38 XXX XXX XX XX",hasError:!1,errorMessage:""},userPosition:{value:null},userPhoto:{value:null,hasError:!1,errorMessage:""}}},components:{SignUpTextField:A,SignUpRadioField:V,SignUpFileField:K},computed:{...(0,y.Se)(["getAllPositions"]),isAvailableSignUp(){return!(this.userName.hasError||this.userEmail.hasError||this.userPhone.hasError||!this.userPosition.value||!this.userPhoto.value)}},methods:{...(0,y.nv)(["getPositions","getToken","signUpUser","getUsers"]),...(0,y.OI)(["setDefaultUserData","setUserData","setPositions"]),inputErrorHandler(e){"name"===e.fieldName&&(this.userName.hasError=e.hasError),"email"===e.fieldName&&(this.userEmail.hasError=e.hasError),"phone"===e.fieldName&&(this.userPhone.hasError=e.hasError),"photo"===e.fieldName&&(this.userPhoto.hasError=e.hasError)},async signUpUserForm(){let e=new FormData;e.append("position_id",this.userPosition.value),e.append("name",this.userName.value),e.append("email",this.userEmail.value),e.append("phone",this.userPhone.value),e.append("photo",this.userPhoto.value),await this.getToken().then((({data:s})=>{s.success&&this.signUpUser({userData:e,token:s.token}).then((({data:e})=>{e.success&&(this.setDefaultUserData(),this.getUsers().then((({data:e})=>{e.success&&(this.setUserData(e),this.isUserRegistered=!0,this.userName.value=null,this.userEmail.value=null,this.userPhone.value=null,this.userPosition.value=null,this.userPhoto.value=null)})))})).catch((e=>{let s=e.response.data,t=e.response.status;401===t&&alert(s.message),409===t&&(this.userEmail.hasError=!0,this.userPhone.hasError=!0,this.userEmail.errorMessage=s.message,this.userPhone.errorMessage=s.message),422===t&&(s.fails["name"]&&(this.userName.hasError=!0,this.userName.errorMessage=s.fails["name"][0]),s.fails["email"]&&(this.userEmail.hasError=!0,this.userEmail.errorMessage=s.fails["email"][0]),s.fails["phone"]&&(this.userPhone.hasError=!0,this.userPhone.errorMessage=s.fails["phone"][0]),s.fails["photo"]&&(this.userPhoto.hasError=!0,this.userPhoto.errorMessage=s.fails["photo"][0]))}))}))}},async created(){await this.getPositions().then((({data:e})=>{this.setPositions(e.positions)}))}},ee=Q,se=(0,h.Z)(ee,D,T,!1,null,"85ae9b22",null),te=se.exports,re={name:"App",components:{HeaderComponent:d,IntroComponent:E,UserList:N,SignUpForm:te}},ae=re,ie=(0,h.Z)(ae,a,i,!1,null,null,null),ne=ie.exports,oe=t(6166),le=t.n(oe);r.Z.use(y.ZP);var ue=new y.ZP.Store({state:{totalPages:0,currentPage:1,users:[],positions:[]},getters:{getAllUsers(e){return e.users},getAllPositions(e){return e.positions}},mutations:{setDefaultUserData(e){e.currentPage=1,e.users=[]},setUserData(e,s){e.totalPages=s.total_pages,e.users.push(...s.users)},setPositions(e,s){e.positions=s},updateCurrentPage(e){e.currentPage+=1}},actions:{async getUsers({state:e}){return await le().get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${e.currentPage}&count=6`)},async getPositions(){return await le().get("https://frontend-test-assignment-api.abz.agency/api/v1/positions")},async getToken(){return await le().get("https://frontend-test-assignment-api.abz.agency/api/v1/token")},async signUpUser(e,{userData:s,token:t}){return await le().post("https://frontend-test-assignment-api.abz.agency/api/v1/users",s,{headers:{Token:t}})}}}),ce=t(9483);r.Z.config.productionTip=!1,r.Z.use(ce.Z,le()),new r.Z({store:ue,render:e=>e(ne)}).$mount("#app")},2835:function(e,s,t){e.exports=t.p+"img/logo.0902afb7.svg"},7302:function(e,s,t){e.exports=t.p+"img/success-image.67f15749.svg"}},s={};function t(r){var a=s[r];if(void 0!==a)return a.exports;var i=s[r]={id:r,loaded:!1,exports:{}};return e[r](i,i.exports,t),i.loaded=!0,i.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(s,r,a,i){if(!r){var n=1/0;for(c=0;c<e.length;c++){r=e[c][0],a=e[c][1],i=e[c][2];for(var o=!0,l=0;l<r.length;l++)(!1&i||n>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[l])}))?r.splice(l--,1):(o=!1,i<n&&(n=i));if(o){e.splice(c--,1);var u=a();void 0!==u&&(s=u)}}return s}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,a,i]}}(),function(){t.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(s,{a:s}),s}}(),function(){t.d=function(e,s){for(var r in s)t.o(s,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:s[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)}}(),function(){t.p="/"}(),function(){var e={143:0};t.O.j=function(s){return 0===e[s]};var s=function(s,r){var a,i,n=r[0],o=r[1],l=r[2],u=0;if(n.some((function(s){return 0!==e[s]}))){for(a in o)t.o(o,a)&&(t.m[a]=o[a]);if(l)var c=l(t)}for(s&&s(r);u<n.length;u++)i=n[u],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(c)},r=self["webpackChunkabz_agency"]=self["webpackChunkabz_agency"]||[];r.forEach(s.bind(null,0)),r.push=s.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(9627)}));r=t.O(r)})();
//# sourceMappingURL=app.cd76aaf9.js.map