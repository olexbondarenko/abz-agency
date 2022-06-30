<template>
  <div
    class="form-field"
    :class="{ 'has-error': hasError, 'has-value': isHasValue }"
  >
    <input
      :type="type"
      :id="id"
      :name="name"
      class="form-field__input"
      :placeholder="label"
      @input="handleFieldChange"
    />
    <label for="your-name" class="form-field__label">{{ label }}</label>
    <span class="form-field__message">{{
      errorMessage ? errorMessage : message
    }}</span>
  </div>
</template>

<script>
export default {
  name: "SignUpTextField",
  data() {
    return {
      isHasValue: false,
      isHasError: false,
    };
  },
  props: {
    type: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    errorMessage: {
      type: String,
    },
    hasError: {
      type: Boolean,
    },
    regex: {
      type: RegExp,
    },
  },
  methods: {
    handleFieldChange(e) {
      this.$emit("input", e.target.value);
      this.isHasValue = e.target.value.length ? true : false;

      e.target.value.match(this.regex)
        ? (this.isHasError = false)
        : (this.isHasError = true);

      this.$emit("error", {
        fieldName: this.name,
        hasError: this.isHasError,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.form-field {
  position: relative;

  &__input {
    display: block;
    width: 100%;
    height: 54px;
    padding: 14px 16px;
    background: $body-color;
    border: 1px solid $border-color;
    border-radius: 4px;
    font-size: 16px;
    line-height: 54px;
    color: rgba($color: #000, $alpha: 87%);

    &:focus {
      outline: none;

      ~ .form-field {
        &__message {
          visibility: visible;
          opacity: 1;
        }
      }
    }
  }

  &__label {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    transition: all 0.3s linear;
    background: $body-color;
    font-size: 16px;
    color: $field-color;
    pointer-events: none;
    visibility: hidden;
    opacity: 0;
  }

  &__message {
    position: absolute;
    display: block;
    bottom: -18px;
    left: 16px;
    font-size: 12px;
    line-height: 14px;
    color: $field-color;
    transition: all 0.3s linear;
    visibility: hidden;
    opacity: 0;
  }

  &.has-value & {
    &__input {
      &::-webkit-input-placeholder,
      &:-moz-placeholder,
      &::-moz-placeholder,
      &:-ms-input-placeholder {
        opacity: 0;
      }
    }

    &__label {
      top: 0;
      padding: 0 5px;
      line-height: 14px;
      font-size: 12px;
      visibility: visible;
      opacity: 1;
    }
  }

  &.has-error & {
    &__input {
      border-width: 2px;
      border-color: $error-color;
    }

    &__label {
      color: $error-color;
    }

    &__message {
      visibility: visible;
      opacity: 1;
      color: $error-color;
    }
  }
}
</style>
