<template>
  <div :class="checked ? 'shadow' : ''" class="mb-4">
    <label :for="`item_${data.id}`" style="cursor: pointer" class="w-100">
      <list-item :data="data" />
    </label>
    <input
      type="checkbox"
      :id="`item_${data.id}`"
      :checked="checked"
      @change="change"
      :disabled="disabled"
      class="d-none"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import ListItem from "./Item.vue";

export default {
  components: { ListItem },
  props: ["data", "checked", 'disabled'],
  computed: {
    ...mapState(["leftSelected"]),
  },
  methods: {
    change() {
      let checked = null;

      checked = !this.checked;

      this.$emit("change", {
        id: this.data.id,
        value: checked,
      });
    },
  },
};
</script>
