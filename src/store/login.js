const Login = {
  namespaced:true,
  state:{
     
  },
  mutations:{
    changeLogin(state,data) {
      state.isLogin = data;
    }
  },
}
export default Login;