<template>
  <header id="header" class="header">
    <div class="container">
      <div class="header__flex">
        <a href="#" @click.prevent="scrollTo('#intro')" class="header__logo">
          <img src="@/assets/images/logo.svg" alt="Logo" />
        </a>
        <nav class="header__nav">
          <a
            href="#"
            @click.prevent="scrollTo('#user-list')"
            class="header__nav-item button"
            >Users</a
          >
          <a
            href="#"
            @click.prevent="scrollTo('#sign-up')"
            class="header__nav-item button"
            >Sign up</a
          >
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import scrollTo from "@/mixins/scrollTo";

export default {
  name: "HeaderComponent",
  mixins: [scrollTo],
};
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  background: #fff;
  padding: 13px 0;
  z-index: 100;

  &__flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  &__nav {
    &-item {
      margin-right: 10px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
