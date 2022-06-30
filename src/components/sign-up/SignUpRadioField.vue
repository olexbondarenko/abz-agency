<template>
  <div class="form-radio">
    <input
      type="radio"
      :id="`position-${position.id}`"
      class="form-radio__input"
      name="position"
      :value="position.id"
      @change="handlePositionChange"
    />
    <label :for="`position-${position.id}`" class="form-radio__label">
      {{ position.name }}
    </label>
  </div>
</template>

<script>
export default {
  name: "SignUpRadioField",
  props: {
    position: {
      type: Object,
      required: true,
    },
    value: {
      type: String,
    },
  },
  methods: {
    handlePositionChange(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.form-radio {
  &__input[type="radio"] {
    display: none;

    &:checked {
      + label {
        &::after {
          opacity: 1;
          visibility: visible;
        }
      }
    }
  }

  &__label {
    position: relative;
    display: block;
    padding-left: 32px;
    color: rgba($color: #000, $alpha: 87%);
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      width: 20px;
      height: 20px;
      transform: translateY(-50%);
      border: 1px solid $secondary-color;
      border-radius: 50%;
    }

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 5px;
      width: 10px;
      height: 10px;
      transform: translateY(-50%);
      background: $secondary-color;
      border-radius: 50%;
      transition: all 0.3s linear;
      opacity: 0;
      visibility: hidden;
    }
  }
}
</style>
