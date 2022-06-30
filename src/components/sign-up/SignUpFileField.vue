<template>
  <div class="form-file" :class="{ 'has-error': hasError }">
    <input
      type="file"
      id="user-file"
      class="form-file__input"
      name="file"
      enctype="multipart/form-data"
      accept=".jpg,.jpeg"
      @change="handleFileChange"
    />
    <label for="user-file" class="form-file__label">Upload</label>
    <div class="form-file__name">
      <div class="form-file__name-uploaded" v-if="value">{{ getFileName }}</div>
      <div class="form-file__name-default" v-else>Upload your photo</div>
    </div>
    <span class="form-file__message">
      {{ errorMessage ? errorMessage : "" }}
    </span>
  </div>
</template>

<script>
export default {
  name: "SignUpFileField",
  props: {
    value: {
      type: File,
    },
    errorMessage: {
      type: String,
    },
    hasError: {
      type: Boolean,
    },
  },
  computed: {
    getFileName() {
      return this.value.name.split(".").slice(0, -1).join(".");
    },
  },
  methods: {
    handleFileChange(e) {
      this.$emit("input", e.target.files[0]);

      this.$emit("error", { fieldName: "photo", hasError: this.isHasError });
    },
  },
};
</script>

<style lang="scss" scoped>
.form-file {
  position: relative;
  display: flex;
  align-items: center;

  &__input {
    display: none;
  }

  &__label {
    display: block;
    flex-basis: 83px;
    max-width: 83px;
    padding: 14px 16px;
    border: 1px solid rgba($color: #000, $alpha: 87%);
    border-radius: 4px 0 0 4px;
    line-height: 26px;
    color: rgba($color: #000, $alpha: 87%);
    cursor: pointer;
  }

  &__name {
    flex-basis: calc(100% - 83px);
    max-width: calc(100% - 83px);
    padding: 14px 14px 14px 16px;
    border: 1px solid $border-color;
    border-left: none;
    border-radius: 0 4px 4px 0;
    color: $field-color;

    &-default {
      color: $field-color;
    }

    &-uploaded {
      color: rgba($color: #000, $alpha: 87%);
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
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

  &.has-error & {
    &__input {
      border-width: 2px;
      border-color: $error-color;
    }

    &__label,
    &__name {
      border-width: 2px;
      border-color: $error-color;
    }

    &__message {
      visibility: visible;
      opacity: 1;
      color: $error-color;
    }
  }
}
</style>
