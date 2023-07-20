<template>
  <div :class="selected == data.id ? 'shadow' : ''" class="mb-4">
    <label :for="`item_${data.id}`" style="cursor: pointer" class="w-100">
      <list-item :data="data" />
    </label>
    <input type="radio" :id="`item_${data.id}`" :value="data.id" v-model="tempSelected" class="d-none" />
  </div>
</template>

<script>
import ListItem from "./Item.vue";

export default {
  components: { ListItem },
  props: ["data", 'selected'],
  computed: {
    tempSelected: {
      get() {
        return this.selected;
      },
      set(val) {
        this.$emit('update', val)
      },
    },
  },
  methods: {},
};
</script>
