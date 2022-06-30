<template>
  <section id="user-list" class="user-list">
    <div class="container">
      <h1 class="user-list__title">Working with GET request</h1>

      <div class="user-list__flex">
        <div
          class="user-list__col"
          :key="key"
          v-for="(user, key) in getAllUsers"
        >
          <UserCard :user="user" />
        </div>
      </div>

      <div class="user-list__more">
        <a
          href="#"
          v-if="isAvaliableMore"
          class="button"
          :class="{ disabled: !isDataLoaded }"
          @click.prevent="showMore()"
        >
          Show more
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from "vuex";
import UserCard from "@/components/users/UserCard.vue";

export default {
  name: "UserList",
  data() {
    return {
      isDataLoaded: true,
      isAvaliableMore: true,
    };
  },
  components: {
    UserCard,
  },
  computed: {
    ...mapGetters(["getAllUsers"]),
  },
  methods: {
    ...mapMutations(["setUserData", "updateCurrentPage"]),
    ...mapActions(["getUsers"]),
    async showMore() {
      this.isDataLoaded = false;

      await this.getUsers().then(({ data }) => {
        if (data.success) {
          data.page < data.total_pages
            ? (this.isAvaliableMore = true)
            : (this.isAvaliableMore = false);
          this.isDataLoaded = true;
          this.setUserData(data);
          this.updateCurrentPage();
        }
      });
    },
  },
  async created() {
    await this.getUsers().then(({ data }) => {
      if (data.success) {
        this.setUserData(data);
        this.updateCurrentPage();
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.user-list {
  padding-top: 140px;

  &__title {
    margin-bottom: 50px;
    text-align: center;
  }

  &__flex {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -14.5px;
  }

  &__col {
    flex-basis: calc(100% / 3);
    max-width: calc(100% / 3);
    padding: 0 14.5px;
    margin-bottom: 29px;
  }

  &__more {
    padding-top: 21px;
    text-align: center;

    .button {
      width: 120px;
    }
  }
}

@media screen and (max-width: 991px) {
  .user-list {
    &__col {
      flex-basis: 50%;
      max-width: 50%;
    }
  }
}

@media screen and (max-width: 767px) {
  .user-list {
    &__col {
      flex-basis: 100%;
      max-width: 100%;
    }
  }
}
</style>
