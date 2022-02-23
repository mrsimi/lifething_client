<template>
  <div>
    <div class="grid place-items-center h-screen">
      <div class="w-mdview">
        <p class="bg-black inline text-white px-2 py-2 font-bold md:text-xl">
          LTg
        </p>
        <p class="mt-5 md:text-2xl font-bold">LifeThing</p>
        <p class="mb-5">Welcome back</p>
     
        <form @submit.prevent="loginUser()" method="post">
          <div>
            <label class="block py-2 font-bold">Email: </label>
            <input
              placeholder="e.g. someone@example.com"
              type="email"
              v-model="loginRequest.email"
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
              v-model="loginRequest.password"
              required
            />
          </div>
          <button
            class="mt-5 w-full bg-black py-3 text-white font-bold"
            type="submit"
          >
            Login
          </button>
        </form>
        <p class="pt-6 text-center">
          Don't have an account?
          <nuxt-link to="/" class="underline font-bold">SignUp</nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      loginRequest: {
        email: "some@gmail.com",
        password: "xda-devel",
      },
    };
  },
  computed: {
    ...mapGetters({
      errorMsg: "auth/getLoginError",
    }),
  },
  methods: {
    loginUser() {
      this.$store.dispatch("auth/LOGIN", this.loginRequest);

      if (this.$store.state.auth.loggedIn) {
          this.$toast.success("Successfully logged in", {
              duration: 1000
          })
        this.$router.push("/");
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
