<template>
  <div class="user-card">
    <div class="user-card__avatar">
      <img :src="user.photo" alt="User" />
    </div>
    <div class="user-card__name" :data-title="user.name">
      <span>{{ user.name }}</span>
    </div>
    <div class="user-card__detail">
      <p>{{ user.position }}</p>
      <p :data-title="user.email">
        <span>{{ user.email }}</span>
      </p>
      <p>{{ user.phone }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.user-card {
  padding: 20px;
  background: #fff;
  border-radius: 16px;
  color: rgba($color: #000, $alpha: 87%);

  &__avatar {
    position: relative;
    width: 70px;
    height: 70px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    border-radius: 50%;
    overflow: hidden;
  }

  &__name {
    margin-bottom: 20px;
    text-align: center;

    span {
      display: block;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }

  &__detail {
    text-align: center;

    p {
      margin: 0;

      span {
        display: block;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }

  [data-title] {
    position: relative;
    cursor: pointer;

    &::before {
      content: attr(data-title);
      position: absolute;
      top: 30px;
      left: 50%;
      transform: translateX(-50%);
      width: auto;
      min-width: 300px;
      max-width: 300px;
      padding: 3px 16px;
      background: rgba($color: #000, $alpha: 87%);
      border-radius: 4px;
      font-size: 16px;
      word-break: break-all;
      color: #fff;
      visibility: hidden;
      opacity: 0;
      transition: all 0.5s linear;
    }

    &:hover {
      &::before {
        visibility: visible;
        opacity: 1;
      }
    }
  }
}
</style>
