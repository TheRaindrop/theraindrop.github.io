webpackJsonp([12],{"3jL2":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={data:function(){return{formCustom:{username:"",passwd:""},ruleCustom:{username:[{validator:function(e,t,s){if(!t)return s(new Error("用户名不能为空"));s()},trigger:"blur"}],passwd:[{validator:function(e,t,s){t?s():s(new Error("请输入密码"))},trigger:"blur"}]},remember:!0}},methods:{handleSubmit:function(e){var t=this,s=this;this.$refs[e].validate(function(e){e?t.$http.post("/users/token",{},{auth:{username:t.formCustom.username,password:t.formCustom.passwd}}).then(function(e){window.localStorage.setItem("Token",e.data.token),s.$message({message:"登录成功",type:"success"}),localStorage.setItem("gm_username",s.formCustom.username),!0===s.remember&&localStorage.setItem("gm_passwd",s.formCustom.passwd),s.$router.push("/home")}).catch(function(e){console.log(e)}):t.$message({message:"格式不正确",type:"error"})})},handleReset:function(e){this.$refs[e].resetFields()}},created:function(){localStorage.gm_username&&(this.formCustom.username=localStorage.gm_username),localStorage.gm_passwd&&(this.formCustom.passwd=localStorage.gm_passwd)},mounted:function(){document.getElementById("app").style.height="100%"},destroyed:function(){document.getElementById("app").style.height=""}},r={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login-wrap"},[s("div",{staticClass:"gm-title"},[e._v("客服管理系统")]),s("div",{staticClass:"gm-login"},[s("el-form",{ref:"formCustom",staticClass:"demo-ruleForm",attrs:{model:e.formCustom,rules:e.ruleCustom}},[s("el-form-item",{attrs:{prop:"username"}},[s("el-input",{attrs:{type:"text",placeholder:"请输入用户名",autofocus:"autofocus"},model:{value:e.formCustom.username,callback:function(t){e.$set(e.formCustom,"username",t)},expression:"formCustom.username"}})],1),s("el-form-item",{attrs:{prop:"passwd"}},[s("el-input",{attrs:{type:"password",placeholder:"请输入密码"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleSubmit("formCustom")}},model:{value:e.formCustom.passwd,callback:function(t){e.$set(e.formCustom,"passwd",t)},expression:"formCustom.passwd"}})],1),s("el-form-item",{attrs:{prop:"remberMe"}},[s("el-checkbox",{model:{value:e.remember,callback:function(t){e.remember=t},expression:"remember"}},[e._v("记住密码")])],1),s("el-form-item",[s("el-button",{staticStyle:{width:"100%"},attrs:{type:"success",size:"medium"},on:{click:function(t){e.handleSubmit("formCustom")}}},[e._v("登录")])],1)],1)],1)])},staticRenderFns:[]};var a=s("VU/8")(o,r,!1,function(e){s("cDKG")},"data-v-084069e4",null);t.default=a.exports},cDKG:function(e,t){}});
//# sourceMappingURL=12.360e6c4734866d27a4bf.js.map