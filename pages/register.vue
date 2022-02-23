<template>
  <div>
    <div class="grid place-items-center h-screen">
      <div class="w-mdview">
        <p class="bg-black inline text-white px-2 py-2 font-bold md:text-xl">
          LTg
        </p>
        <p class="mt-5 md:text-2xl font-bold">LifeThing</p>
        <p class="mb-5">Welcome!</p>
     
        <form @submit.prevent="registerUser()" method="post">
          <div>
            <label class="block py-2 font-bold">Email: </label>
            <input
              placeholder="e.g. someone@example.com"
              type="email"
              v-model="registerRequest.email"
              class="w-full py-2 px-3 border border-black border-2"
              required
            />
          </div>
          <div class="pt-3">
            <label class="block py-2 font-bold">Password: </label>
            <input
              placeholder="********"
              class="w-full py-2 px-3 border border-black border-2"
              type="password"
              v-model="registerRequest.password"
              required
            />
          </div>
           <div class="pt-3">
            <label class="block py-2 font-bold">Confirm Password: </label>
            <input
              placeholder="********"
              class="w-full py-2 px-3 border border-black border-2"
              type="password" @blur="validate()"
              v-model="confirmPassword"
              required
            />
            <p class="text-red-500" v-if="!isPasswordMatch">
                Password do not match
            </p>
          </div>
          <button
            class="mt-5 w-full bg-black py-3 text-white font-bold"
            type="submit"
          >
            Register
          </button>
        </form>
       
      </div>
    </div>
  </div>
</template>

<script>    
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      registerRequest: {
        email: "some@gmail.com",
        password: "xda-devel",
      },
      confirmPassword: '', 
      isPasswordMatch: true
    };
  },
  computed: {
    ...mapGetters({
      errorMsg: "auth/getLoginError",
      registerRes: 'auth/getRegisterRes'
    }),
  },
  methods: {
    validate(){
        if(this.registerRequest.password === this.confirmPassword){
            this.isPasswordMatch = true;
        }else{
            this.isPasswordMatch = false;
        }
    },
    registerUser() {
        
      this.$store.dispatch("auth/REGISTER", this.registerRequest);
     

      if(this.registerRes.httpStatusCode == 201){
        this.$toast.success(this.registerRes.responseMessage, {
              duration: 1000
        })
      }
    if (this.$store.state.auth.loginError.length > 0) {
        this.$toast.error(this.errorMsg, {
              duration: 1000
        })
      }
    },
  },
};
</script>
<style scoped>
.w-mdview {
  width: 400px;
}

@media only screen and (max-width: 400px) {
  .w-mdview {
    width: 300px;
  }
}
</style>
