<template>
  <section id="sign-up" class="sign-up">
    <div class="container">
      <template v-if="!isUserRegistered">
        <h1 class="sign-up__title">Working with POST request</h1>

        <form class="sign-up__form" v-if="!isUserRegistered">
          <div class="sign-up__fields">
            <SignUpTextField
              :type="userName.type"
              v-model="userName.value"
              :id="userName.id"
              :name="userName.name"
              :label="userName.label"
              :message="userName.message"
              :errorMessage="userName.errorMessage"
              :hasError="userName.hasError"
              :regex="userName.regex"
              @error="inputErrorHandler"
            />
            <SignUpTextField
              :type="userEmail.type"
              v-model="userEmail.value"
              :id="userEmail.id"
              :name="userEmail.name"
              :label="userEmail.label"
              :message="userEmail.message"
              :errorMessage="userEmail.errorMessage"
              :hasError="userEmail.hasError"
              :regex="userEmail.regex"
              @error="inputErrorHandler"
            />
            <SignUpTextField
              :type="userPhone.type"
              v-model="userPhone.value"
              :id="userPhone.id"
              :name="userPhone.name"
              :label="userPhone.label"
              :message="userPhone.message"
              :errorMessage="userPhone.errorMessage"
              :hasError="userPhone.hasError"
              :regex="userPhone.regex"
              @error="inputErrorHandler"
            />
          </div>
          <div class="sign-up__positions">
            <div class="sign-up__positions-title">Select your position</div>
            <SignUpRadioField
              v-for="(position, key) in getAllPositions"
              :key="key"
              v-model="userPosition.value"
              :position="position"
            />
          </div>
          <div class="sign-up__file">
            <SignUpFileField
              v-model="userPhoto.value"
              :hasError="userPhoto.hasError"
              :errorMessage="userPhoto.errorMessage"
              @error="inputErrorHandler"
            />
          </div>
          <div class="sign-up__submit">
            <button
              type="button"
              class="button"
              :class="{ disabled: !isAvailableSignUp }"
              @click="signUpUserForm()"
            >
              Sign up
            </button>
          </div>
        </form>
      </template>
      <template v-else>
        <h1 class="sign-up__title">User successfully registered</h1>

        <div class="sign-up__success">
          <img src="@/assets/images/success-image.svg" alt="" />
        </div>
      </template>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
import { mapActions, mapGetters, mapMutations } from "vuex";

import SignUpTextField from "@/components/sign-up/SignUpTextField.vue";
import SignUpRadioField from "@/components/sign-up/SignUpRadioField.vue";
import SignUpFileField from "@/components/sign-up/SignUpFileField.vue";

export default {
  name: "SignUpForm",
  data() {
    return {
      isUserRegistered: false,
      userName: {
        id: "your-name",
        type: "text",
        value: null,
        name: "name",
        label: "Your name",
        regex: /^[a-zA-Z\s]{2,60}$/,
        message: "Jhon",
        hasError: false,
        errorMessage: "",
      },
      userEmail: {
        id: "your-email",
        type: "email",
        value: null,
        name: "email",
        label: "Email",
        regex:
          /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
        message: "jhon@example.com",
        hasError: false,
        errorMessage: "",
      },
      userPhone: {
        id: "your-pnone",
        type: "tel",
        value: null,
        name: "phone",
        label: "Phone",
        regex: /^[\+]{0,1}380([0-9]{9})$/,
        message: "+38 XXX XXX XX XX",
        hasError: false,
        errorMessage: "",
      },
      userPosition: {
        value: null,
      },
      userPhoto: {
        value: null,
        hasError: false,
        errorMessage: "",
      },
    };
  },
  components: {
    SignUpTextField,
    SignUpRadioField,
    SignUpFileField,
  },
  computed: {
    ...mapGetters(["getAllPositions"]),
    isAvailableSignUp() {
      return this.userName.hasError ||
        this.userEmail.hasError ||
        this.userPhone.hasError ||
        !this.userPosition.value ||
        !this.userPhoto.value
        ? false
        : true;
    },
  },
  methods: {
    ...mapActions(["getPositions", "getToken", "signUpUser", "getUsers"]),
    ...mapMutations(["setDefaultUserData", "setUserData", "setPositions"]),
    inputErrorHandler($event) {
      if ($event.fieldName === "name") {
        this.userName.hasError = $event.hasError;
      }
      if ($event.fieldName === "email") {
        this.userEmail.hasError = $event.hasError;
      }
      if ($event.fieldName === "phone") {
        this.userPhone.hasError = $event.hasError;
      }
      if ($event.fieldName === "photo") {
        this.userPhoto.hasError = $event.hasError;
      }
    },
    async signUpUserForm() {
      let userData = new FormData();
      userData.append("position_id", this.userPosition.value);
      userData.append("name", this.userName.value);
      userData.append("email", this.userEmail.value);
      userData.append("phone", this.userPhone.value);
      userData.append("photo", this.userPhoto.value);

      await this.getToken().then(({ data }) => {
        if (data.success) {
          this.signUpUser({ userData: userData, token: data.token })
            .then(({ data }) => {
              if (data.success) {
                this.setDefaultUserData();
                this.getUsers().then(({ data }) => {
                  if (data.success) {
                    this.setUserData(data);
                    this.isUserRegistered = true;

                    this.userName.value = null;
                    this.userEmail.value = null;
                    this.userPhone.value = null;
                    this.userPosition.value = null;
                    this.userPhoto.value = null;
                  }
                });
              }
            })
            .catch((error) => {
              let errorData = error.response.data;
              let errorStatus = error.response.status;

              if (errorStatus === 401) {
                alert(errorData.message);
              }

              if (errorStatus === 409) {
                this.userEmail.hasError = true;
                this.userPhone.hasError = true;
                this.userEmail.errorMessage = errorData.message;
                this.userPhone.errorMessage = errorData.message;
              }

              if (errorStatus === 422) {
                if (errorData.fails["name"]) {
                  this.userName.hasError = true;
                  this.userName.errorMessage = errorData.fails["name"][0];
                }
                if (errorData.fails["email"]) {
                  this.userEmail.hasError = true;
                  this.userEmail.errorMessage = errorData.fails["email"][0];
                }
                if (errorData.fails["phone"]) {
                  this.userPhone.hasError = true;
                  this.userPhone.errorMessage = errorData.fails["phone"][0];
                }
                if (errorData.fails["photo"]) {
                  this.userPhoto.hasError = true;
                  this.userPhoto.errorMessage = errorData.fails["photo"][0];
                }
              }
            });
        }
      });
    },
  },
  async created() {
    await this.getPositions().then(({ data }) => {
      this.setPositions(data.positions);
    });
  },
};
</script>

<style lang="scss" scoped>
.sign-up {
  padding-top: 140px;
  padding-bottom: 100px;

  &__title {
    margin-bottom: 50px;
    text-align: center;
  }

  &__form {
    max-width: 380px;
    margin: auto;

    .form-field {
      margin-bottom: 50px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .form-radio {
      margin-bottom: 7px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &__fields {
    margin-bottom: 43px;
  }

  &__positions {
    margin-bottom: 45px;

    &-title {
      margin-bottom: 11px;
    }
  }

  &__file {
    margin-bottom: 48px;
  }

  &__submit {
    text-align: center;
  }

  &__success {
    max-width: 328px;
    margin: auto;
  }
}
</style>
