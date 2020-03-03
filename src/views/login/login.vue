<template>
  <div>
      <van-form @submit="onSubmit">
          <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ pattern,required: true, message: '开头为英文字母，账户名需6-10位' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ pattern1, required: true, message: '请填写密码' }]"
          />
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">
              登录
            </van-button>
          </div>
    </van-form>
  </div>

</template>
<script>
import Vue from 'vue';
import { Form } from 'vant';
import { Field } from 'vant';
Vue.use(Form).use(Field);
export default {
 name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      pattern: /[a-z]\w{5,9}$/i,// 开头为字母，账户名需6-10位
      pattern1: /\w{6,10}/,
    };
  },
  methods: {
    onSubmit(values) {
      if(this.pattern && this.pattern1) {
        this.$store.commit('Login/changeLogin','1');
        this.$router.push('/mine')
      }
    }
  },
}
 
</script>
<style lang='sass' scoped>


</style>