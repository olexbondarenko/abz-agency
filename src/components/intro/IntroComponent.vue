<template>
  <section id="intro" class="intro">
    <div class="container">
      <div class="intro__main">
        <div class="intro__main-content">
          <h1 class="intro__main-title">
            Test assignment for front-end developer
          </h1>
          <p class="intro__main-text">
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </p>
          <a href="#" class="button" @click.prevent="scrollTo('#sign-up')"
            >Sign up</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import scrollTo from "@/mixins/scrollTo";

export default {
  name: "IntroComponent",
  mixins: [scrollTo],
};
</script>

<style lang="scss" scoped>
.intro {
  &__main {
    padding-top: 164px;
    padding-bottom: 163px;
    background: linear-gradient(
        0deg,
        rgba($color: #000, $alpha: 50%),
        rgba($color: #000, $alpha: 50%)
      ),
      url("~@/assets/images/intro-bg.jpg") no-repeat;
    background-size: cover;

    &-content {
      max-width: 380px;
      margin: auto;
      text-align: center;
      color: #fff;
    }

    &-title {
      margin-bottom: 21px;
      color: #fff;
    }

    &-text {
      margin-bottom: 32px;
    }
  }
}
</style>
