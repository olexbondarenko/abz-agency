<template>
  <div id="app">
    <HeaderComponent />
    <main>
      <IntroComponent />
      <UserList />
      <SignUpForm />
    </main>
  </div>
</template>

<script>
import HeaderComponent from "@/components/header/HeaderComponent.vue";
import IntroComponent from "@/components/intro/IntroComponent.vue";
import UserList from "@/components/users/UserList.vue";
import SignUpForm from "@/components/sign-up/SignUpForm.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    IntroComponent,
    UserList,
    SignUpForm,
  },
};
</script>
<style lang="scss" src="@/assets/scss/main.scss"></style>
