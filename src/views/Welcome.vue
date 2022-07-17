<template>
  <div class="welcome container">
    <p>Welcome</p>
    <div v-if="ShowLogin">
      <h2>Log in</h2>
      <LoginForm @login="enterChat"/>
      <p>No account yet?<span @click="ShowLogin = false">Signup</span> instead</p>
    </div>
    <div v-else>
      <h2>Sign up</h2>
      <SignupForm @signup="enterChat"/>
      <p>Already registered?<span @click="ShowLogin = true">Login</span> instead</p>
    </div>
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'


export default {
  components:{ SignupForm, LoginForm },

  setup(){
    const ShowLogin = ref(true)
    const router = useRouter()

    const enterChat = () => {
        router.push({ name: 'Chatroom' })
    }


    return{ ShowLogin, enterChat}
  }

}
</script>

<style>
.welcome{
    text-align: center;
    padding: 20px 0;
}

.welcome label{
  display: block;
  margin: 20px auto;
}
.welcome input {
  display: block;
  width: 30%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
.welcome span{
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button{
  margin: 20px auto;
}
</style>